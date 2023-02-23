import styles from '@/styles/radiocard.module.css'
import Image from 'next/image'

interface RadioCardProps {
  title: string,
  additionalTitle?: string,
  subtitle: string,
  name: string
}

export default function RadioCard(props: RadioCardProps) {
  const {title, subtitle, additionalTitle, name} = props
  
  return (
    <>
      <input className={styles['radio-input']} type="radio" name={name} value={title} id={title.trim()} />
      <label htmlFor={title.trim()} className={styles.container}>
        <div className={styles['title-wrapper']}>
          <h1 className={styles['title-strong']}>{title} <span className={styles['title-light']}>{additionalTitle}</span></h1>
          <Image className={styles.image} src="/Illustration/check_icon.svg" width={20} height={20} alt="check-icon" />
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
      </label>
    </>
  )
}
