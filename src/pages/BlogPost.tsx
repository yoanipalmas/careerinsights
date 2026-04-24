import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogPosts } from "../features/utils/getBlogPosts";
import type { BlogPost } from "../features/utils/getBlogPosts";

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
  out = out.replace(/\[(.+?)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
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
        <ul key={`ul-${idx}`} className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          {(block.html as string[]).map((item, itemIdx) => (
            <li key={`li-${idx}-${itemIdx}`} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    }

    const className =
      block.type === "h1"
        ? "text-3xl md:text-4xl font-bold text-blue-700"
        : block.type === "h2"
        ? "text-2xl md:text-3xl font-bold text-blue-700"
        : block.type === "h3"
        ? "text-xl md:text-2xl font-bold text-blue-700"
        : "text-gray-700 text-lg";

    const Tag = block.type === "p" ? "p" : block.type;

    return (
      <Tag
        key={`${block.type}-${idx}`}
        className={block.type === "p" ? `${className} mb-4` : `${className} mb-3`}
        dangerouslySetInnerHTML={{ __html: block.html as string }}
      />
    );
  });
}

function getYouTubeEmbed(url: string) {
  const watchMatch = url.match(/[?&]v=([^&]+)/i);
  if (watchMatch?.[1]) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = url.match(/youtu\.be\/([^?]+)/i);
  if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  const embedMatch = url.match(/youtube\.com\/embed\/([^?]+)/i);
  if (embedMatch?.[1]) return `https://www.youtube.com/embed/${embedMatch[1]}`;
  return "";
}

function getTikTokEmbed(url: string) {
  const match = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/i);
  if (match?.[1]) return `https://www.tiktok.com/embed/v2/${match[1]}`;
  const shortMatch = url.match(/tiktok\.com\/t\/(\w+)/i);
  if (shortMatch?.[1]) return `https://www.tiktok.com/embed/v2/${shortMatch[1]}`;
  return "";
}

function getDriveIdFromUrl(url: string) {
  const matchFile = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
  if (matchFile?.[1]) return matchFile[1];
  const matchUc = url.match(/drive\.google\.com\/uc\?export=view&id=([^&]+)/i);
  if (matchUc?.[1]) return matchUc[1];
  const matchThumb = url.match(/drive\.google\.com\/thumbnail\?id=([^&]+)/i);
  if (matchThumb?.[1]) return matchThumb[1];
  const matchGuc = url.match(/lh3\.googleusercontent\.com\/d\/([^?]+)/i);
  if (matchGuc?.[1]) return matchGuc[1];
  return "";
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

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

  const post = useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);

  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-6">
      <div className="max-w-4xl w-full">
        <Link to="/blog" className="text-logo-dos font-medium text-lg hover:underline">
          ← Volver al blog
        </Link>

        {loadError && <div className="mt-6 text-red-500 text-sm">{loadError}</div>}

        {!loadError && !post && (
          <div className="mt-6 text-gray-600">No se encontró el artículo.</div>
        )}

        {post && (
          <article className="mt-6 bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">{post.title}</h1>

            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 md:h-96 object-cover rounded-2xl border mb-6"
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
            ) : null}

            {post.content ? (
              <div className="space-y-3">{renderMarkdown(post.content)}</div>
            ) : (
              <p className="text-gray-700 text-lg">Contenido pendiente.</p>
            )}

            {post.videoUrl ? (
              <div className="mt-6">
                {getYouTubeEmbed(post.videoUrl) ? (
                  <div className="relative w-full pt-[56.25%] rounded-2xl border overflow-hidden">
                    <iframe
                      title="Video"
                      src={getYouTubeEmbed(post.videoUrl)}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : getTikTokEmbed(post.videoUrl) ? (
                  <div className="relative w-full pt-[56.25%] rounded-2xl border overflow-hidden">
                    <iframe
                      title="Video"
                      src={getTikTokEmbed(post.videoUrl)}
                      className="absolute inset-0 w-full h-full"
                      allow="encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a
                    href={post.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ver video
                  </a>
                )}
              </div>
            ) : null}
          </article>
        )}
      </div>
    </section>
  );
};

export default BlogPostPage;
