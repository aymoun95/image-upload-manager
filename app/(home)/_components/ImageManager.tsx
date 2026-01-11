"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageDropZone } from "./ImageDropZone";

export default function ImageManager() {
  return (
    <div className="space-y-10 w-full max-w-4xl px-4">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Upload images</h2>
          <Button asChild variant="outline">
            <Link href="/gallery">
              Go to gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <ImageDropZone />
      </section>
    </div>
  );
}
