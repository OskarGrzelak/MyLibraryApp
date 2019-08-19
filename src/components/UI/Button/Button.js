import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    const styles = [classes.Button];
    if (props.type === "alt") styles.push(classes.Alt)
    return (
        <div className={styles.join(' ')} onClick={props.clicked}>
            {props.children}
        </div>
    );
};

export default button;