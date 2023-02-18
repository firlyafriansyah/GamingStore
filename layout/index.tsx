import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const {children} = props
  
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
