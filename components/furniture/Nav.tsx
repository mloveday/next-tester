import styles from './Nav.module.scss'

export const Nav: React.FC = () => <nav className={styles.nav}>
    <ul className={styles.list}>
        <li className={styles.item}>Foo</li>
        <li className={styles.item}>Bar</li>
        <li className={styles.item}>Baz</li>
    </ul>
</nav>;