// components/call-to-action.tsx
"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Calendar, ArrowRight, ChevronLeft, ChevronRight, Heart, Shield, Clock, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Serving All of Indiana",
    description: "Licensed, insured, and certified Medicaid provider serving communities across the state.",
    areas: ["Area 2", "Area 6", "Area 7", "Area 8", "Area 13"],
    features: [
      { icon: Shield, text: "Licensed & Insured" },
      { icon: CheckCircle2, text: "Medicaid Certified" },
      { icon: Clock, text: "24/7 Availability" }
    ],
    ctaText: "Contact Us",
    ctaLink: "/contact",
    icon: Heart,
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Free In-Home Consultation",
    description: "Meet with our care coordinator to discuss your unique needs and create a personalized care plan.",
    areas: ["No Obligation", "Family Support", "Care Planning"],
    features: [
      { icon: Calendar, text: "Schedule Today" },
      { icon: Heart, text: "Compassionate Care" },
      { icon: MapPin, text: "At Your Convenience" }
    ],
    ctaText: "Book Consultation",
    ctaLink: "/contact",
    icon: Calendar,
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    id: 3,
    title: "Join Our Care Team",
    description: "Looking for meaningful work? Become a caregiver and make a difference in someone's life every day.",
    areas: ["Flexible Hours", "Competitive Pay", "Training Provided"],
    features: [
      { icon: Heart, text: "Rewarding Career" },
      { icon: Clock, text: "Flexible Schedules" },
      { icon: Shield, text: "Full Support" }
    ],
    ctaText: "Apply Now",
    ctaLink: "/careers",
    icon: Heart,
    gradient: "from-rose-600 to-pink-600"
  }
];

export default function CallToAction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const current = slides[currentSlide];

  const getAnimationClass = () => {
    if (!isAnimating) return "opacity-100 translate-x-0";
    if (direction === 'next') return "opacity-0 -translate-x-8";
    return "opacity-0 translate-x-8";
  };

  return (
    <section className="py-10 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Slider Container */}
          <div className="relative">
            {/* Slide Content */}
            <div className={`transition-all duration-500 ease-out transform ${getAnimationClass()}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Content */}
                <div className="text-white">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <current.icon className="w-6 h-6 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {current.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {current.description}
                  </p>
                  
                  {/* Service Areas */}
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-white/60 mb-2">SERVICE AREAS</h3>
                    <div className="flex flex-wrap gap-2">
                      {current.areas.map((area, idx) => (
                        <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {current.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <feature.icon className="w-3 h-3 text-white/60" />
                        <span className="text-[10px] text-white/70">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link href={current.ctaLink}>
                    <button className={`group inline-flex items-center gap-2 bg-gradient-to-r ${current.gradient} text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                      {current.ctaText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>

                {/* Right Side - Visual */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${current.gradient} rounded-2xl p-6 shadow-xl`}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                      
                      {/* Stats or visual content */}
                      <div className="relative z-10">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                            <current.icon className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-white font-bold text-lg mb-2">Quality Care You Can Trust</h3>
                          <p className="text-white/70 text-xs">Serving Indiana families since 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-6 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-2">
              <span className="text-[10px] text-white/40">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}