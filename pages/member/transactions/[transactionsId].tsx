import styles from '@/styles/pages/detailtransactions.module.css'
import MemberPageLayout from "@/layout/MemberPage";
import { useRouter } from 'next/router';
import Image from 'next/image';
import CustomButton from '@/components/basic_components/Button';
import TransactionsItem from '@/components/basic_components/TransactionsItem';

export default function DetailTransactions() {
  const router = useRouter();
  const id = router.query.transactionsId
  
  return (
    <MemberPageLayout selected="transactions">
      <div className={styles.container}>
        <div className={styles.gap} />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Details #<span>{id}</span></h1>
          <div className={styles['detail-wrapper']}>
            <div className={styles['game-description-wrapper']}>
              <div className={styles['game-description']}>
                <div className={styles['game-image']}>
                  <Image className={styles.image} src='/Illustration/game_card_1.png' fill sizes="(max-width: 1100px) 100%, (max-width: 800px) 100%, 100%" alt='Game Image' priority />
                </div>
                <div className={styles['game-information-wraper']}>
                  <p className={styles['game-name']}>Mobile Legends: The New Battle 2021</p>
                  <p className={styles['game-platform']}>Category: Mobile</p>
                </div>
              </div>
              <CustomButton text='Pending' width='130px' height={40} bgColor='#FFEED3' color='#FEBD57' />
            </div>
            <hr className={styles.line} />
            <div className={styles['transactions-detail-wrapper']}>
              <p className={styles['transactions-title']}>Purchase Details</p>
              <div className={styles['transactions-detail']}>
                <TransactionsItem name='Your Game ID' result='masayoshizero'/>
                <TransactionsItem name='Order ID' result={`#${id}`}/>
                <TransactionsItem name='Item' result='250 Diamonds'/>
                <TransactionsItem name='Price' result='Rp 42.280.500'/>
                <TransactionsItem name='Tax (10%)' result='Rp 4.228.000'/>
                <TransactionsItem name='Total' result='Rp 55.000.600' mark/>
              </div>
              <p className={styles['transactions-title']}>Payment Informations</p>
              <div className={styles['transactions-detail']}>
                <TransactionsItem name='Your Account Name' result='Masayoshi Angga Zero'/>
                <TransactionsItem name='Type' result='Worldwide Transfer'/>
                <TransactionsItem name='Bank Name' result='Mandiri'/>
                <TransactionsItem name='Bank Account Name' result='PT Store GG Indonesia'/>
                <TransactionsItem name='Bank Number' result='1800 - 9090 - 2021'/>
              </div>
            </div>
            <CustomButton text='Whatsapp ke Admin' width='280px' height={50} bgColor='#4D17E2' color='#FFFFFF' />
          </div>
        </div>
      </div>
    </MemberPageLayout>
  )
}
