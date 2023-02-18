import styles from '@/styles/stepcard.module.css'
import Image from 'next/image'
import { ReactNode } from 'react';

interface StepCardProps {
  image: string,
  title: string,
  description: ReactNode,
}

export default function StepCard(props: StepCardProps) {
  const {image, title, description} = props;

  return (
    <div className={styles.container}>
      <Image src={image} alt="Hiw-Icon" width={60} height={60} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
