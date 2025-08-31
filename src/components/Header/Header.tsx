import styles from './Header.module.scss';
import LogoIcon from '../../assets/icons/header/logo.svg?react';
import ThemeIcon from '../../assets/icons/header/invert-colors-black.svg?react';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <LogoIcon /> <span>React weather</span>
            </div>
            <div className={styles.w}>
                <ThemeIcon />
            </div>
        </header>
    );
};

export default Header;