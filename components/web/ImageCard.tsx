"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";

type UploadImageCardProps = {
  src?: string;
  name: string;

  uploading?: boolean;
  progress?: number;

  isDeleting?: boolean;
  error?: boolean;

  onRemove?: () => void;
};

export function ImageCard({
  src,
  name,
  uploading = false,
  progress = 0,
  isDeleting = false,
  error = false,
  onRemove,
}: UploadImageCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative aspect-square overflow-hidden rounded-lg border">
        {src && (
          <img src={src} alt={name} className="h-full w-full object-cover" />
        )}

        {/* Delete button (optional) */}
        {onRemove && (
          <Button
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2 z-10"
            onClick={onRemove}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
          </Button>
        )}

        {/* Upload progress */}
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-lg font-medium text-white">{progress}%</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-500/60">
            <span className="font-medium text-white">Error</span>
          </div>
        )}
      </div>

      <p className="truncate px-1 text-sm text-muted-foreground">{name}</p>
    </div>
  );
}
