import React, { useEffect, useState } from "react";
import type { LinkedInPost } from "../data/linkedinPosts";

type Props = {
  onChange?: (posts: LinkedInPost[]) => void;
};

const STORAGE_KEY = "linkedinPostsLocal";

export const LinkedinPostManager: React.FC<Props> = ({ onChange }) => {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setPosts(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {}
    onChange?.(posts);
  }, [posts]);

  const addPost = () => {
    if (!url.trim()) return;
    setPosts(prev => [{ url: url.trim(), title: title.trim() || undefined }, ...prev]);
    setUrl("");
    setTitle("");
  };

  const removePost = (idx: number) => {
    setPosts(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 mb-8">
      <h2 className="text-xl font-semibold mb-4">Administrador de publicaciones (local)</h2>
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="url"
          placeholder="URL de publicación de LinkedIn"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          type="text"
          placeholder="Título (opcional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
        />
        <button onClick={addPost} className="px-4 py-2 bg-gray-900 text-white rounded-lg">Agregar</button>
      </div>

      {posts.length > 0 ? (
        <ul className="space-y-2">
          {posts.map((p, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <div className="truncate">
                {p.title ? <span className="font-medium mr-2">{p.title}</span> : null}
                <a href={p.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {p.url}
                </a>
              </div>
              <button onClick={() => removePost(idx)} className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg">Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Aún no hay publicaciones locales. Agrega una arriba.</p>
      )}
    </div>
  );
};

export default LinkedinPostManager;
