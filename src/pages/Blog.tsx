import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../features/utils/getBlogPosts";
import type { BlogPost } from "../features/utils/getBlogPosts";

const PostCover = ({ post }: { post: BlogPost }) => {
  const color = post.color || "#85a9d2";

  // Decorative shapes for the cover
  return (
    <div
      className="w-full h-44 md:h-52 rounded-2xl flex items-end p-5 relative overflow-hidden flex-shrink-0"
      style={{ background: color }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-[-24px] right-[-24px] w-32 h-32 rounded-full opacity-20"
        style={{ background: "#fff" }}
      />
      <div
        className="absolute bottom-[-16px] left-[-16px] w-20 h-20 rounded-full opacity-15"
        style={{ background: "#fff" }}
      />
      <div
        className="absolute top-8 right-8 w-12 h-12 rounded-full opacity-25"
        style={{ background: "#fff" }}
      />
      {/* Category tag */}
      {post.category && (
        <span
          className="relative z-10 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.3)", color: "#fff", backdropFilter: "blur(4px)" }}
        >
          {post.category}
        </span>
      )}
    </div>
  );
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-4 md:px-8">
      <div className="max-w-6xl w-full">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post, idx) => (
            <Link
              key={`${post.slug}-${idx}`}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Cover */}
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 md:h-52 object-cover flex-shrink-0"
                />
              ) : (
                <PostCover post={post} />
              )}

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h2 className="text-base md:text-lg font-bold text-[#2A2420] leading-snug group-hover:text-[#EFBC68] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#ed7a6b] group-hover:gap-2 transition-all">
                  Leer artículo <span className="text-base">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length > visibleCount && (
          <div className="flex justify-center mt-10">
            <button
              className="px-8 py-3 bg-[#2A2420] text-white rounded-full font-semibold hover:bg-[#EFBC68] hover:text-[#2A2420] transition-colors"
              onClick={() => setVisibleCount((c) => Math.min(c + 6, posts.length))}
            >
              Cargar más artículos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
