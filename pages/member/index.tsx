import CategoryCard from '@/components/basic_components/CategoryCard';
import TableTransactions from '@/components/basic_components/TableTransactions';
import MemberPageLayout from "@/layout/MemberPage";
import styles from '@/styles/pages/memberoverview.module.css';

export default function MemberOverview() {
  return (
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
              <div className={styles['gap-table']} />
              <p className={styles['table-head']}>Action</p>
            </div>
            <div>
              <TableTransactions />
              <TableTransactions />
              <TableTransactions />
            </div>
          </div>
        </div>
      </div>
    </MemberPageLayout>
  )
}
