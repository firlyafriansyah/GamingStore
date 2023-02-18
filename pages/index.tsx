import Achievment from "@/components/Achievment";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Storyboard from "@/components/Storyboard";
import Layout from "@/layout";

export default function Home() {
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
