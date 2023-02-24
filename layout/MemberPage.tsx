import styles from '@/styles/pages/memberpagelayout.module.css'
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"

interface MemberPageLayoutProps {
  children: ReactNode
}

export default function MemberPageLayout(props: MemberPageLayoutProps) {
  const { children } = props
  return (
    <div className={styles.container}>
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}
