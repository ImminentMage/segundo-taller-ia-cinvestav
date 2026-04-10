import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TopicsSection } from "./components/TopicsSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <SpeakersSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
