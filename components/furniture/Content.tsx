import styles from './Content.module.scss'

export const Content: React.FC = props => <main className={styles.main}>{props.children}</main>;