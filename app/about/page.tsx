// app/about/page.tsx
import Image from "next/image";
import { Heart, Target, Award, Building2, Bus, Home } from "lucide-react";

export const metadata = {
  title: "About Us | HomeCare Connections LLC - Indiana Home Care",
  description: "Licensed personal service agency serving Indiana regions. Certified Medicaid provider, minority business enterprise, and A+ BBB rated home care services.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HomeCare Connections LLC</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Licensed, certified, and committed to providing compassionate home care services throughout Indiana
          </p>
        </div>
      </section>

      {/* Our Story Section - Customized with your content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-4">
                HomeCare Connections LLC is owned and operated by professionals who understand the importance of the 
                client's health and privacy. Our satisfaction is derived from serving clients within their homes and 
                assisting them with improved quality of life.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe in absolute client satisfaction, providing compassionate, knowledgeable, reliable, and 
                most importantly, trustworthy services.
              </p>
              <p className="text-lg text-gray-600">
                In addition to top-quality homecare services, we bring the human element to our clients. We understand 
                the complexities of illnesses and their far-reaching impacts on our clients and their families.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accreditations</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Licensed Personal Service Agency - Indiana State Department of Health</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Certified Medicaid Provider - Indiana FSSA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span>Certified Minority Business Enterprise - Indiana DOA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>A+ Rating - Better Business Bureau</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive 24-hour home care services tailored to each client's needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Attendant Care</h3>
              <p className="text-gray-600">
                Personalized care assistance to help with daily living activities
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Homemaker Services</h3>
              <p className="text-gray-600">
                Housekeeping, shopping, laundry, meal planning, preparation, and cleaning
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Non-Emergency Transportation</h3>
              <p className="text-gray-600">
                Doctors' appointments, daily errands, grocery shopping, and community activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Our caregivers work with our clients, their doctors, family members, and anyone necessary 
              to facilitate a comprehensive and quality home care program tailored to our clients' needs. 
              We take pride in finding the right person for each client and situation. We are always willing 
              and able to go the extra mile to ensure that our clients are satisfied."
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas - Indiana Regions */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-blue-100">
              Currently serving Indiana regions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Area 2</h3>
              <p className="text-blue-100">LaPorte, St. Joseph, Elkhart, Marshall & Kosciusko</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Area 6</h3>
              <p className="text-blue-100">Grant, Blackford, Jay, Madison, Delaware, Randolph & Henry</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Area 7</h3>
              <p className="text-blue-100">Parke, Putnam, Vigo, Clay & Sullivan</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Area 8</h3>
              <p className="text-blue-100">Boone, Hamilton, Hendricks, Marion, Hancock, Morgan, Johnson & Shelby</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Area 13</h3>
              <p className="text-blue-100">Greene, Knox, Daviess, Martin, Pike & Dubois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Families Trust Us</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Hour Care Services</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Licensed</div>
                <p className="text-gray-600">State Health Department</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
                <p className="text-gray-600">BBB Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">MBE</div>
                <p className="text-gray-600">Certified Minority Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}