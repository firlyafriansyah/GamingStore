import styles from '@/styles/pages/memberpagelayout.module.css'
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"
import HeadCustom from '@/components/Head'
import Image from 'next/image'

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
      <div className='warning'>
        <div className='image-warning-wrapper'>
          <Image src="/Logo/info_icon.svg" fill sizes="(max-width: 1100px) 100%, (max-width: 800px) 100%, 100%" alt="Information Icon" />
        </div>
        <p className='warning-title'>Sorry!</p>
        <p className='warning-information'>Your device height is not capable to displaying this webpage.</p>
      </div>
    </>
  )
}
