import styles from '@/styles/pages/memberoverview.module.css'
import MemberPageLayout from "@/layout/MemberPage";
import Image from 'next/image';
import CategoryCard from '@/components/basic_components/CategoryCard';

export default function MemberOverview() {
  return (
    <MemberPageLayout selected="overview" >
      <div className={styles.container}>
        <h1 className={styles.title}>Overview</h1>
        <p className={styles.subtitle}>Top Up Categories</p>
        <div className={styles['card-category-wrapper']}>
          <CategoryCard logo='/Logo/desktop_icon.svg' firstName='Game' secondName='Desktop' price='18.000.500' />
          <CategoryCard logo='/Logo/phone_icon.svg' firstName='Game' secondName='Mobile' price='8.455.000' />
          <CategoryCard logo='/Logo/desktop_icon.svg' firstName='Other' secondName='Categories' price='5.000.500' />
        </div>
        <p className={styles.subtitle}>Latest Transactions</p>
        <div className={styles.table}>Table</div>
      </div>
    </MemberPageLayout>
  )
}
