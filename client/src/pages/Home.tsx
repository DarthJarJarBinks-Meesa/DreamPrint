import { Link } from "wouter";
import { ArrowRight, Users, GraduationCap, Box, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { siteContent } from "@/content/siteContent";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={siteContent.hero.image} 
            alt="Students 3D Printing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center mx-auto">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              {siteContent.hero.headline}
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
              {siteContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-secondary text-primary hover:bg-white hover:text-primary font-bold cursor-pointer">
                <Link href="/what-we-do">{siteContent.hero.ctaPrimary}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary bg-transparent cursor-pointer">
                <Link href="/contact">{siteContent.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why This Matters" 
            subtitle="Bridging the opportunity gap through access and exposure."
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteContent.mission.whyMatters.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold font-serif">
                  {i + 1}
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg font-bold group cursor-pointer">
              <Link href="/why">
                <span className="flex items-center">
                  Learn the history behind the gap <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do - Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Approach" 
            subtitle="More than just printing—we build confidence and skills."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Box} 
              title="3D Design" 
              description="Students learn CAD basics using intuitive tools like Tinkercad to bring ideas to life."
              delay={0}
            />
            <FeatureCard 
              icon={Users} 
              title="Mentorship" 
              description="University students provide role models and personalized guidance for every child."
              delay={0.1}
            />
             <FeatureCard 
              icon={Heart} 
              title="Teamwork" 
              description="Small groups foster collaboration, communication, and shared problem-solving."
              delay={0.2}
            />
            <FeatureCard 
              icon={GraduationCap} 
              title="Career Exposure" 
              description="Tangible projects connect abstract STEM concepts to real-world possibilities."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="How It Works" 
            subtitle="A simple path from imagination to reality."
            light
          />
          
          <div className="grid md:grid-cols-4 gap-8 relative mt-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/20 -z-0" />
            
            {siteContent.whatWeDo.process.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-secondary text-primary flex items-center justify-center text-3xl font-bold font-serif mb-6 shadow-lg border-4 border-primary">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteContent.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Project Gallery" 
            subtitle="See what our students are inspired to create."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {siteContent.projects.slice(0, 4).map((project) => (
              <div key={project.id} className="aspect-square rounded-lg overflow-hidden relative group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium text-sm">{project.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white cursor-pointer">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          
          <Accordion type="single" collapsible className="w-full">
            {siteContent.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to make a difference?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 py-6 font-bold cursor-pointer">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent cursor-pointer">
              <Link href="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
