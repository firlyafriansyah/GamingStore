import styles from '@/styles/pages/games.module.css'
import GameCard from "@/components/basic_components/GameCard";
import LaningPageLayout from "@/layout/LandingPage";
import HeadCustom from '@/components/Head';

export default function Games() {
  return (
    <>
    <HeadCustom title="Games Collection - Gaming Store" />
      <LaningPageLayout selected="games">
        <div className={styles.container}>
          <h1 className={styles.title}>Select your game</h1>
          <div className={styles['card-wrapper']}>
            <GameCard image='/Illustration/game_card_1.png' gameName='Super Mechs' platformName='Mobile' href='/games/super-mechs' />
            <GameCard image='/Illustration/game_card_2.png' gameName='Call of Duty: Modern' platformName='Mobile' href='/games/cod-modern' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' href='/games/clash-of-clans' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_2.png' gameName='Call of Duty: Modern' platformName='Mobile' href='/games/cod-modern' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' href='/games/clash-of-clans' />
            <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' href='/games/clash-of-clans' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' href='/games/clash-of-clans' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' href='/games/clash-of-clans' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_4.png' gameName='Clash of Clans' platformName='Mobile' href='/games/clash-of-clans' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
            <GameCard image='/Illustration/game_card_3.png' gameName='Mobile Legends' platformName='Mobile' href='/games/mobile-legends' />
            <GameCard image='/Illustration/game_card_5.png' gameName='Valorant' platformName='Desktop' href='/games/valorant' />
          </div>
        </div>
      </LaningPageLayout>
    </>
  )
}
