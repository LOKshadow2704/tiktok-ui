import React from 'react';
import Header from '../components/Header';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
