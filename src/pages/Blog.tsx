import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../features/utils/getBlogPosts";
import type { BlogPost } from "../features/utils/getBlogPosts";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : "Error al cargar");
      }
    })();
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);

  const getDriveIdFromUrl = (url: string) => {
    const matchFile = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
    if (matchFile?.[1]) return matchFile[1];
    const matchUc = url.match(/drive\.google\.com\/uc\?export=view&id=([^&]+)/i);
    if (matchUc?.[1]) return matchUc[1];
    const matchThumb = url.match(/drive\.google\.com\/thumbnail\?id=([^&]+)/i);
    if (matchThumb?.[1]) return matchThumb[1];
    const matchGuc = url.match(/lh3\.googleusercontent\.com\/d\/([^?]+)/i);
    if (matchGuc?.[1]) return matchGuc[1];
    return "";
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-6">
      <div className="max-w-6xl w-full">
        {loadError && (
          <div className="mb-6 text-red-500 text-sm">{loadError}</div>
        )}

        <div className="space-y-8">
          {visiblePosts.map((post, idx) => {
            return (
              <article
                key={`${post.title}-${idx}`}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                      {post.title}
                    </h2>
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-72 object-cover rounded-2xl border"
                        onError={(e) => {
                          const driveId = getDriveIdFromUrl(post.image || "");
                          if (!driveId) return;
                          const current = e.currentTarget.src;
                          const thumb = `https://drive.google.com/thumbnail?id=${driveId}&sz=w1200`;
                          const uc = `https://drive.google.com/uc?export=view&id=${driveId}`;
                          if (current !== thumb) {
                            e.currentTarget.src = thumb;
                            return;
                          }
                          if (current !== uc) {
                            e.currentTarget.src = uc;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-64 md:h-72 rounded-2xl border bg-gray-100 flex items-center justify-center text-gray-500">
                        Imagen del post
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between">
                    <p className="text-gray-700 text-lg mb-6">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="bg-[#ffb7a1] hover:bg-[#ed7a6b] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 inline-block text-center w-fit"
                    >
                      Leer más
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {posts.length > visibleCount && (
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 bg-gray-900 text-white rounded-lg"
              onClick={() => setVisibleCount((c) => Math.min(c + 6, posts.length))}
            >
              Cargar más
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
