import styles from '@/styles/button.module.css'

interface ButtonProps {
  text: string,
  width: string,
  height: number,
  bgColor?: string,
  color?: string,
}

export default function CustomButton(props: ButtonProps) {
  const { text, width, height, bgColor = '#4D17E2', color = '#000' } = props;

  return (
    <div className={styles.container} style={{
      width, height, backgroundColor: bgColor
    }}>
      <p style={{color, textAlign: 'center'}}>{text}</p>
    </div>
  )
}
