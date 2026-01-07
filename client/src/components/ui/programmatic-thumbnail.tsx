import { useState, useMemo } from "react";
import { 
  Box, 
  Settings, 
  Wrench, 
  Lightbulb, 
  Cpu, 
  Palette, 
  Glasses, 
  Atom, 
  Shapes,
  FlaskConical,
  Activity,
  PenTool,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgrammaticThumbnailProps {
  title: string;
  category: string;
  className?: string;
}

export function ProgrammaticThumbnail({ title, category, className }: ProgrammaticThumbnailProps) {
  const hash = useMemo(() => {
    let h = 0;
    for (let i = 0; i < title.length; i++) {
      h = (Math.imul(31, h) + title.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }, [title]);

  const gradients = [
    "from-blue-500/20 to-indigo-500/20",
    "from-amber-500/20 to-orange-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-rose-500/20 to-pink-500/20",
    "from-violet-500/20 to-purple-500/20",
    "from-sky-500/20 to-cyan-500/20"
  ];

  const icons = [
    Box, Settings, Wrench, Lightbulb, Cpu, Palette, Glasses, Atom, Shapes, FlaskConical, Activity, PenTool, MousePointer2
  ];

  const gradient = gradients[hash % gradients.length];
  const Icon = icons[hash % icons.length];
  const rotation = (hash % 45) - 22.5;
  const scale = 0.8 + (hash % 40) / 100;

  return (
    <div className={cn(
      "w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-50",
      className
    )}>
      {/* Background Pattern */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", gradient)} />
      
      {/* Decorative Geometric Shapes */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at ${hash % 100}% ${hash % 80}%, var(--color-primary) 0%, transparent 50%)`
        }}
      />

      {/* Main Icon */}
      <div 
        className="relative z-10 p-8 rounded-full bg-white/40 backdrop-blur-sm shadow-inner border border-white/20"
        style={{
          transform: `rotate(${rotation}deg) scale(${scale})`
        }}
      >
        <Icon className="w-16 h-16 text-primary/40" strokeWidth={1.5} />
      </div>

      {/* Title Overlay (Subtle) */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/20 select-none">
          {category} // {hash.toString(16).toUpperCase()}
        </span>
      </div>
    </div>
  );
}
