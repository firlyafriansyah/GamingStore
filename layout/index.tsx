import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode,
  selected: string
}

export default function Layout(props: LayoutProps) {
  const {children, selected} = props
  
  return (
    <>
      <Header selected={selected} />
      <div>{children}</div>
      <Footer />
    </>
  )
}
