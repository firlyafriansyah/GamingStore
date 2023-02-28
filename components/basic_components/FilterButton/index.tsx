import styles from '@/styles/components/basic/filterbutton.module.css'

interface FilterButtonProps {
  selected?: boolean,
  text: string,
  onclick: any
}

export default function FilterButton(props: FilterButtonProps) {
  const { selected = false, text, onclick } = props
  return (
    <div className={selected ? styles['container-active'] : styles.container} onClick={onclick}>
      <p className={selected ? styles['text-active'] : styles.text}>{text}</p>
    </div>
  )
}
