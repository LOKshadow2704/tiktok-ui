import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { WrapperSearchResult } from '../SearchResult';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

function Header() {
    const [SearchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, []);
    return (
        <header className={styles['wrapper']}>
            <div className={styles.logo}>
                <img src={images.logo} alt="logo Tiktok" width="118px" height="50px" />
            </div>

            <Tippy
                interactive
                visible={SearchResult.length > 0}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className={styles.result}>
                        <WrapperSearchResult>
                            {/* <h6 className={styles.resultTitle}>Account</h6>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem /> */}
                        </WrapperSearchResult>
                    </div>
                )}
            >
                <div className={styles.search}>
                    <input placeholder="Search" />
                    {/* button delete */}
                    <FontAwesomeIcon icon={faXmarkCircle} className={styles['delete']} />
                    {/* button search */}
                    <FontAwesomeIcon icon={faSpinner} className={styles['loading']} />
                    <span></span>
                    {/* button search */}
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={styles.account}>
                <Button to="/upload" basic>
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp; Upload
                </Button>
                <Button to="/login" primary>
                    Log in
                </Button>
            </div>
        </header>
    );
}

export default Header;
