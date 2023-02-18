import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Layout from "@/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Featured />
    </Layout>
  )
}
