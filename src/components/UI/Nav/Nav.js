import React from 'react';

import classes from './Nav.module.css';

const nav = (props) => {
    const styles = [classes.Nav];
    styles.push(classes[props.type]);
    return (
        <div className={styles.join(' ')}>
            {props.children}
        </div>
    )
};

export default nav;