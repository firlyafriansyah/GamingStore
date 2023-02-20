import CustomButton from '@/components/basic_components/Button'
import HeadCustom from '@/components/Head'
import styles from '@/styles/uploadphoto.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function UploadPhoto() {
  return (
    <>
      <HeadCustom title="Upload Photo - Gaming Store" />
      <div className={styles.container}>
        <input type="file" style={{display: 'none'}} id="upload-file" name='upload-file' />
        <label className={styles['upload-wrapper']} htmlFor="upload-file">
          <Image src='/Logo/upload_icon.svg' width={36} height={36} alt="upload-photo" />
        </label>
        <p className={styles.name}>Shayna Anne</p>
        <p className={styles.email}>shayna@anne.com</p>
        <div className={styles['game-favorite-container']}>
          <div className={styles['game-favorite-wrapper']}>
            <label className={styles.label} htmlFor='game-favorite'>Favorite Game</label>
            <div className={styles.select}>
              <select className={styles['game-select']} name="game-favorite" id="game-favorite" defaultValue='Select Category'>
                <option value="" defaultChecked>Select Category</option>
                <option value="Mobile Legends">Mobile Legends</option>
                <option value="Call of Duty: Modern">Call of Duty: Modern</option>
                <option value="Valorant">Valorant</option>
                <option value="Clash of Clans">Clash of Clans</option>
                <option value="Super Mechs">Super Mechs</option>
              </select>
            </div>
          </div>
          <CustomButton text='Create My Account' width='100%' bgColor='#4D17E2' color='#ffffff' height={50} navigation="/signup-success" />
          <Link className={styles['link-terms']} href="/signup">Terms & Conditions</Link>
        </div>
      </div>
    </>
  )
}
