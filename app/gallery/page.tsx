import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ImageGallery } from "./_components/ImageGallery";

export default function Gallery() {
  return (
    <div className="min-h-screen mx-auto px-6 py-8">
      <Button asChild variant="outline">
        <Link href="/">
          <ArrowLeft className="ml-2 h-4 w-4" />
          Go Back
        </Link>
      </Button>
      <div className="mx-auto">
        <h2 className="mb-4 text-lg text-center font-semibold">Your uploads</h2>
        <ImageGallery />
      </div>
    </div>
  );
}
