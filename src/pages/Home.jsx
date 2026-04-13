import Navbar from "../components/itinerary/Navbar";
import HeroSection from "../components/itinerary/HeroSection";
import StorySection from "../components/itinerary/StorySection";

import TripMap from "../components/itinerary/TripMap";
import FoodHighlights from "../components/itinerary/FoodHighlights";
import PracticalNotes from "../components/itinerary/PracticalNotes";
import SectionDivider from "../components/itinerary/SectionDivider";
import Footer from "../components/itinerary/Footer";
import BeijingSection from "./sections/BeijingSection";
import LuoyangSection from "./sections/LuoyangSection";
import XianSection from "./sections/XianSection";
import ChengduSection from "./sections/ChengduSection";
import ZhangjiajieSection from "./sections/ZhangjiajieSection";
import GuilinSection from "./sections/GuilinSection";
import ShanghaiSection from "./sections/ShanghaiSection";

// Generated image URLs
export const IMGS = {
  greatWall:     "/assets/images/great-wall-mutianyu.jpg",
  forbiddenCity: "/assets/images/forbidden-city.jpg",
  terracotta:    "/assets/images/terracotta-army.jpg",
  panda:         "/assets/images/panda-research-base.jpg",
  zhangjiajie:   "/assets/images/avatar-pillars.jpg",
  shanghai:      "/assets/images/shanghai-night.jpg",
  guilin:        "/assets/images/guilin-landscape.jpg",
  longmen:       "/assets/images/longmen-grottoes.jpg",
  xianWall:      "/assets/images/xian-city-wall.jpg",
  xianMuslim:    "/assets/images/xian-muslim-quarter.jpg",
  guilinNight:   "/assets/images/guilin-night.jpg",
  pekinDuck:     "/assets/images/peking-duck-home.jpg",
};

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <main className="max-w-3xl mx-auto px-4 md:px-6 pb-12">

        {/* Story */}
        <StorySection />
        <SectionDivider />

        {/* Map */}
        <TripMap />
        <SectionDivider />

        {/* Food */}
        <FoodHighlights />
        <SectionDivider />

        {/* City itineraries */}
        <BeijingSection imgs={IMGS} />
        <SectionDivider />
        <LuoyangSection imgs={IMGS} />
        <SectionDivider />
        <XianSection imgs={IMGS} />
        <SectionDivider />
        <ChengduSection imgs={IMGS} />
        <SectionDivider />
        <ZhangjiajieSection imgs={IMGS} />
        <SectionDivider />
        <GuilinSection imgs={IMGS} />
        <SectionDivider />
        <ShanghaiSection imgs={IMGS} />
        <SectionDivider />

        {/* Practical notes */}
        <PracticalNotes />

      </main>

      <Footer />
    </div>
  );
}
