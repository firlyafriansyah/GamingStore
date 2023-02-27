import styles from '@/styles/pages/memberpagelayout.module.css'
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"
import HeadCustom from '@/components/Head'

interface MemberPageLayoutProps {
  children: ReactNode,
  selected: string
}

export default function MemberPageLayout(props: MemberPageLayoutProps) {
  const { children, selected } = props
  return (
    <>
      <HeadCustom title='Member - Gaming Store' />
      <div className={`${styles.container} member-container`}>
        <Sidebar selected={selected} />
        <div>{children}</div>
      </div>
    </>
  )
}
