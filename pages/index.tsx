import Achievment from "@/components/Achievment";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Storyboard from "@/components/Storyboard";
import Layout from "@/layout";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])
  

  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Featured />
      <Achievment />
      <Storyboard />
    </Layout>
  )
}
