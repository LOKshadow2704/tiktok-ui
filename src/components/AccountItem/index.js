import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c8a33132a7872a1913e5f0fa3b782be5~c5_300x300.webp?x-expires=1691906400&x-signature=LZZEvRLUKzl8ufNmMWrXEgAyXGE%3D" />
            <div className={styles.userInfo}>
                <span className={styles.userID}>loc270402270402</span>
                <span className={styles.blueCheck}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>{' '}
                <br />
                <span className={styles.UserName}>Lộc và 215146 người khác</span>
            </div>
        </div>
    );
}

export default AccountItem;
