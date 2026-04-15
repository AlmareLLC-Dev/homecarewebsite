// app/reviews/page.tsx
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Chrome } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Leave a Review</h1>
        <p className="text-gray-600 mb-8">
          Thank you for choosing HomeCare Connections LLC. We'd love to hear about your experience!
        </p>
        
        <div className="flex flex-col gap-4">
          <Button size="lg" className="bg-blue-600">
            <Google className="mr-2" />
            Review on Google
          </Button>
          <Button size="lg" variant="outline">
            <Facebook className="mr-2" />
            Review on Facebook
          </Button>
          <Button size="lg" variant="outline">
            <Mail className="mr-2" />
            Send Email Testimonial
          </Button>
        </div>
      </div>
    </main>
  );
}