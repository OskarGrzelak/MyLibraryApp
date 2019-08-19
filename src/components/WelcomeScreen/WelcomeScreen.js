import React from 'react';
import Button from '../UI/Button/Button';

import classes from './WelcomeScreen.module.css';

const welcomeScreen = (props) => (
    <div className={classes.Screen}>
        <h1>
            <span>Manage</span>
            <span>Your</span>
            <span>Home</span>
            <span>Library</span>
        </h1>
        <Button clicked={props.login}>Sign in with Facebook</Button>
        <Button type="alt">Sign up for free</Button>
    </div>
);

export default welcomeScreen;