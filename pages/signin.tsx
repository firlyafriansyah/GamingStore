import styles from '@/styles/pages/signin.module.css'
import HeadCustom from "@/components/Head";
import Image from 'next/image';
import CustomInput from '@/components/basic_components/Input';
import CustomButton from '@/components/basic_components/Button';

export default function Signin() {
  return (
    <>
      <HeadCustom title="Sign In - Gaming Store" />
      <div className={styles.container}>
        <div className={styles['signin-wrapper']}>
          <div className={styles['signin']}>
            <Image className={styles.logo} src="/Logo/logo.svg" width={60} height={60} alt="logo-image" />
            <h1 className={styles.title}>Sign In</h1>
            <p className={styles.description}>Masuk untuk melakukan proses top up</p>
            <div className={styles['form-wrapper']}>
              <CustomInput label='Email Address' id='email' name='email' type='email' placeholder='Enter your email address' />
              <div style={{height: '30px'}} />
              <CustomInput label='Password' id='password' name='password' type='password' placeholder='Your password' />
              <div style={{height: '50px'}} />
              <CustomButton text='Continue to Sign In' width='100%' height={50} color="#FFFFFF" bgColor='#4D17E2' navigation='/signin' />
              <div style={{height: '16px'}} />
              <CustomButton text='Sign Up' width='100%' height={50} color="#0C145A" bgColor='#E7EAF5' navigation='/signup' />
            </div>
          </div>
        </div>
        <div className={styles['signin-illustrator']}>
          <div className={styles['signin-image-wrapper']}>
            <div className={styles['signin-image-3-blur']} />
            <div className={styles['signin-image-2-blur']} />
            <div className={styles['signin-image-1-wrapper']}>
              <Image src='/Image/story_image_1.png' className={styles['signin-image-1']} fill sizes="(max-width: 1100px) 92%, (max-width: 800px) 95%, 90%" alt="signin-image" priority />
            </div>
          </div>
          <h1 className={styles['signin-illustrator-title']}>Win the battle.<br/>Bet the champion.</h1>
          <p className={styles['signin-illustrator-subtitle']}>Kami menyediakan jutaan cara untuk<br/> membantu players menjadi<br/> pemenang sejati</p>
        </div>
      </div>
    </>
  )
}
