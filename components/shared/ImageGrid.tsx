import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: number;
  className?: string;
}

export function ImageGrid({
  images,
  columns = { mobile: 2, tablet: 3, desktop: 3 },
  gap = 6,
  className,
}: ImageGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const gapSize = {
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  };

  return (
    <div
      className={cn(
        "grid",
        gridCols[columns.mobile as keyof typeof gridCols],
        `md:${gridCols[columns.tablet as keyof typeof gridCols]}`,
        `lg:${gridCols[columns.desktop as keyof typeof gridCols]}`,
        gapSize[gap as keyof typeof gapSize] || "gap-6",
        className
      )}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-sm group"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          {image.caption && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm text-center">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
