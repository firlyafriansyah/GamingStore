import styles from '@/styles/components/basic/itemtable.module.css'
import Image from 'next/image'
import CustomButton from '../Button'

interface ItemTableProps {
  gameImage: string,
  gameName: string,
  gamePlatform: string,
  transactionItem: string,
  transactionPrice: string,
  transactionStatus: string,
  navigation?: string,
}

export default function ItemTable(props: ItemTableProps) {
  const { gameImage, gameName, gamePlatform, transactionItem, transactionPrice, transactionStatus, navigation = 'none' } = props

  return (
    <div className={styles.container}>
      <div className={styles['game-wrapper']}>
        <div className={styles['game-image-wrapper']}>
          <Image className={styles['game-image']} src={gameImage} fill sizes="(max-width: 1100px) 100%, (max-width: 800px) 100%, 100%" alt="Game Image" priority />
        </div>
        <div className={styles['game-title-wrapper']}>
          <h1 className={styles['game-title']}>{gameName}</h1>
          <p className={styles['game-platform']}>{gamePlatform}</p>
        </div>
      </div>
      <div className={styles.gap} />
      <div className={styles['item-wrapper']}>
        <p className={styles['item-text']}>{transactionItem}</p>
      </div>
      <div className={styles.gap} />
      <div className={styles['price-wrapper']}>
        <p className={styles['price-text']}>Rp {transactionPrice}</p>
      </div>
      <div className={styles.gap} />
      <div className={styles['status-wrapper']}>
        <p className={styles.dot} style={{color: `${transactionStatus === 'Pending' ? '#FEBD57' : transactionStatus === 'Success' ? '#1ABC9C' : '#FE5761'}`}}>•</p>
        <p className={styles['status-text']}>{transactionStatus}</p>
      </div>
      <div className={styles.gap} style={{display: navigation === 'none' ? 'none' : 'block'}} />
      <div className={styles['action-wrapper']} style={{display: navigation == 'none' ? 'none' : 'block'}}>
        <CustomButton text='Details' width='110px' height={40} color='#0C145A' bgColor='#E7EAF5' fontSize='14.4px' navigation={navigation} />
      </div>
    </div>
  )
}
