import React from 'react';
import styles from './SearchResult.module.scss';

function WrapperSearchResult({ children }) {
    return <div className={styles.SearchResult}>{children}</div>;
}
export default WrapperSearchResult;
