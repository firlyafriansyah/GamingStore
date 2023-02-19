import Achievment from "@/components/Achievment";
import Featured from "@/components/Featured";
import HeadCustom from "@/components/Head";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Storyboard from "@/components/Storyboard";
import Layout from "@/layout";
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
      <Layout>
        <Hero />
        <HowItWorks />
        <Featured />
        <Achievment />
        <Storyboard />
      </Layout>
    </>
  )
}
