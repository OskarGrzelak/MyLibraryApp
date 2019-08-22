import React, { Component } from 'react';

import classes from './Carousel.module.css';

class Carousel extends Component {
    state = {
        touched: false,
        position: 0,
        touchStartX: null,
        touchEndX: null
    }

    startHandler = (clientX) => {
        this.setState({touched: true, touchStartX: clientX});
    }

    moveHandler = (clientX) => {
        const deltaX = (clientX - this.state.touchStartX) * 0.3;
        const newPosition = this.state.position + deltaX;
        if (newPosition <= 0 && newPosition >= -((this.props.children.length - 1) * 179)) this.setState({position: newPosition});
    }

    endHandler = () => {
        this.setState({touched: false});
    }

    touchStartHandler = (event) => {
        /* event.preventDefault(); */
        this.startHandler(event.targetTouches[0].clientX);
    }

    touchMoveHandler = (event) => {
        if (this.state.touched) {
            this.moveHandler(event.targetTouches[0].clientX);
        }
    }

    touchEndHandler = () => {
        this.endHandler();
    }

    mouseDownHandler = (event) => {
        event.preventDefault();
        this.startHandler(event.clientX);
    }

    mouseMoveHandler = (event) => {
        if (this.state.touched) {
            this.moveHandler(event.clientX);
        }
    }

    mouseUpHandler = () => {
        this.endHandler();
    }

    render() {
        console.log(this.props.children)
        return (
            <div className={classes.Carousel} 
                onTouchStart={this.touchStartHandler}
                onTouchMove={this.touchMoveHandler}
                onTouchEnd={this.touchEndHandler}
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}
                onMouseMove={this.mouseMoveHandler}
                style={{transform: `translateX(${this.state.position}px)`}}>
                {this.props.children}
            </div>
        );
    }
}

export default Carousel;