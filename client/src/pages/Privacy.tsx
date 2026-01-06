import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At DreamPrint Initiative, we value your privacy. This policy explains how we handle the information you provide to us.
          </p>
          
          <h3>Information We Collect</h3>
          <p>
            When you use our contact form, we collect your name, email address, and any information you provide in your message. 
            We use this solely to respond to your inquiries and coordinate volunteer or partnership opportunities.
          </p>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>To respond to your questions or comments.</li>
            <li>To facilitate volunteer onboarding if applicable.</li>
            <li>To improve our website and programs.</li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this privacy policy, please contact us at info@dreamprint.org.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
