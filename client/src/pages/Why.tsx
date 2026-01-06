import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Why() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Understanding the Context" 
            subtitle="The opportunity gap didn't happen by accident. It is the result of historical policies and systemic inequities."
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              At DreamPrint, we believe that talent is equally distributed, but opportunity is not. 
              To truly serve our students, we must acknowledge the historical forces that have shaped 
              the educational landscape they navigate today.
            </p>
            
            <Timeline items={siteContent.timeline} />
          </div>
        </div>
      </div>

      <div className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why DreamPrint is a Direct Response</h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10">
            We exist to provide the resources, mentorship, and tangible proof of capability that 
            systemic barriers have often withheld. By putting advanced technology in the hands of 
            young students, we are not just teaching 3D printing—we are reshaping what they believe is possible for their futures.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold cursor-pointer">
            <Link href="/what-we-do">See How We Do It</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
