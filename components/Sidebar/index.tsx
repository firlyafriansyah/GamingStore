import styles from "@/styles/components/sidebar.module.css"
import Image from "next/image"
import { useState } from "react"
import CustomButton from "../basic_components/Button"
import NavMemberPage from "../basic_components/NavMemberPage"

interface SidebarProps {
  selected: string
}

export default function Sidebar(props: SidebarProps) {
  const { selected } = props
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={`${showSidebar ? styles['humburger-wrapper-active'] : styles['humburger-wrapper']}`} onClick={() => setShowSidebar(!showSidebar)}>
        <div className={styles['humburger-icon-wrapper']}>
          <Image src={`/Logo/${showSidebar ? 'close': 'hamburger'}_icon.svg`} fill sizes="(max-width: 1100px) 100%, (max-width: 800px) 100%, 100%" alt="Mobile Nav" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles['profile-wrapper']}>
          <div className={styles['profile-image-wrapper']}>
            <Image className={styles['profile-image']} src="/Banner/ri_profile.png" fill sizes="(max-width: 1100px) 92%, (max-width: 800px) 95%, 90%" alt="Image Profile" priority />
          </div>
          <h1 className={styles['profile-name']}>Shayna Anne</h1>
          <p className={styles['profile-email']}>shayna@anne.com</p>
        </div>
        <div className={styles['nav-wrapper']}>
          <NavMemberPage href='/member' logo={`/Logo/overview${selected === 'overview' ? '_active' : ''}_icon.svg`} title="Overview" selected={selected === 'overview'} />
          <NavMemberPage href='/member/transactions' logo={`/Logo/transactions${selected === 'transactions' ? '_active' : ''}_icon.svg`} title="Transactions" selected={selected === 'transactions'} />
          <NavMemberPage href='/member' logo={`/Logo/message${selected === 'message' ? '_active' : ''}_icon.svg`} title="Messages" selected={selected === 'message'} />
          <NavMemberPage href='/member' logo={`/Logo/card${selected === 'card' ? '_active' : ''}_icon.svg`} title="Card" selected={selected === 'card'} />
          <NavMemberPage href='/member' logo={`/Logo/rewards${selected === 'rewards' ? '_active' : ''}_icon.svg`} title="Rewards" selected={selected === 'rewards'} />
          <NavMemberPage href='/member' logo={`/Logo/setting${selected === 'setting' ? '_active' : ''}_icon.svg`} title="Settings" selected={selected === 'setting'} />
          <NavMemberPage href='/member' logo={`/Logo/logout${selected === 'logout' ? '_active' : ''}_icon.svg`} title="Log Out" selected={selected === 'logout'} />
        </div>
        <div className={styles['button-wrapper']}>
          <CustomButton width="100%" text="Top Up" height={45} color="#FFFFFF" navigation="/games"/>
        </div>
      </div>
      <div className={styles['container-mobile']} style={{width: `${showSidebar ? '290px' : '0px'}`, padding: `${showSidebar ? '30px' : '30px 0px'}`}} >
        <div className={styles['profile-wrapper']}>
          <div className={styles['profile-image-wrapper']}>
            <Image className={styles['profile-image']} src="/Banner/ri_profile.png" fill sizes="(max-width: 1100px) 92%, (max-width: 800px) 95%, 90%" alt="Image Profile" priority />
          </div>
          <h1 className={styles['profile-name']}>Shayna Anne</h1>
          <p className={styles['profile-email']}>shayna@anne.com</p>
        </div>
        <div className={styles['nav-wrapper']}>
          <NavMemberPage href='/member' logo={`/Logo/overview${selected === 'overview' ? '_active' : ''}_icon.svg`} title="Overview" selected={selected === 'overview'} />
          <NavMemberPage href='/member/transactions' logo={`/Logo/transactions${selected === 'transactions' ? '_active' : ''}_icon.svg`} title="Transactions" selected={selected === 'transactions'} />
          <NavMemberPage href='/member' logo={`/Logo/message${selected === 'message' ? '_active' : ''}_icon.svg`} title="Messages" selected={selected === 'message'} />
          <NavMemberPage href='/member' logo={`/Logo/card${selected === 'card' ? '_active' : ''}_icon.svg`} title="Card" selected={selected === 'card'} />
          <NavMemberPage href='/member' logo={`/Logo/rewards${selected === 'rewards' ? '_active' : ''}_icon.svg`} title="Rewards" selected={selected === 'rewards'} />
          <NavMemberPage href='/member' logo={`/Logo/setting${selected === 'setting' ? '_active' : ''}_icon.svg`} title="Settings" selected={selected === 'setting'} />
          <NavMemberPage href='/member' logo={`/Logo/logout${selected === 'logout' ? '_active' : ''}_icon.svg`} title="Log Out" selected={selected === 'logout'} />
        </div>
        <div className={styles['button-wrapper']}>
          <CustomButton width="100%" text="Top Up" height={45} color="#FFFFFF" navigation="/games"/>
        </div>
      </div>
    </>
  )
}
 