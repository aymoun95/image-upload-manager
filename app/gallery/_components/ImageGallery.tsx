"use client";

import { ImageCard } from "@/components/web/ImageCard";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type GalleryFile = {
  key: string;
  url: string;
};

export function ImageGallery() {
  const [files, setFiles] = useState<GalleryFile[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [deletingKey, setDeletingKey] = useState<string | null>(null);

  async function loadFiles(reset = false) {
    setLoading(true);

    const params = new URLSearchParams({ pageSize: "3" });
    if (!reset && cursor) params.set("cursor", cursor);

    const res = await fetch(`/api/s3/list?${params}`);
    const data = await res.json();

    setFiles((prev) => (reset ? data.files : [...prev, ...data.files]));
    setCursor(data.nextCursor);
    setLoading(false);
  }

  async function deleteFile(key: string) {
    setDeletingKey(key);

    const res = await fetch("/api/s3/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    if (!res.ok) {
      toast.error("Failed to delete file");
    }

    setFiles((prev) => prev.filter((f) => f.key !== key));
    setDeletingKey(null);
  }

  useEffect(() => {
    loadFiles(true);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {files.map((file) => (
          <ImageCard
            key={file.key}
            src={file.url}
            name={file.key}
            isDeleting={deletingKey === file.key}
            onRemove={() => deleteFile(file.key)}
          />
        ))}
      </div>

      {cursor && (
        <div className="flex justify-center">
          <button
            onClick={() => loadFiles()}
            disabled={loading}
            className="rounded-md border px-6 py-2 text-sm"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
