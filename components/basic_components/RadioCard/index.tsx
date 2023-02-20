import styles from '@/styles/radiocard.module.css'
import Image from 'next/image'

interface RadioCardProps {
  title: string,
  additionalTitle?: string,
  subtitle: string,
  selected?: boolean
}

export default function RadioCard(props: RadioCardProps) {
  const {title, subtitle, additionalTitle, selected = false} = props
  
  return (
    <div className={selected ? styles['container-selected'] : styles['container']}>
      <div className={styles['title-wrapper']}>
        <h1 className={styles['title-strong']}>{title} <span className={styles['title-light']}>{additionalTitle}</span></h1>
        <Image style={{display: `${selected ? 'block' : 'none'}`}} src="/Illustration/check_icon.svg" width={20} height={20} alt="check-icon" />
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}
