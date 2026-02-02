"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MainPage from "../components/MainPage/MainPage";
import MissionBriefing from "@/components/MissionBriefing";
import Prizes from "@/components/prizes/prizes";
import GalleryPage from "@/components/gallery/gallery";
import Themes from "@/components/ThemesSection/ThemesSection";
import ComingSoon from "@/components/ComingSoon";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline/timeline";
import Testimonials from "@/components/Testimonials/Testimonials";
import Organizers from "@/components/Organizers/Organizers";
import FAQList from "@/components/FAQList";
import Footer from "@/components/Footer";
import AboutUsAchievementWith3D from "@/components/MissionBriefing/AboutUsAchievementWith3D";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <MainPage />
      {isMobile ? (
        <MissionBriefing />
      ) : (
        <div className="relative w-full min-h-screen">
          <Image
            src="/sections/mission-briefing-bg.webp"
            alt="Mission Briefing Background"
            fill
            className="object-cover object-center -z-10"
            priority
          />
          <AboutUsAchievementWith3D />
        </div>
      )}
      <Prizes />
      <GalleryPage />
      <Themes />
      <ComingSoon />
      <Sponsors />
      <Timeline />
      <Testimonials />
      <Organizers />
      <FAQList />
      <Footer />
    </>
  );
}