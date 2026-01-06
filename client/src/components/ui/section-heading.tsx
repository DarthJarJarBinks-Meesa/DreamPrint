import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  alignment = "center",
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "flex flex-col mb-12", 
      {
        "items-center text-center": alignment === "center",
        "items-start text-left": alignment === "left",
        "items-end text-right": alignment === "right",
      },
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "h-1 w-20 mb-6 bg-secondary rounded-full"
          )}
        />
      )}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "text-lg max-w-2xl leading-relaxed",
            light ? "text-slate-200" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
