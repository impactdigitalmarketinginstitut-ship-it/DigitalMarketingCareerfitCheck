import AssessmentInfo from "@/components/AssessmentInfo";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <AssessmentInfo/>
      <HowItWorks/>
    </main>
  );
}