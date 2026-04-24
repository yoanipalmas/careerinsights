export type BlogPost = {
  title: string;
  excerpt: string;
  image?: string;
  url: string;
  slug: string;
  content?: string;
  videoUrl?: string;
  published?: string | boolean;
};

const DEFAULT_URL = "/data/blog-posts.json";
const FALLBACK_REMOTE_URL =
  "https://opensheet.elk.sh/1cw81WOPAAeqCp49YwEDDyUz_AjfZk_6KwcVebIjiik8/publicaciones";

function normalizeToPosts(data: any): BlogPost[] {
  if (!Array.isArray(data)) return [];
  const out: BlogPost[] = [];
  for (const item of data) {
    if (!item || typeof item !== "object") continue;
    const rawTitle = item.Title || item.title || item.TITLE;
    const rawExcerpt = item.Excerpt || item.excerpt || item.EXCERPT;
    const rawImage = item.Image || item.image || item.IMAGE;
    const rawUrl = item.URL || item.url || item.Url || item.link || item.Link;
    const rawSlug = item.Slug || item.slug || item.SLUG;
    const rawContent = item.Content || item.content || item.CONTENIDO || item.contenido;
    const rawVideo = item.VideoUrl || item.VIDEOURL || item.videoUrl || item.video || item.Video || item.VideoURL;
    const rawPublished = item.Published ?? item.published ?? item.PUBLICADO ?? item.publicado;

    if (typeof rawTitle !== "string" || typeof rawExcerpt !== "string" || typeof rawUrl !== "string") continue;

    const publishedValue =
      typeof rawPublished === "string"
        ? rawPublished.trim().toLowerCase()
        : rawPublished;
    const isPublished =
      publishedValue === undefined ||
      publishedValue === "" ||
      publishedValue === true ||
      publishedValue === "true" ||
      publishedValue === "si" ||
      publishedValue === "sí" ||
      publishedValue === "yes" ||
      publishedValue === "1";

    if (!isPublished) continue;

    const slugSource = typeof rawSlug === "string" && rawSlug.trim() ? rawSlug.trim() : rawTitle;
    const slug = slugSource
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const normalizeUrl = (value: unknown) =>
      typeof value === "string"
        ? value
            .replace(/[\u200B-\u200D\uFEFF]/g, "")
            .replace(/[\u0000-\u001F\u007F]/g, "")
            .trim()
            .replace(/\s+/g, "")
            .replace(/^"|"$/g, "")
        : "";

    const imageValue = normalizeUrl(rawImage);
    const driveMatch = imageValue.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
    const driveId = driveMatch?.[1];
    const normalizedImage = driveId
      ? `https://images.weserv.nl/?url=${encodeURIComponent(
          `https://drive.google.com/uc?export=download&id=${driveId}`
        )}`
      : imageValue;

    out.push({
      title: rawTitle.trim(),
      excerpt: rawExcerpt.trim(),
      image: normalizedImage,
      url: normalizeUrl(rawUrl),
      slug: slug || rawTitle.trim().toLowerCase(),
      content: typeof rawContent === "string" ? rawContent.trim() : "",
      videoUrl: normalizeUrl(rawVideo),
      published: rawPublished,
    });
  }
  return out;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const remoteUrl = import.meta.env?.VITE_BLOG_POSTS_URL as string | undefined;
  const url = remoteUrl?.trim() || FALLBACK_REMOTE_URL || DEFAULT_URL;
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" }, cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const norm = normalizeToPosts(data);
    if (norm.length > 0) return norm;
    if ((remoteUrl || FALLBACK_REMOTE_URL) && url !== DEFAULT_URL) {
      const fb = await fetch(DEFAULT_URL, { headers: { Accept: "application/json" }, cache: "no-store" });
      if (fb.ok) {
        const fbData = await fb.json();
        return normalizeToPosts(fbData);
      }
    }
    return [];
  } catch {
    if ((remoteUrl || FALLBACK_REMOTE_URL) && url !== DEFAULT_URL) {
      try {
        const fb = await fetch(DEFAULT_URL, { headers: { Accept: "application/json" }, cache: "no-store" });
        if (!fb.ok) throw new Error();
        const fbData = await fb.json();
        return normalizeToPosts(fbData);
      } catch {
        return [];
      }
    }
    return [];
  }
}
