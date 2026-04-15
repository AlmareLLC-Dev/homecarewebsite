// components/call-to-action.tsx - Extra Centered
import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Serving All of Indiana
          </h2>
          
          {/* Centered Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/80 to-white/20 mx-auto mb-6 rounded-full"></div>
          
          {/* Description */}
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Licensed, insured, and certified Medicaid provider
            <br />
            serving Areas 2, 6, 7, 8, and 13.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-xl hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a
              href="tel:+13179866205"
              className="group inline-flex items-center justify-center gap-2 bg-blue-500/30 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:border-transparent hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              Call (317) 986-6205
            </a>
            
            <a
              href="mailto:support@homecareconnectionsllc.com"
              className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:border-transparent hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}