import CategoryCard from '@/components/basic_components/CategoryCard';
import ItemTable from '@/components/basic_components/ItemTable';
import MemberPageLayout from "@/layout/MemberPage";
import styles from '@/styles/pages/memberoverview.module.css';
import Image from 'next/image';

export default function MemberOverview() {
  return (
    <>
      <MemberPageLayout selected="overview" >
        <div className={styles.container}>
          <div className={styles.gap} />
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Overview</h1>
            <p className={styles.subtitle}>Top Up Categories</p>
            <div className={styles['card-category-wrapper']}>
              <CategoryCard logo='/Logo/desktop_icon.svg' firstName='Game' secondName='Desktop' price='18.000.500' />
              <CategoryCard logo='/Logo/phone_icon.svg' firstName='Game' secondName='Mobile' price='8.455.000' />
              <CategoryCard logo='/Logo/desktop_icon.svg' firstName='Other' secondName='Categories' price='5.000.500' />
            </div>
            <p className={styles.subtitle}>Latest Transactions</p>
            <div className={styles['table-transactions']}>
              <div className={styles['table-head-wrapper']}>
                <p className={styles['table-head-game']}>Game</p>
                <div className={styles['gap-table']} />
                <p className={styles['table-head']}>Item</p>
                <div className={styles['gap-table']} />
                <p className={styles['table-head']}>Price</p>
                <div className={styles['gap-table']} />
                <p className={styles['table-head']}>Status</p>
              </div>
              <div>
                <ItemTable gameImage='/Illustration/game_card_1.png' gameName='Mobile Legends: Bang Bang' gamePlatform='Mobile' transactionItem='250 Gold' transactionPrice='450.000' transactionStatus='Pending' actionShow={false} />
                <ItemTable gameImage='/Illustration/game_card_2.png' gameName='Call of Duty: Modern' gamePlatform='Desktop' transactionItem='550 Gold' transactionPrice='750.000' transactionStatus='Success' actionShow={false} />
                <ItemTable gameImage='/Illustration/game_card_3.png' gameName='Clash of Clans' gamePlatform='Mobile' transactionItem='2550 Gold' transactionPrice='2.550.000' transactionStatus='Failed' actionShow={false} />
                <ItemTable gameImage='/Illustration/game_card_1.png' gameName='Valorant' gamePlatform='Desktop' transactionItem='1250 Gold' transactionPrice='1.450.000' transactionStatus='Success' actionShow={false} />
                <ItemTable gameImage='/Illustration/game_card_3.png' gameName='Super Mecha' gamePlatform='Mobile' transactionItem='5500 Gold' transactionPrice='4.450.000' transactionStatus='Success' actionShow={false} />
              </div>
            </div>
          </div>
        </div>
      </MemberPageLayout>
      <div className='warning'>
        <div className='image-warning-wrapper'>
          <Image src="/Logo/info_icon.svg" fill sizes="(max-width: 1100px) 100%, (max-width: 800px) 100%, 100%" alt="Information Icon" />
        </div>
        <p className='warning-title'>Sorry!</p>
        <p className='warning-information'>Your device height is not capable to displaying this webpage.</p>
      </div>
    </>
  )
}
