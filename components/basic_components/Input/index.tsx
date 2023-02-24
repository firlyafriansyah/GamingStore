import styles from '@/styles/components/basic/input.module.css'

interface InputCustomProps {
  id: string,
  type: string,
  name: string,
  label: string,
  placeholder: string
}

export default function CustomInput(props: InputCustomProps) {
  const { id, type, name, label, placeholder } = props
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} className={styles.input}  />
    </>
  )
}
