// components/about-content.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Heart, 
  Clock, 
  Utensils, 
  Sparkles, 
  Car, 
  Users, 
  Bed, 
  Brain, 
  Activity,
  ArrowRight,
  CheckCircle2,
  Award,
  Building2,
  Leaf,
  Home,
  Stethoscope,
  Shield
} from "lucide-react";
import Link from "next/link";

const servicesList = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Bathing, grooming, and hygiene assistance with dignity",
    detail: "Compassionate support for daily living activities",
    color: "bg-emerald-100 text-emerald-600",
    delay: "delay-0"
  },
  {
    icon: Clock,
    title: "Medication Reminders",
    description: "Timely medication management and tracking",
    detail: "Never miss a dose with our reliable system",
    color: "bg-teal-100 text-teal-600",
    delay: "delay-75"
  },
  {
    icon: Utensils,
    title: "Meal Preparation",
    description: "Nutritious meals tailored to dietary needs",
    detail: "Healthy, delicious meals your loved ones will enjoy",
    color: "bg-green-100 text-green-600",
    delay: "delay-100"
  },
  {
    icon: Sparkles,
    title: "Light Housekeeping",
    description: "Maintaining a clean, safe environment",
    detail: "A clean home promotes health and happiness",
    color: "bg-emerald-100 text-emerald-600",
    delay: "delay-150"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Appointments, errands, and outings",
    detail: "Safe, reliable transportation to keep them connected",
    color: "bg-teal-100 text-teal-600",
    delay: "delay-200"
  },
  {
    icon: Users,
    title: "Companionship",
    description: "Social engagement and emotional support",
    detail: "Meaningful connections that brighten each day",
    color: "bg-green-100 text-green-600",
    delay: "delay-300"
  },
  {
    icon: Bed,
    title: "Respite Care",
    description: "Temporary relief for family caregivers",
    detail: "Peace of mind while you recharge",
    color: "bg-emerald-100 text-emerald-600",
    delay: "delay-[400ms]"
  },
  {
    icon: Brain,
    title: "Dementia Care",
    description: "Specialized support for memory conditions",
    detail: "Expert care with patience and understanding",
    color: "bg-teal-100 text-teal-600",
    delay: "delay-[500ms]"
  },
  {
    icon: Activity,
    title: "Post-Surgery Support",
    description: "Recovery assistance and mobility help",
    detail: "Faster recovery with professional support",
    color: "bg-green-100 text-green-600",
    delay: "delay-[600ms]"
  }
];

// Floating elements data
const floatingElements = [
  { icon: Leaf, size: "w-10 h-10", color: "text-emerald-400/40", duration: "25s", delay: "0s", top: "10%", left: "5%" },
  { icon: Heart, size: "w-12 h-12", color: "text-rose-400/30", duration: "30s", delay: "2s", top: "15%", right: "8%" },
  { icon: Home, size: "w-8 h-8", color: "text-amber-400/35", duration: "22s", delay: "5s", top: "70%", left: "3%" },
  { icon: Stethoscope, size: "w-9 h-9", color: "text-blue-400/30", duration: "28s", delay: "8s", bottom: "20%", right: "12%" },
  { icon: Shield, size: "w-11 h-11", color: "text-emerald-400/25", duration: "32s", delay: "3s", top: "45%", right: "20%" },
  { icon: Award, size: "w-7 h-7", color: "text-amber-400/35", duration: "24s", delay: "10s", bottom: "60%", left: "12%" },
  { icon: Activity, size: "w-8 h-8", color: "text-teal-400/30", duration: "27s", delay: "6s", top: "80%", right: "25%" }
];

export default function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeartBeating, setIsHeartBeating] = useState(true);
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

    const heartbeatInterval = setInterval(() => {
      setIsHeartBeating(true);
      setTimeout(() => setIsHeartBeating(false), 1000);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(heartbeatInterval);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-10 md:py-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 30%, #a5d6a7 60%, #e8f5e9 100%)"
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          const positionStyles: React.CSSProperties = {};
          if (element.top) positionStyles.top = element.top;
          if (element.bottom) positionStyles.bottom = element.bottom;
          if (element.left) positionStyles.left = element.left;
          if (element.right) positionStyles.right = element.right;
          
          return (
            <div
              key={index}
              className={`absolute ${element.size} ${element.color} animate-float`}
              style={{
                ...positionStyles,
                animationDuration: element.duration,
                animationDelay: element.delay,
              }}
            >
              <IconComponent className="w-full h-full" />
            </div>
          );
        })}
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-8 transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-3 shadow-sm">
            <div className="relative">
              <Heart 
                className={`w-3.5 h-3.5 text-emerald-600 transition-all duration-500 ${
                  isHeartBeating ? "scale-125" : "scale-100"
                }`}
              />
              <span className={`absolute inset-0 rounded-full bg-emerald-400/30 transition-all duration-500 ${
                isHeartBeating ? "scale-150 opacity-0" : "scale-100 opacity-0"
              }`}></span>
            </div>
            <span className="text-emerald-700 text-xs font-medium">Caring Hearts, Professional Hands</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Comprehensive Home Care Services
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-700 text-sm max-w-xl mx-auto">
            Every individual has unique needs. We provide personalized care your loved ones deserve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${
                  isVisible 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm mb-0.5">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1 text-xs text-gray-400">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                      <span className="text-[11px]">{service.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className={`mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-100 shadow-sm transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Need a customized care plan?</p>
                  <p className="text-xs text-gray-600">We'll create a plan tailored to your needs</p>
                </div>
              </div>
              <Link href="/contact">
                <button className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={`flex flex-wrap justify-center gap-3 mt-6 transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs text-gray-700">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs text-gray-700">Licensed Provider</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs text-gray-700">IN State Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) translateX(20px) rotate(10deg);
          }
          75% {
            transform: translateY(10px) translateX(10px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}