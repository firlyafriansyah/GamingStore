import Achievment from "@/components/Achievment";
import Featured from "@/components/Featured";
import HeadCustom from "@/components/Head";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Storyboard from "@/components/Storyboard";
import LandingPageLayout from "@/layout/LandingPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])
  

  return (
    <>
      <HeadCustom title="Gaming Store - Firly Afriansyah" />
      <LandingPageLayout selected="home" >
        <Hero />
        <HowItWorks />
        <Featured />
        <Achievment />
        <Storyboard />
      </LandingPageLayout>
    </>
  )
}
