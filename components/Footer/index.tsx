import styles from "@/styles/footer.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles['brand-wrapper']}>
        <Image className={styles.logo} src="/Logo/logo.svg" width={60} height={60} alt="brand-logo" />
        <p className={styles.description}>StoreGG membantu gamers untuk menjadi pemenang sejati</p>
        <p className={styles.copyright}>Copyright 2021. All Rights Reserved.</p>
      </div>
      <div className={styles['information-wrapper']}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Company</p>
          <Link href="/" className={styles.subtitle}>About Us</Link>
          <Link href="/" className={styles.subtitle}>Press Release</Link>
          <Link href="/" className={styles.subtitle}>Terms of Use</Link>
          <Link href="/" className={styles.subtitle}>Privacy & Policy</Link>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.title}>Support</p>
          <Link href="/" className={styles.subtitle}>Refund Policy</Link>
          <Link href="/" className={styles.subtitle}>Unlock Rewards</Link>
          <Link href="/" className={styles.subtitle}>Live Chatting</Link>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.title}>Connect</p>
          <Link href="/" className={styles.subtitle}>hi@store.gg</Link>
          <Link href="/" className={styles.subtitle}>team@store.gg</Link>
          <Link href="/" className={styles.subtitle}>Pacific 12, Jakarta Selatan</Link>
          <Link href="/" className={styles.subtitle}>021 - 1122 - 9090</Link>
        </div>
      </div>
    </div>
  )
}
