import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  partnerships: z.array(z.string()).optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      partnerships: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-slate-50 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Have questions? Want to volunteer? Let's talk."
          />
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-serif text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Email</h4>
                      <p className="text-slate-600">info@dreamprint.org</p>
                      <p className="text-slate-500 text-sm mt-1">For general inquiries and partnerships.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Location</h4>
                      <p className="text-slate-600">Evanston, IL</p>
                      <p className="text-slate-500 text-sm mt-1">Serving District 65 Schools</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold font-serif mb-4">Partner With Us</h3>
                <p className="text-slate-200 mb-6">
                  We are always looking for schools, nonprofits, and sponsors to expand our impact.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us more..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <label className="block mb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">I'm interested in (optional):</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Volunteering', 'School Partnership', 'Sponsorship', 'Other'].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                           <Checkbox id={item} />
                           <label htmlFor={item} className="text-sm text-slate-600 cursor-pointer select-none">
                             {item}
                           </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/80 font-bold">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
