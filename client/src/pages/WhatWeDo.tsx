import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shapes, User, Hammer, Trophy, School, Building2 } from "lucide-react";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title="Our Program Model" 
            subtitle="We empower students through a structured journey of discovery, design, and creation."
            light
          />
        </div>
      </div>

      {/* Curriculum Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Curriculum" 
            subtitle="From basic shapes to complex problem solving."
            alignment="left"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {siteContent.whatWeDo.curriculum.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 border rounded-xl hover:border-primary/20 hover:bg-slate-50 transition-colors group">
                <div className="w-12 h-12 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center shrink-0 text-xl font-bold group-hover:bg-secondary group-hover:text-primary transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Community */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Community Partners" 
            subtitle="We work within the existing ecosystem to maximize impact."
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <School className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Schools</h3>
              <p className="text-muted-foreground">
                Partnering with District 65 schools to identify students and integrate with existing enrichment programs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Orgs</h3>
              <p className="text-muted-foreground">
                Collaboration with organizations like Books & Breakfast to reach families where they are already engaged.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Volunteer Roles</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Our program relies on dedicated volunteers from Northwestern University and the Evanston community.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" />
                    <span><strong className="text-primary">Design Mentors:</strong> Guide students through Tinkercad logic.</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <Hammer className="w-5 h-5 text-secondary" />
                    <span><strong className="text-primary">Print Support:</strong> Manage printer queues and post-processing.</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-secondary" />
                    <span><strong className="text-primary">Classroom Helpers:</strong> Facilitate teamwork and logistics.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl text-center shadow-sm">
                <h4 className="text-xl font-bold mb-4">Join the Team</h4>
                <p className="text-muted-foreground mb-6 text-sm">
                  Whether you're an engineering student or a community member, your time makes a difference.
                </p>
                <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 cursor-pointer">
                  <Link href="/contact">Apply to Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
