import FAQSection from "@/components/modules/Home/faqs";
import { Hero } from "@/components/modules/Home/Hero";
import SearchServicesSection from "@/components/modules/Home/PupularServices";
import TradeWithConfidence from "@/components/modules/Home/TradeWithConfidence";
import TradingSteps from "@/components/modules/Home/TradingStepsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <SearchServicesSection />
        <TradingSteps />
        <TradeWithConfidence />
        <FAQSection/>
      </main>
    </>
  );
}
