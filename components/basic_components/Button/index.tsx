import styles from '@/styles/button.module.css'
import Router from 'next/router';

interface ButtonProps {
  text: string,
  width: string,
  height: number,
  bgColor?: string,
  color?: string,
  navigation?: string,
  query?: any
}

export default function CustomButton(props: ButtonProps) {
  const { text, width, height, bgColor = '#4D17E2', color = '#000', navigation = '/', query = {} } = props;

  return (
    <div onClick={() => Router.push({pathname: navigation, query})} className={styles.container} style={{
      width, height, backgroundColor: bgColor
    }}>
      <p style={{color, textAlign: 'center'}}>{text}</p>
    </div>
  )
}
