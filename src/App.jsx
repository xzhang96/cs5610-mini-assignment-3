import React from 'react';
import Squares from './Squares';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            black_count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.black_count}</h1>
                <div className="grid-container">
                    <div className="grid-item"><Squares pos="upperleft" clickedFunc={(color) => this.calcCount(color)}></Squares></div>
                    <div className="grid-item"><Squares pos="upperright" clickedFunc={(color) => this.calcCount(color)}></Squares></div>
                    <div className="grid-item"><Squares pos="lowerleft" clickedFunc={(color) => this.calcCount(color)}></Squares></div>
                    <div className="grid-item"><Squares pos="lowerright" clickedFunc={(color) => this.calcCount(color)}></Squares></div>
                </div>
            </div>
        )
    }

    calcCount(color) {
        let update;
        if (color === "black") {
            update = this.state.black_count + 1;
        } else {
            update = this.state.black_count - 1;
        }
        this.setState({
            black_count: update
        })
    }
}