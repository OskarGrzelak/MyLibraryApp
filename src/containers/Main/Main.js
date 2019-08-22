import React, { Component } from 'react';
import Nav from '../../components/UI/Nav/Nav';
import NavButton from '../../components/UI/NavButton/NavButton';
import Carousel from '../../components/Carousel/Carousel';

import menu from '../../images/menu.svg';
import home from '../../images/home.svg';
import search from '../../images/search.svg';
import books from '../../images/books.svg';

import classes from './Main.module.css';


class Main extends Component {

    state = {
        position: 0
    }

    dragHandler = () => {
        console.log('dragging');
        const newPosition = this.state.position - 17.9;
        this.setState({position: newPosition});
    }

    render() {
        return (
            <div className={classes.Main}>
                <Nav type="top">
                    <NavButton image={menu} title="menu" />
                </Nav>
                <section /* onClick={this.dragHandler} */>
                    <h2>Currently reading</h2>
                    <Carousel>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Carousel>
                    <div className={classes.Info}>
                        <h3>Current Book Title</h3>
                        <h4>Book Author</h4>
                    </div>
                </section>
                <section>
                    <h2>Recently read</h2>
                    <Carousel>
                        <div></div>
                        <div></div>
                    </Carousel>
                    <div className={classes.Info}>
                        <h3>Current Book Title</h3>
                        <h4>Book Author</h4>
                    </div>
                </section>
                <Nav type="bottom">
                    <NavButton image={home} title="home" />
                    <NavButton image={search} title="search" />
                    <NavButton image={books} title="library" />
                </Nav>
            </div>
        )
    }
}

export default Main;