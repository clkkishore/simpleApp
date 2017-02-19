import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: '<input your text>'
        }
    }

    handleChange(event) {
        this.setState({inputText: event.target.value})
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="This is a going to be a text"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                    />
                <TextDisplay todoText={this.state.inputText}/>
            </div>
        )
    }
}

export default TextInput;