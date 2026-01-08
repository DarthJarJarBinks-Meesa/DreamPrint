import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/why", label: "Why DreamPrint" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary/90 transition-colors">
              <Printer className="w-6 h-6" />
            </div>
            <span className={cn(
              "font-serif font-bold text-xl tracking-tight transition-colors",
              scrolled || isOpen || location !== "/" ? "text-primary" : "text-white"
            )}>
              DreamPrint
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
                "text-sm font-medium transition-colors hover:text-secondary cursor-pointer",
                location === link.href 
                  ? "text-secondary font-semibold" 
                  : (scrolled || location !== "/" ? "text-primary" : "text-white/90")
              )}>
                {link.label}
            </Link>
          ))}
          <Button 
            asChild
            size="sm" 
            className={cn(
              "font-semibold cursor-pointer",
              scrolled || location !== "/"
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90"
            )}
          >
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled || location !== "/" ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={scrolled || location !== "/" ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
                  "py-3 px-4 rounded-md text-sm font-medium hover:bg-muted transition-colors cursor-pointer",
                  location === link.href ? "bg-primary/5 text-primary" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}>
                {link.label}
            </Link>
          ))}
          <div className="mt-4 px-4 pb-2">
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
