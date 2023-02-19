import CustomButton from '@/components/basic_components/Button';
import styles from '@/styles/custom404.module.css'
import Image from "next/image";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/Illustration/404_image.svg" fill alt="not found image" priority />
      </div>
      <h1 className={styles.title}>Oops! Not Found</h1>
      <p className={styles.description}>Halaman yang anda kunjungi sudah<br/> tidak tersedia pada sistem kami</p>
      <div className={styles.button}>
        <CustomButton text='Home Page' width='100%' height={50} bgColor="#4D17E2" color='#FFFFFF' navigation='/' />
      </div>
    </div>
  )
}
