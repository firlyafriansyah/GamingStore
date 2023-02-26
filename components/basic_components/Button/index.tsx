import styles from '@/styles/components/basic/button.module.css'
import Router from 'next/router';

interface ButtonProps {
  text: string,
  width: string,
  height: number,
  bgColor?: string,
  color?: string,
  navigation?: string,
  query?: any,
  fontSize?: string
}

export default function CustomButton(props: ButtonProps) {
  const { text, width, height, bgColor = '#4D17E2', color = '#000', navigation = '/', query = {}, fontSize = "18px" } = props;

  return (
    <div onClick={() => Router.push({pathname: navigation, query})} className={styles.container} style={{
      width, height, backgroundColor: bgColor
    }}>
      <p style={{color, textAlign: 'center', fontSize: fontSize}}>{text}</p>
    </div>
  )
}
