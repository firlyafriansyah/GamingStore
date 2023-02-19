import styles from '@/styles/gamecard.module.css'
import Image from "next/image";

interface GameCardProps {
  image: string,
  gameName: string,
  platformName: string
}

export default function GameCard(props: GameCardProps) {
  const {image, gameName, platformName} = props;
  return (
    <div data-aos="fade-up" className={styles.container}>
      <a href="#" className={styles.wrapper}>
        <div className={styles['glass-image']}>
          <Image className={styles['glass-image-game']} src={image} width={180} height={230} alt="game-card-image" />
          <div className={styles.glass}>
            <div className={styles['gamepad-wrapper']}>
              <Image src="/Illustration/game_pad.svg" alt='game-pad' width={53.63} height={35.52} />
            </div>
            <div className={styles['information-wrapper']}>
              <p className={styles['glass-title']}>{gameName}</p>
              <p className={styles['glass-platform']}>{platformName}</p>
            </div>
          </div>
        </div>
        <Image className={styles['game-card']} src={image} width={205} height={272} alt="game-card-image" />
      </a>
    </div>
  )
}
                 