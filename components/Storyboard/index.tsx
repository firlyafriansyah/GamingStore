import styles from '@/styles/storyboard.module.css'
import Image from "next/image";
import CustomButton from '../basic_components/Button';

export default function Storyboard() {
  return (
    <div className={styles.container}>
      <div className={styles['story-image']}>
        <div className={styles['image-wrapper']}>
          <div className={styles['story-image-base']} />
          <Image className={styles['story-image-1']} src="/Image/story_image_3.png" alt="story-image" width={580} height={420} />
          <div className={styles['story-image-blur-2']} />
          <Image className={styles['story-image-2']} src="/Image/story_image_2.png" alt="story-image" width={580} height={420} />
          <div className={styles['story-image-blur-1']} />
          <Image className={styles['story-image-3']} src="/Image/story_image_1.png" alt="story-image" width={580} height={420} />
        </div>
      </div>
      <div className={styles['story-caption']}>
        <h1 className={styles['story-title']}>Win the battle.<br /> Be the Champion.</h1>
        <p className={styles['story-description']}>Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati</p>
        <CustomButton text='Read Story' width={190} height={50} bgColor="#E7EAF5" color='#0C145A' />
      </div>
    </div>
  )
}
