// app/page.tsx
import ImageSlider from "@/components/image-slider";
import AboutContent from "@/components/about-content";  // Changed from Features
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import TestimonialSlider from "@/components/testimonial-slider";

export const metadata = {
  title: "HomeCare Connections LLC | Compassionate Home Care in Indiana",
  description: "24/7 home care services in Indiana including attendant care, homemaker services, and non-emergency transportation. Licensed Medicaid provider with A+ BBB rating.",
};

export default function Home() {
  return (
    <>
      <ImageSlider />
      <AboutContent />        {/* About/Why Choose Us section */}
      <ContentSection />      {/* Services section */}
      <TestimonialSlider />
      <CallToAction />
    </>
  );
}