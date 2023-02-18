import styles from '@/styles/howitworks.module.css'
import StepCard from "../basic_components/StepCard";

export default function HowItWorks() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>It’s Really That<br/> Easy to Win the Game</h1>
      <div className={styles['card-wrapper']}>
        <StepCard image="/Illustration/hiw_icon_1.svg" title="1. Start" description=<p>Pilih salah satu game<br/> yang ingin kamu top up</p> />
        <StepCard image="/Illustration/hiw_icon_2.svg" title="2. Fill Up" description=<p>Top up sesuai dengan<br/ > nominal yang sudah tersedia</p> />
        <StepCard image="/Illustration/hiw_icon_3.svg" title="3. Be a Winner" description=<p>Siap digunakan untuk<br /> improve permainan kamu</p> />
      </div>
    </div>
  )
}
