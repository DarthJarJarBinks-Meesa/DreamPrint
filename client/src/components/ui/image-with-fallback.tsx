import { useState } from "react";
import { Box } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  fallbackTitle,
  ...props 
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={cn(
        "w-full h-full flex flex-col items-center justify-center bg-slate-100 p-6 text-center",
        className
      )}>
        <Box className="w-12 h-12 text-slate-300 mb-2" />
        {fallbackTitle && (
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider line-clamp-2 px-2">
            {fallbackTitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
