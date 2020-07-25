// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        const cordsArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(cordsArray)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Button</button>
            </div>
        )
    }
}
