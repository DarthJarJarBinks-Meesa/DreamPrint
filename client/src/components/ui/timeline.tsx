import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 mb-12 group last:mb-0"
    >
      {/* Vertical Line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-[1px] group-last:bottom-auto group-last:h-full" />
      
      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white bg-secondary shadow-sm md:left-1/2 md:-ml-2" />

      {/* Date (Left on Desktop) */}
      <div className="md:col-span-2 md:text-right md:pr-8 mb-2 md:mb-0">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm">
          {year}
        </span>
      </div>

      {/* Spacer for center line */}
      <div className="hidden md:block md:col-span-1" />

      {/* Content (Right on Desktop) */}
      <div className="md:col-span-2 md:pl-8">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Timeline({ items }: { items: Omit<TimelineItemProps, 'index'>[] }) {
  return (
    <div className="relative py-10">
      {items.map((item, idx) => (
        <TimelineItem key={idx} {...item} index={idx} />
      ))}
    </div>
  );
}
