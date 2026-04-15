// components/about-content.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Heart, 
  Shield, 
  Award,
  Building2,
  CheckCircle2,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// Accreditation buttons data
const accreditations = [
  {
    name: "IN State Department of Health",
    icon: Shield,
    color: "bg-blue-600",
    link: "https://www.in.gov/health/",
    description: "Licensed Personal Service Agency"
  },
  {
    name: "Better Business Bureau",
    icon: Award,
    color: "bg-blue-600",
    link: "https://www.bbb.org/",
    description: "A+ Rated"
  },
  {
    name: "Medicaid Provider",
    icon: Building2,
    color: "bg-green-600",
    link: "https://www.in.gov/fssa/",
    description: "IN FSSA Certified"
  },
  {
    name: "Minority Business Enterprise",
    icon: CheckCircle2,
    color: "bg-amber-600",
    link: "https://www.in.gov/idoa/",
    description: "MBE Certified"
  }
];

// Key differentiators
const differentiatorsLeft = [
  "Genuinely compassionate caregivers who treat clients like family",
  "24/7 availability with consistent, reliable scheduling",
  "A+ BBB rating with 100% satisfaction guarantee"
];

const differentiatorsRight = [
  "Thoroughly vetted, trained, and certified professionals",
  "Personalized care plans tailored to each individual",
  "Holistic approach working with families and doctors"
];

// Core values
const coreValues = [
  { value: "Compassion", description: "We care deeply for every client" },
  { value: "Integrity", description: "Honest, transparent, and ethical" },
  { value: "Excellence", description: "Highest standards in everything" },
  { value: "Respect", description: "Dignity for every individual" }
];

export default function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      {/* Animated Water Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 w-full">
          <svg
            className="w-full h-40 md:h-48 animate-wave"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 192L48 197.3C96 203 192 213 288 208C384 203 480 181 576 176C672 171 768 181 864 197.3C960 213 1056 235 1152 229.3C1248 224 1344 192 1392 176L1440 160V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V192Z"
              fill="#22C55E"
              fillOpacity="0.15"
            />
          </svg>
          <svg
            className="w-full h-40 md:h-48 animate-wave-slow absolute top-0 left-0"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animationDelay: "2s" }}
          >
            <path
              d="M0 224L48 218.7C96 213 192 203 288 208C384 213 480 235 576 240C672 245 768 235 864 224C960 213 1056 203 1152 208C1248 213 1344 235 1392 245.3L1440 256V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V224Z"
              fill="#10B981"
              fillOpacity="0.12"
            />
          </svg>
        </div>
        
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-green-200/20 animate-float-blob"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-emerald-200/15 animate-float-blob" style={{ animationDelay: "3s", animationDuration: "25s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-10 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-6 transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full mb-3 shadow-sm border border-green-100">
            <Heart className="w-3.5 h-3.5 text-green-500" />
            <span className="text-green-600 text-xs font-medium">Caring Hearts, Professional Hands</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Comprehensive Home Care Services
          </h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-xs mt-2">
            Every individual has unique needs. We provide personalized care your loved ones deserve.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-3">
            {/* Paragraph */}
            <div className={`transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <p className="text-gray-600 text-xs leading-relaxed">
                HomeCare Connections LLC is a licensed personal service agency through the Indiana State Department of Health 
                and certified Medicaid provider. As a certified minority business enterprise with an A+ BBB rating, we provide 
                exceptional home care throughout Indiana. Our carefully vetted, trained caregivers treat your loved ones like 
                family, delivering compassionate, professional care that promotes independence and dignity.
              </p>
            </div>

            {/* What Makes Us Different - Two Columns */}
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <h2 className="text-sm font-semibold text-gray-800 mb-1.5">What Makes Us Different</h2>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                <div className="space-y-1">
                  {differentiatorsLeft.map((item, index) => (
                    <div key={index} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-gray-600 text-[11px] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {differentiatorsRight.map((item, index) => (
                    <div key={index} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-gray-600 text-[11px] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className={`transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <div className="flex flex-wrap gap-1.5">
                {coreValues.map((value, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-green-100">
                    <span className="text-[11px] font-medium text-gray-700">{value.value}</span>
                    <span className="text-[10px] text-gray-400 mx-1">-</span>
                    <span className="text-[10px] text-gray-500">{value.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Moved Up */}
            <div className={`mt-4 transition-all duration-700 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <Link href="/contact">
                <button className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                  Schedule Free Consultation
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="h-full flex flex-col">
            <div className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-green-100 to-emerald-100 flex-1 min-h-[300px]">
              {/* Image Area */}
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="text-center p-4">
                  <Heart className="w-16 h-16 text-green-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Add your image here</p>
                  <p className="text-gray-400 text-xs">/public/images/services-image.jpg</p>
                </div>
              </div>
              
              {/* Floating Accreditation Buttons */}
              <div className="absolute inset-0 pointer-events-none">
                {accreditations.map((item, index) => {
                  const positions = [
                    { top: "5%", left: "-6px" },
                    { top: "25%", right: "-6px" },
                    { top: "55%", left: "-5px" },
                    { bottom: "10%", right: "-5px" }
                  ];
                  const IconComponent = item.icon;
                  
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute group pointer-events-auto transition-all duration-300 hover:scale-110 hover:shadow-md animate-float-slow`}
                      style={{
                        ...positions[index],
                        animationDelay: `${index * 0.4}s`
                      }}
                    >
                      <div className={`${item.color} text-white rounded-full p-1 shadow-md flex items-center gap-1 px-2 py-1`}>
                        <IconComponent className="w-2.5 h-2.5" />
                        <span className="text-[10px] font-medium hidden sm:inline">{item.name.split(' ').slice(0,2).join(' ')}</span>
                        <ExternalLink className="w-2 h-2 opacity-70" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Service Area Text - Moved closer to button */}
            <div className={`mt-3 text-center transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <p className="text-[10px] text-gray-500">
                Serving Indiana regions 2, 6, 7, 8, and 13
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-15px); }
        }
        
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
        
        @keyframes float-blob {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          75% { transform: translateY(10px) translateX(-8px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-4px) translateX(2px); }
          75% { transform: translateY(3px) translateX(-1px); }
        }
        
        .animate-wave { animation: wave 6s ease-in-out infinite; }
        .animate-wave-slow { animation: wave-slow 8s ease-in-out infinite; }
        .animate-float-blob { animation: float-blob 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}