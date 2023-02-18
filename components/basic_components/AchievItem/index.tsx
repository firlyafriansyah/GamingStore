import styles from '@/styles/achievitem.module.css'

interface AchievItemProps {
  title: string,
  description: string
}

export default function AchievItem(props: AchievItemProps) {
  const {title, description} = props
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
