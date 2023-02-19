import styles from '@/styles/featured.module.css'
import GameCard from "../basic_components/GameCard";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Featured<br/>Games This Year</h1>
      <div className={styles['card-wrapper']}>
        <GameCard image='/Illustration/game_card_1.png' gameName='Super Mechs' platformName='Mobile' />
        <GameCard image='/Illustration/game_card_2.png' gameName='Call of Duty: Modern' platformName='Mobile' />
        <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' />
        <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' />
        <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' />
      </div>
    </div>
  )
}