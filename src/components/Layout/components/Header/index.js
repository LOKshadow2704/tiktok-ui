import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles.logo}>
                <img src={images.logo} alt="logo Tiktok" width="118px" height="50px" />
            </div>
            <div className={styles.search}>
                <input placeholder="Search" />
                {/* button clear */}
                <FontAwesomeIcon icon={faXmarkCircle} className={styles['delete']} />
                {/* button search */}
                <FontAwesomeIcon icon={faSpinner} className={styles['loading']} />
                <span></span>
                {/* button search */}
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={styles.account}>account</div>
        </header>
    );
}

export default Header;
