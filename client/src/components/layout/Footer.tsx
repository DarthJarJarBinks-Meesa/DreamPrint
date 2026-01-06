import { Link } from "wouter";
import { Printer, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
                <div className="bg-white/10 p-2 rounded-lg text-white group-hover:bg-white/20 transition-colors">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-xl">DreamPrint</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Closing the opportunity gap through 3D printing, mentorship, and tangible career exploration for underserved youth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-secondary">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer">Home</Link></li>
              <li><Link href="/why" className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer">Why It Matters</Link></li>
              <li><Link href="/what-we-do" className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer">Our Program</Link></li>
              <li><Link href="/projects" className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer">Project Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Evanston, IL</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@dreamprint.org" className="hover:text-white transition-colors">info@dreamprint.org</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-secondary">Join Us</h4>
            <p className="text-slate-300 text-sm mb-4">
              Help us print dreams into reality. Volunteer or donate today.
            </p>
            <Link href="/contact">
              <button className="w-full py-2 px-4 bg-secondary text-primary font-bold rounded-md hover:bg-white transition-colors">
                Get Involved
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} DreamPrint Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
