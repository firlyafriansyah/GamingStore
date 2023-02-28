import styles from '@/styles/pages/membertransactions.module.css'
import MemberPageLayout from "@/layout/MemberPage";
import FilterButton from '@/components/basic_components/FilterButton';
import ItemTable from '@/components/basic_components/ItemTable';
import { useState } from 'react';

export default function Transactions() {
  const [selected, setSelected] = useState('All Trx')

  return (
    <MemberPageLayout selected="transactions">
      <div className={styles.container}>
        <div className={styles.gap} />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>My Transactions</h1>
          <p className={styles.subtitle}>You’ve spent</p>
          <p className={styles['total-spent']}>Rp 4.518.000.500</p>
          <div className={styles['filter-wrapper']}>
            <FilterButton onclick={() => setSelected('All Trx')} text='All Trx' selected={selected === 'All Trx'} />
            <FilterButton onclick={() => setSelected('Success')} text='Success' selected={selected === 'Success'} />
            <FilterButton onclick={() => setSelected('Pending')} text='Pending' selected={selected === 'Pending'} />
            <FilterButton onclick={() => setSelected('Failed')} text='Failed' selected={selected === 'Failed'} />
          </div>
          <div className={styles['table-transactions']}>
            <div className={styles['table-head-wrapper']}>
              <p className={styles['table-head-game']}>Game</p>
              <div className={styles['gap-table']} />
              <p className={styles['table-head']}>Item</p>
              <div className={styles['gap-table']} />
              <p className={styles['table-head']}>Price</p>
              <div className={styles['gap-table']} />
              <p className={styles['table-head']}>Status</p>
              <div className={styles['gap-table']} />
              <p className={styles['table-head']}>Action</p>
            </div>
            <div>
              <ItemTable gameImage='/Illustration/game_card_1.png' gameName='Mobile Legends: Bang Bang' gamePlatform='Mobile' transactionItem='250 Gold' transactionPrice='450.000' transactionStatus='Pending' actionShow />
              <ItemTable gameImage='/Illustration/game_card_2.png' gameName='Call of Duty: Modern' gamePlatform='Desktop' transactionItem='550 Gold' transactionPrice='750.000' transactionStatus='Success' actionShow />
              <ItemTable gameImage='/Illustration/game_card_3.png' gameName='Clash of Clans' gamePlatform='Mobile' transactionItem='2550 Gold' transactionPrice='2.550.000' transactionStatus='Failed' actionShow />
              <ItemTable gameImage='/Illustration/game_card_1.png' gameName='Valorant' gamePlatform='Desktop' transactionItem='1250 Gold' transactionPrice='1.450.000' transactionStatus='Success' actionShow />
              <ItemTable gameImage='/Illustration/game_card_3.png' gameName='Super Mecha' gamePlatform='Mobile' transactionItem='5500 Gold' transactionPrice='4.450.000' transactionStatus='Success' actionShow />
            </div>
          </div>
        </div>
      </div>
    </MemberPageLayout>
  )
}
