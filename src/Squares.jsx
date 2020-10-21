import React from 'react';
import './index.css';

export default class Squares extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: "white",
            position: props.pos
        }
    }

    render() {
        return (
            <div className="square" id={this.state.position} onClick={() => this.switchColor()}>
            </div>
        )
    }

    switchColor() {
        let c = document.getElementById(this.state.position);
        if (this.state.color === "white") {
            this.props.clickedFunc("black");
            c.style.backgroundColor = "black";
            this.setState({
                color: "black"
            })
        } else {
            this.props.clickedFunc("white");
            c.style.backgroundColor = "white";
            this.setState({
                color: "white"
            })
        }
    }
}