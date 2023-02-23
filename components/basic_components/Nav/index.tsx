import styles from '@/styles/nav.module.css'
import Link from 'next/link'

interface NavProps {
  selected: string
}

export default function Nav(props: NavProps) {
  const { selected } = props

  return (
    <div className={styles.container}>
      <Link className={`${styles['nav-list']} ${selected === "home" ? styles.active : ''}`} href="/">Home</Link>
      <Link className={`${styles['nav-list']} ${selected === "games" ? styles.active : ''}`} href="/games">Games</Link>
      <Link className={`${styles['nav-list']} ${selected === "rewards" ? styles.active : ''}`} href="/rewards">Rewards</Link>
      <Link className={`${styles['nav-list']} ${selected === "discover" ? styles.active : ''}`} href="/discover">Discover</Link>
      <Link className={`${styles['nav-list']} ${selected === "rank" ? styles.active : ''}`} href="/rank">Global Rank</Link>
    </div>
  )
}
