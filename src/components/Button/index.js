import React from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.scss';

function Button({ children, to, href, primary = false, onClick, outline = false, basic = false }) {
    let Component = 'button';
    const props = {};
    var classColor;
    const colors = {
        primary: primary === true ? (classColor = styles.primary) : (primary = false),
        outline: outline === true ? (classColor = styles.outline) : (outline = false),
        basic: basic === true ? (classColor = styles.basic) : (basic = false),
    };

    console.log(classColor);
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    return (
        <Component className={[styles.button, classColor].join(' ')} {...props}>
            {children}
        </Component>
    );
}

export default Button;
