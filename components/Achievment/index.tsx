import styles from '@/styles/achievment.module.css'
import AchievItem from '../basic_components/AchievItem'

export default function Achievment() {
  return (
    <div className={styles.container}>
      <AchievItem title="290M+" description='Players Top Up' />
      <div className={styles['vertical-line']} />
      <AchievItem title="12.500" description='Games Available' />
      <div className={styles['vertical-line']} />
      <AchievItem title="99,9%" description='Happy Players' />
      <div className={styles['vertical-line']} />
      <AchievItem title="4.7" description='Rating Worldwide' />
    </div>
  )
}
