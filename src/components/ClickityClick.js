import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log('setState callback', this.state.hasBeenClicked))
        console.log('after setState', this.state.hasBeenClicked)
    }

    render() {
        return (
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not '}
                    been clicked!
                    <button onClick={this.handleClick}>Click me!</button>
                </p>
            </div>
        )
    }
}

export default ClickityClick
