import type { LinkedInPost } from "../data/linkedinPosts";

const DEFAULT_URL = "/data/linkedin-posts.json";

function normalizeToPosts(data: any): LinkedInPost[] {
  if (!Array.isArray(data)) return [];
  const out: LinkedInPost[] = [];
  for (const item of data) {
    if (typeof item === "string") {
      const url = item.trim();
      if (url) out.push({ url });
      continue;
    }
    if (item && typeof item === "object") {
      // Prefer explicit headers (url/title); fallback to column letters (A/B) from sheets sin encabezados
      const rawUrl =
        item.url || item.URL || item.link || item.Link || item.enlace || item.Enlace || item.A;
      const rawTitle = item.title || item.TITLE || item.Title || item.B;
      if (typeof rawUrl === "string" && rawUrl.trim()) {
        const url = rawUrl.trim();
        const title = typeof rawTitle === "string" ? rawTitle.trim() : undefined;
        out.push({ url, title });
      }
    }
  }
  // Filter invalid/non-LinkedIn URLs and dedupe
  const seen = new Set<string>();
  return out
    .filter((p) => /linkedin\.com\//i.test(p.url))
    .filter((p) => {
      if (seen.has(p.url)) return false;
      seen.add(p.url);
      return true;
    });
}

export async function getLinkedinPosts(bustCache?: boolean): Promise<LinkedInPost[]> {
  const remoteUrl = import.meta.env?.VITE_LINKEDIN_POSTS_URL as string | undefined;
  let url = remoteUrl?.trim() || DEFAULT_URL;
  if (bustCache) {
    try {
      const u = new URL(url, typeof window !== "undefined" ? window.location.origin : "http://localhost");
      u.searchParams.set("ts", Date.now().toString());
      url = u.toString();
    } catch {
      const sep = url.includes("?") ? "&" : "?";
      url = `${url}${sep}ts=${Date.now()}`;
    }
  }
  try {
    const res = await fetch(url, { headers: { "Accept": "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      const arr = normalizeToPosts(data);
      if (arr.length === 0 && url !== DEFAULT_URL) {
        // If remote is empty array, try fallback
        const fb = await fetch(DEFAULT_URL, { headers: { "Accept": "application/json" } });
        if (fb.ok) {
          const fbData = await fb.json();
          const norm = normalizeToPosts(fbData);
          if (norm.length > 0) return norm;
        }
      }
      return arr;
    }
    // Support shape { posts: [...] }
    if (Array.isArray((data as any)?.posts)) return normalizeToPosts((data as any).posts);
    return [];
  } catch (e) {
    // Fallback to default local file if remote fails and remoteUrl was set
    if (remoteUrl && url !== DEFAULT_URL) {
      try {
        const res = await fetch(DEFAULT_URL, { headers: { "Accept": "application/json" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return normalizeToPosts(data);
      } catch {
        return [];
      }
    }
    return [];
  }
}
