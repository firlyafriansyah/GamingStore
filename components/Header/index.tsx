import styles from "@/styles/header.module.css"
import Image from "next/image";
import CustomButton from "../basic_components/Button";
import Nav from "../basic_components/Nav";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src="/Logo/logo.svg" width={60} height={60} alt="brand-logo" />
      <div className={styles['nav-wrapper']}>
        <Nav />
        <CustomButton text="Sign In" width={120} height={50} color="#0C145A" bgColor="#E7EAF5" />
      </div>
    </div>
  )
}
