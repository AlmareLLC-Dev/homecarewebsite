// Create a contact page - app/contact/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Contact Us | HomeCare Connections LLC - Free Consultation",
  description: "Contact HomeCare Connections LLC for a free consultation. We provide professional home care services throughout Indiana. Call us today!",
};
export default function ContactPage() {
  return (
    <main>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Get in touch with Homecare Connections LLC
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="support@homecareconnections.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input type="tel" placeholder="(317) 986-6205" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <Textarea rows={5} placeholder="Tell us about your care needs..." />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours of Operation</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                    24/7 Emergency Support Available</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p>Serving Indianapolis and surrounding communities</p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900">Get Immediate Assistance</h3>
                    <p className="text-2xl font-bold text-blue-600">(317) 986-6205</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}