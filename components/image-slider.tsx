// components/image-slider.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Clock, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Compassionate Home Care You Can Trust",
    description: "Professional, personalized care services that help your loved ones maintain independence and quality of life at home.",
    buttonText: "Get Free Consultation",
    buttonLink: "/contact",
    icon: Heart,
    bgColor: "from-blue-600 to-blue-800",
    image: "/images/slide1.jpg"
  },
  {
    id: 2,
    title: "24/7 Professional Care Services",
    description: "Round-the-clock support from trained caregivers who treat your family like their own.",
    buttonText: "Our Services",
    buttonLink: "/services",
    icon: Clock,
    bgColor: "from-teal-600 to-blue-700",
    image: "/images/slide2.jpg"
  },
  {
    id: 3,
    title: "Serving All of Indiana",
    description: "Licensed, insured, and certified Medicaid provider serving Areas 2, 6, 7, 8, and 13.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    icon: Users,
    bgColor: "from-purple-600 to-blue-700",
    image: "/images/slide3.jpg"
  }
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="relative h-[450px] md:h-[500px] lg:h-[550px]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide, index) => {
          const useImage = slide.image && !imageErrors[index];
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background */}
              <div className="absolute inset-0 overflow-hidden">
                {useImage ? (
                  <>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      onError={() => handleImageError(index)}
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content - Compact & Centered */}
              <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center">
                <div className="max-w-2xl text-center">
                  {/* Icon - Smaller */}
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <slide.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Title - Smaller */}
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  
                  {/* Description - Smaller */}
                  <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                  
                  {/* Button - Compact */}
                  <Link href={slide.buttonLink}>
                    <button className="group relative inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden">
                      <span className="relative z-10">{slide.buttonText}</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 md:w-4 md:h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute inset-0 bg-white z-5 group-hover:opacity-0 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - Smaller */}
      <button
        onClick={() => { prevSlide(); handleUserInteraction(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      
      <button
        onClick={() => { nextSlide(); handleUserInteraction(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Dots/Indicators - Compact */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { goToSlide(index); handleUserInteraction(); }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80 hover:scale-125"
            }`}
          />
        ))}
      </div>
    </div>
  );
}