import CustomButton from '@/components/basic_components/Button'
import CustomInput from '@/components/basic_components/Input'
import RadioCard from '@/components/basic_components/RadioCard'
import HeadCustom from '@/components/Head'
import Layout from '@/layout'
import styles from '@/styles/detailproduct.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function DetailProduct() {
  const router = useRouter()
  const { gameId } = router.query

  return (
    <>
    <HeadCustom title={ gameId?.toString().split('-').map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(' ') + ' - Product Detail || Gaming Store' } />
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>Top Up</h1>
          <p className={styles.subtitle}>Perkuat akun dan jadilah pemenang</p>
          <div className={styles['product-detail-wrapper']}>
            <div className={styles['product-detail-image-wrapper']}>
              <Image className={styles['product-detail-image']} src='/Illustration/game_card_3.png' fill alt="game-card" priority />
            </div>
            <div className={styles['product-detail']}>
              <h1 className={styles.title}>Mobile Legends:</h1>
              <h1 className={styles.tagline}>The New Battle 2021</h1>
              <p className={styles.category}>Category: Mobile</p>
              <hr className={styles.line} />
              <div className={styles['verify-input']}>
                <CustomInput label='Verify ID' id='verify-id' type='text' name='verify-id' placeholder='Enter your ID' />
              </div>
              <p className={styles['topup-title']}>Nominal Top Up</p>
              <div className={styles['price-card']}>
                <RadioCard title='125' additionalTitle='Gold' subtitle='Rp 3.250.000' />
                <RadioCard title='225' additionalTitle='Gold' subtitle='Rp 3.250.000' selected />
                <RadioCard title='350' additionalTitle='Gold' subtitle='Rp 3.250.000' />
                <RadioCard title='550' additionalTitle='Gold' subtitle='Rp 3.250.000' />
                <RadioCard title='750' additionalTitle='Gold' subtitle='Rp 3.250.000' />
              </div>
              <p className={styles['payment-title']}>Payment Method</p>
              <div className={styles['payment-card']}>
                <RadioCard title='Transfer' subtitle='Worldwide accounts' selected />
                <RadioCard title='VISA' subtitle='Credit Card' />
              </div>
              <div className={styles['bank-account-input']}>
                <CustomInput label='Bank Account Name' id='bank-account' type='text' name='bank-account' placeholder='Enter your bank account name' />
              </div>
              <div className={styles['button-wrapper']}>
                <CustomButton text='Continue' width='100%' height={50} bgColor='#4D17E2' color='#ffffff' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
