// app/services/page.tsx
import Image from "next/image";
import { 
  Heart, 
  Home, 
  Bus, 
  Clock, 
  Utensils, 
  ShoppingBag, 
  Stethoscope,
  Users,
  Calendar,
  CheckCircle2,
  Phone
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Home Care Services | HomeCare Connections LLC - Indiana",
  description: "Professional 24/7 home care services in Indiana including attendant care, homemaker services, and non-emergency medical transportation. Licensed Medicaid provider.",
};

const services = [
  {
    icon: Heart,
    title: "Attendant Care",
    description: "Personalized care assistance to help with daily living activities, ensuring comfort, dignity, and independence.",
    features: [
      "Personal hygiene assistance",
      "Bathing and grooming support",
      "Toileting and incontinence care",
      "Mobility assistance",
      "Medication reminders",
      "Feeding assistance"
    ]
  },
  {
    icon: Home,
    title: "Homemaker Services",
    description: "Comprehensive household support to maintain a safe, clean, and comfortable living environment.",
    features: [
      "Housekeeping and cleaning",
      "Laundry and linens",
      "Meal planning and preparation",
      "Grocery shopping",
      "Dishwashing and kitchen cleanup",
      "Organization and decluttering"
    ]
  },
  {
    icon: Bus,
    title: "Non-Emergency Transportation",
    description: "Safe, reliable transportation to appointments, errands, and community activities.",
    features: [
      "Doctor's appointments",
      "Dental and medical visits",
      "Grocery shopping trips",
      "Pharmacy pickups",
      "Social and community events",
      "Personal errands"
    ]
  }
];

const additionalServices = [
  {
    title: "24/7 Care Availability",
    description: "Round-the-clock care services ensuring your loved ones are never alone when they need assistance.",
    icon: Clock
  },
  {
    title: "Care Coordination",
    description: "Working with doctors, family members, and healthcare providers for comprehensive care.",
    icon: Users
  },
  {
    title: "Personalized Care Plans",
    description: "Tailored programs designed specifically for each client's unique needs and preferences.",
    icon: Calendar
  },
  {
    title: "Medicaid Certified",
    description: "Certified Medicaid provider through Indiana Family and Social Services Administration.",
    icon: Stethoscope
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Home Care Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive 24-hour home care services tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Care When You Need It Most
            </h2>
            <p className="text-lg text-gray-600">
              As a licensed personal service agency through the Indiana State Department of Health, 
              we provide quality care you can trust.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gray-100 rounded-xl h-80 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <service.icon className="w-24 h-24" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Ways We Support You
            </h2>
            <p className="text-lg text-gray-600">
              Going above and beyond to ensure complete client satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl text-white p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Serving Indiana Regions</h2>
              <p className="text-lg text-blue-100 mb-8">
                We currently provide home care services in the following Indiana areas:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                <div>
                  <h3 className="font-bold mb-2">Area 2</h3>
                  <p className="text-blue-100 text-sm">LaPorte, St. Joseph, Elkhart, Marshall & Kosciusko</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Area 6</h3>
                  <p className="text-blue-100 text-sm">Grant, Blackford, Jay, Madison, Delaware, Randolph & Henry</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Area 7</h3>
                  <p className="text-blue-100 text-sm">Parke, Putnam, Vigo, Clay & Sullivan</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Area 8</h3>
                  <p className="text-blue-100 text-sm">Boone, Hamilton, Hendricks, Marion, Hancock, Morgan, Johnson & Shelby</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Area 13</h3>
                  <p className="text-blue-100 text-sm">Greene, Knox, Daviess, Martin, Pike & Dubois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll create a personalized care plan that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              Call for Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Contact Us Online
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}