import styles from "@/styles/header.module.css"
import Image from "next/image";
import { useState } from "react";
import CustomButton from "../basic_components/Button";
import Nav from "../basic_components/Nav";

export default function Header() {
  const [navMobile, setNavMobile] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <Image src="/Logo/logo.svg" width={60} height={60} alt="brand-logo" />
        <div className={styles['nav-wrapper']}>
          <Nav />
          <CustomButton text="Sign In" width="120px" height={50} color="#0C145A" bgColor="#E7EAF5" />
        </div>
        <div onClick={() => setNavMobile(!navMobile)} className={styles['nav-mobile-wrapper']}>
          <div className={styles['nav-mobile-hamburger']}>
            <Image src="/Logo/hamburger_icon.svg" width={30} height={30} alt="nav-icon" />
          </div>
        </div>
      </div>
      <div className={styles['nav-mobile']} style={{height: `${navMobile ? '0px' : '350px'}`}}>
        <Nav />
        <div className={styles['nav-mobile-button']}>
          <CustomButton text="Sign In" width='100%' height={50} bgColor="#E7EAF5" color="#0C145A" />
        </div>
      </div>
    </>
  )
}
