import styles from '@/styles/nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={styles.container}>
      <Link className={`${styles['nav-list']} ${styles.active}`} href="/">Home</Link>
      <Link className={styles['nav-list']} href="/games">Games</Link>
      <Link className={styles['nav-list']} href="/rewards">Rewards</Link>
      <Link className={styles['nav-list']} href="/discover">Discover</Link>
      <Link className={styles['nav-list']} href="/rank">Global Rank</Link>
    </div>
  )
}
