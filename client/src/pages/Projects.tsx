import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(siteContent.projects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? siteContent.projects 
    : siteContent.projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Project Gallery" 
            subtitle="A collection of inspiration and student creations."
          />
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-12 max-w-3xl mx-auto text-amber-900 text-sm text-center">
            <strong>Disclaimer:</strong> Project images and models shown here are credited to their original creators on Thingiverse. 
            DreamPrint does not claim ownership. Links provided for full attribution.
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === cat 
                    ? "bg-primary text-white shadow-md transform scale-105" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-slate-100">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            {project.category}
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-lg text-primary mb-1 group-hover:text-secondary transition-colors">{project.title}</h3>
                          <p className="text-slate-500 text-sm line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif font-bold text-primary">{project.title}</DialogTitle>
                        <div className="flex gap-2 mt-2">
                           <span className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded font-bold">
                             {project.category}
                           </span>
                        </div>
                      </DialogHeader>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                          <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <DialogDescription className="text-base text-slate-700 leading-relaxed mb-6">
                              {project.description}
                            </DialogDescription>
                            
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                              <h4 className="font-bold text-primary mb-2">Attribution</h4>
                              <p className="text-slate-600 mb-1">Creator: <span className="font-medium">{project.creatorName}</span></p>
                              <p className="text-slate-600">Source: {project.sourceName}</p>
                            </div>
                          </div>
                          
                          <div className="pt-6">
                            <Button asChild className="w-full gap-2 cursor-pointer">
                              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                View on Thingiverse <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
             <div className="text-center py-24 text-slate-400">
               No projects found in this category.
             </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
