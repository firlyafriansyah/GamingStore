import styles from '@/styles/components/basic/transactionsitem.module.css'

interface TransactionItemProps {
  name: any,
  result: any,
  mark?: boolean
}

export default function TransactionsItem(props: TransactionItemProps) {
  const { name, result, mark = false } = props

  return (
    <div className={styles.container}>
      <p className={styles['transactions-name']}>{name}</p>
      <p className={mark ? styles['transactions-mark'] : styles['transactions-result'] }>{result}</p>
    </div>
  )
}
