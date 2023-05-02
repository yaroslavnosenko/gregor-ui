import { Text, Link } from '@geist-ui/core'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Text margin={0} h3>
        <Link href="#">Gregor</Link>
      </Text>
    </header>
  )
}
