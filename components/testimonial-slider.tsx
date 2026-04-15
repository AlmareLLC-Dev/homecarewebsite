// components/testimonial-slider.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Heart, MessageCircle, Smile, Shield, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Denise Sanders",
    location: "Indiana",
    relationship: "Family Member",
    rating: 5,
    text: "Homecare Connections has been a hero in the community! The company stepped up with a patient who was in need of homecare assistance and Homecare Connections stepped in with love and utmost professionalism and the spirit of excellence! We thank you from the bottom of our hearts for caring for our loved one!",
    source: "Google Review"
  },
  {
    id: 2,
    name: "Rosa Mystica",
    location: "Indiana",
    relationship: "Local Guide",
    rating: 5,
    text: "Best home care agency. Great staff and caregivers who are dedicated to their patients. Best experience we've had with home care agency.",
    source: "Google Review"
  },
  {
    id: 3,
    name: "Theresa Walker",
    location: "Indiana",
    relationship: "Client Family",
    rating: 5,
    text: "I love Home Care Connections LLC. They work together, help one another, give their all to the clients and employees. They go above and beyond to help, love, support, and care. I'll give them a 10!",
    source: "Google Review"
  },
  {
    id: 4,
    name: "John Lucas",
    location: "Indiana",
    relationship: "Caregiver",
    rating: 5,
    text: "Great company and I love my client and my bosses are excellent. I do my best to make the client feel comfortable and confident that they are in the hands of the best homecare agency around. Highly recommend HomeCare Connections.",
    source: "Google Review"
  }
];

// Floating icons for animation
const floatingIcons = [
  { icon: Heart, color: "text-rose-400/40", delay: "0s", duration: "8s", top: "10%", left: "5%" },
  { icon: MessageCircle, color: "text-blue-400/35", delay: "1.5s", duration: "9s", top: "20%", right: "8%" },
  { icon: Smile, color: "text-amber-400/35", delay: "3s", duration: "7s", top: "70%", left: "10%" },
  { icon: Shield, color: "text-emerald-400/30", delay: "4.5s", duration: "10s", bottom: "15%", right: "12%" },
  { icon: ThumbsUp, color: "text-green-400/35", delay: "2s", duration: "8.5s", top: "45%", right: "15%" },
  { icon: Star, color: "text-yellow-400/30", delay: "5s", duration: "7.5s", bottom: "30%", left: "8%" }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5 justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
};

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  // Animation class based on direction
  const getAnimationClass = () => {
    if (!isAnimating) return "opacity-100 scale-100";
    if (direction === 'next') return "opacity-0 -translate-x-8 scale-95";
    return "opacity-0 translate-x-8 scale-95";
  };

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Animated Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          const positionStyles: React.CSSProperties = {};
          if (item.top) positionStyles.top = item.top;
          if (item.bottom) positionStyles.bottom = item.bottom;
          if (item.left) positionStyles.left = item.left;
          if (item.right) positionStyles.right = item.right;
          
          return (
            <div
              key={index}
              className={`absolute ${item.color} animate-float-whatsapp`}
              style={{
                ...positionStyles,
                animationDuration: item.duration,
                animationDelay: item.delay,
              }}
            >
              <IconComponent className="w-6 h-6 md:w-8 md:h-8 opacity-60" />
            </div>
          );
        })}
        
        {/* Gentle ripple circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-200/20 animate-pulse-gentle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-200/15 animate-pulse-gentle" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 left-1/3 w-28 h-28 rounded-full bg-rose-200/15 animate-pulse-gentle" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Smaller */}
        <div className="text-center max-w-md mx-auto mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-xs">
            Here's what families in Indiana have to say
          </p>
          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-[10px] text-gray-700">5.0</span>
              <span className="text-gray-400 text-[10px]">Avg Rating</span>
            </div>
          </div>
        </div>

        {/* Testimonial Card - Smaller */}
        <div className="max-w-2xl mx-auto relative">
          {/* Main Card with Smooth Transition */}
          <div 
            className={`bg-white rounded-xl shadow-md p-5 transition-all duration-500 ease-out transform ${getAnimationClass()}`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-blue-500" />
              </div>
            </div>

            {/* Rating Stars */}
            <RatingStars rating={current.rating} />

            {/* Testimonial Text - Smaller */}
            <p className="text-gray-600 text-center text-sm italic leading-relaxed mb-3 line-clamp-4">
              "{current.text}"
            </p>

            {/* Client Info */}
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-sm">{current.name}</p>
              <p className="text-gray-400 text-xs">
                {current.location} • {current.relationship}
              </p>
              <div className="mt-1">
                <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
                  <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                  Google Review
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Pushed Outside */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 w-7 h-7 rounded-full shadow-md transition-all duration-300 hover:scale-110 z-10 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 w-7 h-7 rounded-full shadow-md transition-all duration-300 hover:scale-110 z-10 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot Indicators - Smaller */}
          <div className="flex justify-center gap-1.5 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-5 h-1.5 bg-blue-500"
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter - Smaller */}
          <div className="text-center mt-1.5 text-[10px] text-gray-400">
            {currentIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-whatsapp {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-12px) translateX(6px) scale(1.05);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-6px) translateX(12px) scale(1);
            opacity: 0.5;
          }
          75% {
            transform: translateY(8px) translateX(4px) scale(0.98);
            opacity: 0.6;
          }
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.08);
          }
        }
        
        .animate-float-whatsapp {
          animation: float-whatsapp ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}