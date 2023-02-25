import styles from '@/styles/components/basic/categorycard.module.css'
import Image from 'next/image'

interface CategoryCardProps {
  logo: string,
  firstName: string,
  secondName: string,
  price: string
}

export default function CategoryCard(props: CategoryCardProps) {
  const { logo, firstName, secondName, price } = props

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div className={styles['category-image']}>
          <Image src={logo} fill sizes="(max-width: 1100px) 100%, (max-width: 800px) 100%, 100%" alt="Desktop Icon" />
        </div>
        <div className={styles['category-title']}>
          <p className={styles['category-name']}>{firstName}</p>
          <p className={styles['category-name']}>{secondName}</p>
        </div>
      </div>
        <p className={styles['category-price-title']}>Total Spent</p>
        <p className={styles['category-price']}>Rp {price}</p>
    </div>
  )
}
