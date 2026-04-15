// components/footer.tsx
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <Link href="/" className="block mb-4">
              <img 
                src="/logo.png" 
                alt="HomeCare Connections LLC" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-base text-gray-400 mb-4 leading-relaxed">
              Providing compassionate, professional home care services that help your loved ones maintain independence and quality of life.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-400 hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition">Personal Care</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition">Companionship</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition">Dementia Care</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition">Respite Care</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition">24/7 Care</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  1800 N Meridian Street, Suite 308<br />
                  Indianapolis, IN 46202
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+13179866205" className="text-sm text-gray-400 hover:text-white transition">
                  (317) 986-6205
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:support@homecareconnectionsllc.com" className="text-sm text-gray-400 hover:text-white transition">
                  support@homecareconnectionsllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HomeCare Connections LLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Website by{" "}
            <a 
              href="https://www.almarellc.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Almare LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}