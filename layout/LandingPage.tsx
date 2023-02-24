import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface LandingPageLayoutProps {
  children: ReactNode,
  selected: string
}

export default function LandingPageLayout(props: LandingPageLayoutProps) {
  const {children, selected} = props
  
  return (
    <>
      <Header selected={selected} />
      <div>{children}</div>
      <Footer />
    </>
  )
}
