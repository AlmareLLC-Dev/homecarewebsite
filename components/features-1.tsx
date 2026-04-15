// components/features-1.tsx - Warm & Professional Compact Version
import { Heart, Clock, Shield, Users, Stethoscope, Home, Award, Handshake } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personalized Care Plans",
    description: "Tailored solutions designed for each individual's unique needs and preferences.",
    color: "bg-rose-50 text-rose-600"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock care and support when your loved ones need help.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Professional caregivers who are thoroughly vetted, trained, and certified.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Users,
    title: "Compassionate Caregivers",
    description: "Dedicated professionals who treat your family members like their own.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Stethoscope,
    title: "Medical Support",
    description: "Assistance with medication management and healthcare coordination.",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Quality care delivered in a familiar environment that promotes well-being.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: Award,
    title: "A+ BBB Rating",
    description: "Accredited business with Better Business Bureau and A+ rating.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "Working with families, doctors, and providers for comprehensive care.",
    color: "bg-purple-50 text-purple-600"
  }
];

export default function Features() {
  return (
    <section className="py-10 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header - Compact */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 px-3 py-0.5 rounded-full mb-2">
            <span className="text-amber-700 text-xs font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Why Choose Homecare Connections LLC?
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm">
            We provide exceptional home care services with a personal touch, ensuring dignity, respect, and quality of life.
          </p>
        </div>

        {/* Features Grid - 4x2 Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-amber-100 hover:border-amber-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-2 transition-transform group-hover:scale-105`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-gray-700">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">A+</span>
              </div>
              <span className="text-xs text-gray-700">BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xs text-gray-700">Licensed Provider</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <span className="text-xs text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}