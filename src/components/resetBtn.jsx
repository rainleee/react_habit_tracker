import React, { Component } from 'react';

class ResetBtn extends Component {

    handleAllReset = () => {
        this.props.onAllReset();
    }

    handleCountReset = () => {
        this.props.onCountReset();
    }

    render() {
        return (
            <div>
                <button className="habits-reset" onClick={this.handleAllReset}>Reset Habits</button>
                <button className="habits-reset" onClick={this.handleCountReset}>Reset Count</button>
            </div>
        )
    }
}

export default ResetBtn;