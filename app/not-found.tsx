// app/not-found.tsx
import Link from "next/link";
import { Phone, Mail, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo - Resized to fit */}
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="HomeCare Connections LLC" 
              className="h-20 w-auto md:h-24"
            />
          </div>

          {/* 404 - Large but not overwhelming */}
          <div className="mb-5">
            <div className="text-8xl md:text-9xl font-bold text-blue-600/10 tracking-wider">
              404
            </div>
          </div>

          {/* Error Message - Compact */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Page Not Found
            </h1>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-3"></div>
            <p className="text-gray-600 text-base">
              We couldn't find the page you're looking for.
            </p>
          </div>

          {/* Action Buttons - Compact */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-5">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition text-base font-medium shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href="tel:+13179866205"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition text-base font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="mailto:support@homecareconnectionsllc.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition text-base font-medium"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}