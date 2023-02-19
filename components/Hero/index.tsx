import styles from '@/styles/hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../basic_components/Button'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.slogan}>
        <p className={styles['slogan-greeting']}>Halo gamers,</p>
          <div className={styles['slogan-main']}>Topup & Get a New Experience in Gaming
            <div className={styles['underline-style-exp']} /><div className={styles['underline-style-new']} />
          </div>
        <p className={styles['slogan-description']}>Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati</p>
        <div className={styles.action}>
          <CustomButton width={200} height={50} color="#FFFFFF" bgColor="#4D17E2" text='Get Started' />
          <Link className={styles['learn-more']} href="/">Learn More</Link>
        </div>
      </div>
      <div data-aos="zoom-in" className={styles.illustration}>
        <Image className={styles.image} priority={true} src="/Banner/banner_image.png" width={490} height={484} alt="banner-image" />
        <div className={styles["rate-illustration"]}>
          <div className={styles['ri-profile']}>
            <Image className={styles['ri-image']} src="/Banner/ri_profile.png" width={40} height={40} alt="ri-profile" />
            <div>
              <p className={styles['ri-profile-name']}>Shayna Anne</p>
              <p className={styles['ri-profile-profesion']}>Professional Gamer</p>
            </div>
          </div>
          <div>
            <Image className={styles['star-image']} src="/Illustration/star.svg" width={26} height={25} alt="star" />
            <Image className={styles['star-image']} src="/Illustration/star.svg" width={26} height={25} alt="star" />
            <Image className={styles['star-image']} src="/Illustration/star.svg" width={26} height={25} alt="star" />
            <Image className={styles['star-image']} src="/Illustration/star.svg" width={26} height={25} alt="star" />
            <Image className={styles['star-image']} src="/Illustration/star.svg" width={26} height={25} alt="star" />
          </div>
        </div>
        <div className={styles['game-illustration']}>
          <Image className={styles['gi-image']} src='/Banner/gi_image.png' width={80} height={80} alt="game-illustration" />
          <p className={styles['gi-title']}>Lann Knight</p>
          <p className={styles['gi-game-name']}>Dota 2</p>
          <div className={styles['gi-new']}>
            <p>New</p>
          </div>
        </div>
      </div>
    </div>
  )
}
