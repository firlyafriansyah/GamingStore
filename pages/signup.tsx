import CustomButton from '@/components/basic_components/Button'
import CustomInput from '@/components/basic_components/Input'
import HeadCustom from '@/components/Head'
import styles from '@/styles/pages/signup.module.css'
import Image from 'next/image'

export default function Signup() {
  return (
    <>
      <HeadCustom title="Sign Up - Gaming Store" />
      <div className={styles.container}>
        <div className={styles['signup-wrapper']}>
          <Image className={styles.logo} src="/Logo/logo.svg" width={60} height={60} alt="logo-image" />
          <h1 className={styles.title}>Sign Up</h1>
          <p className={styles.description}>Daftar dan bergabung dengan kami</p>
          <div className={styles['form-wrapper']}>
            <CustomInput label='Full Name' id='fullname' name='fullname' type='text' placeholder='Write your name' />
            <div style={{height: '30px'}} />
            <CustomInput label='Email Address' id='email' name='email' type='email' placeholder='Enter your email address' />
            <div style={{height: '30px'}} />
            <CustomInput label='Password' id='password' name='password' type='password' placeholder='Your password' />
            <div style={{height: '50px'}} />
            <CustomButton text='Continue' width='100%' height={50} color="#FFFFFF" bgColor='#4D17E2' navigation='/upload-photo' />
            <div style={{height: '16px'}} />
            <CustomButton text='Sign In' width='100%' height={50} color="#0C145A" bgColor='#E7EAF5' navigation='/signin' />
          </div>
        </div>
      </div>
    </>
  )
}
