import styles from '@/styles/components/basic/navmemberpage.module.css'
import Image from "next/image";
import Link from 'next/link';

interface NavMemberPageProps {
  logo: string,
  title: string,
  selected?: boolean,
  href: string
}

export default function NavMemberPage(props: NavMemberPageProps) {
  const { logo, title, selected = false, href } = props

  return (
    <Link className={styles.container} href={href}>
      <div className={styles['icon-wrapper']}>
        <Image className={styles['icon']} src={logo} fill alt="Icon Sidebar" />
      </div>
      <p className={`${selected ? styles['title-active'] : styles.title}`} >{title}</p>
    </Link>
  )
}
