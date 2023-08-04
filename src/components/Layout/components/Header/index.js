import styles from './Header.module.scss';
function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.search}>search</div>
            <div className={styles.account}>account</div>
        </header>
    );
}

export default Header;
