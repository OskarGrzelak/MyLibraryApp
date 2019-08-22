import React from 'react';

import classes from './NavButton.module.css';

const navButton = (props) => {
    return (
        <button className={classes.NavButton}>
            <object type="image/svg+xml" data={props.image} title={props.title} />
        </button>
    )
};

export default navButton;