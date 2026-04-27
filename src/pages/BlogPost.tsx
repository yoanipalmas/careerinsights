import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../features/data/blogPosts";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineMarkdown(text: string) {
  let out = escapeHtml(text);
  out = out.replace(/__(.+?)__/g, "<strong>$1</strong>");
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*(.+?)\*/g, "<em>$1</em>");
  out = out.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');
  return out;
}

function renderMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const blocks: Array<{ type: "p" | "h1" | "h2" | "h3" | "ul"; html: string | string[] }> = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "p", html: inlineMarkdown(paragraph.join(" ")) });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "ul", html: list.map(inlineMarkdown) });
      list = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^#{1,3}\s/.test(trimmed)) {
      flushParagraph();
      flushList();
      const level = trimmed.match(/^#{1,3}/)?.[0].length || 1;
      const text = trimmed.replace(/^#{1,3}\s+/, "");
      const type = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
      blocks.push({ type, html: inlineMarkdown(text) });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks.map((block, idx) => {
    if (block.type === "ul") {
      return (
        <ul key={`ul-${idx}`} className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg my-2">
          {(block.html as string[]).map((item, itemIdx) => (
            <li key={`li-${idx}-${itemIdx}`} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    }

    const className =
      block.type === "h1"
        ? "text-2xl md:text-3xl font-bold text-[#2A2420] mt-6 mb-3"
        : block.type === "h2"
        ? "text-xl md:text-2xl font-bold text-[#2A2420] mt-6 mb-3"
        : block.type === "h3"
        ? "text-lg md:text-xl font-semibold text-[#2A2420] mt-4 mb-2"
        : "text-gray-700 text-base md:text-lg leading-relaxed";

    const Tag = block.type === "p" ? "p" : block.type;

    return (
      <Tag
        key={`${block.type}-${idx}`}
        className={block.type === "p" ? `${className} mb-4` : className}
        dangerouslySetInnerHTML={{ __html: block.html as string }}
      />
    );
  });
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const color = post?.color || "#85a9d2";

  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-4 md:px-8">
      <div className="max-w-3xl w-full">

        <Link to="/blog" className="inline-flex items-center gap-1 text-[#EFBC68] font-medium hover:underline mb-6 text-sm">
          ← Volver al blog
        </Link>

        {!post && (
          <div className="mt-6 text-gray-600 bg-white rounded-2xl border p-8 text-center">
            No se encontró el artículo.
          </div>
        )}

        {post && (
          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Hero cover */}
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 md:h-72 object-cover"
              />
            ) : (
              <div
                className="w-full h-40 md:h-56 flex items-end p-6 relative overflow-hidden"
                style={{ background: color }}
              >
                {/* Decorative circles */}
                <div className="absolute top-[-32px] right-[-32px] w-48 h-48 rounded-full opacity-20 bg-white" />
                <div className="absolute bottom-[-20px] left-[-20px] w-28 h-28 rounded-full opacity-15 bg-white" />
                <div className="absolute top-10 right-10 w-16 h-16 rounded-full opacity-25 bg-white" />
                {post.category && (
                  <span
                    className="relative z-10 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                    style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(4px)" }}
                  >
                    {post.category}
                  </span>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6 md:p-10">
              {post.category && (
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                  style={{ background: `${color}22`, color: color }}
                >
                  {post.category}
                </span>
              )}

              <h1
                className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ color: "#2A2420" }}
              >
                {post.title}
              </h1>

              {post.content ? (
                <div className="space-y-1">{renderMarkdown(post.content)}</div>
              ) : (
                <p className="text-gray-700 text-lg">Contenido pendiente.</p>
              )}
            </div>
          </article>
        )}

        {/* Back link at the bottom */}
        {post && (
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 text-[#EFBC68] font-semibold hover:underline"
          >
            ← Ver más artículos
          </Link>
        )}
      </div>
    </section>
  );
};

export default BlogPostPage;
