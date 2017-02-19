import React, {Component} from 'react'

class TextDisplay extends Component {
    render() {
        return <div>Displaying Text: {this.props.todoText} </div>
    }
}

export default TextDisplay;