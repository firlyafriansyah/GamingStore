import styles from '@/styles/components/basic/itemtable.module.css'
import Image from 'next/image'
import CustomButton from '../Button'

export default function ItemTable() {
  return (
    <div className={styles.container}>
      <div className={styles['game-wrapper']}>
        <div className={styles['game-image-wrapper']}>
          <Image className={styles['game-image']} src="/Illustration/game_card_1.png" fill alt="Game Image" />
        </div>
        <div className={styles['game-title-wrapper']}>
          <h1 className={styles['game-title']}>Mobile Legends: Bang Bang</h1>
          <p className={styles['game-platform']}>Mobile</p>
        </div>
      </div>
      <div className={styles.gap} />
      <div className={styles['item-wrapper']}>
        <p className={styles['item-text']}>200 Gold</p>
      </div>
      <div className={styles.gap} />
      <div className={styles['price-wrapper']}>
        <p className={styles['price-text']}>Rp 290.000</p>
      </div>
      <div className={styles.gap} />
      <div className={styles['status-wrapper']}>
        <p className={styles.dot}>•</p>
        <p className={styles['status-text']}>Pending</p>
      </div>
      <div className={styles.gap} />
      <div className={styles['action-wrapper']}>
        <CustomButton text='Details' width='110px' height={40} color='#0C145A' bgColor='#E7EAF5' fontSize='14.4px' />
      </div>
    </div>
  )
}
