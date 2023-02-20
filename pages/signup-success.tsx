import CustomButton from '@/components/basic_components/Button'
import styles from '@/styles/signupsuccess.module.css'
import Image from 'next/image'

export default function SignupSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles['illustration-wrapper']}>
        <Image src='/Illustration/wallet.svg' fill alt="wallet-icon" />
      </div>
      <h1 className={styles.title}>Well Done!</h1>
      <p className={styles.subtitle}>Kamu sudah bisa melakukan top up<br/>dan menjadi pemenang!</p>
      <div className={styles['button-wrapper']}>
        <CustomButton text='Top Up' width='100%' height={50} bgColor='#4D17E2' color='#ffffff' navigation='/' />
      </div>
    </div>
  )
}
