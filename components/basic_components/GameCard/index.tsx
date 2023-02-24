import styles from '@/styles/components/basic/gamecard.module.css'
import Image from "next/image";
import Link from 'next/link';

interface GameCardProps {
  image: string,
  gameName: string,
  platformName: string,
  href?: string
}

export default function GameCard(props: GameCardProps) {
  const {image, gameName, platformName, href = '/'} = props;
  return (
    <div data-aos="fade-up" className={styles.container}>
      <Link href={href} className={styles.wrapper}>
        <div className={styles['glass-image']}>
          <div className={styles['glass-image-game']}>
            <Image fill style={{objectFit: 'cover', borderRadius: '26px'}} sizes="(max-width: 1100px) 92%, (max-width: 800px) 95%, 90%" src={image} alt="game-card-image" placeholder="blur" blurDataURL={'/Illustration/blur.png'} />
          </div>
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
        <div className={styles['game-card']}>
          <Image fill style={{objectFit: 'cover',borderRadius: '26px'}} sizes="(max-width: 1100px) 90%, (max-width: 800px) 100%, 90%" src={image} alt="game-card-image" placeholder="blur" blurDataURL={'/Illustration/blur.png'} />
        </div>
      </Link>
    </div>
  )
}