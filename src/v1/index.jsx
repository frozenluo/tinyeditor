import React from 'react'
import NativeEditor from './NativeEditor'

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 'hello world',
            b: 'microstrategy',
            c: `I used to rule the world
            Seas would rise when I gave the word
            Now in the morning, I sleep alone
            Sweep the streets I used to own`,
            d: `I used to roll the dice
            Feel the fear in my enemy's eyes
            Listen as the crowd would sing
            Now the old king is dead! Long live the king!`,
            onEdit: false
        }
    }
    render() {
        const {onEdit, editKey} = this.state
        return (
            <div>
                <div onClick={() => {this.setState({onEdit: true, editKey: 'a'})}}>
                    {this.state.a}
                </div>
                <div onClick={() => {this.setState({onEdit: true, editKey: 'b'})}}>
                    {this.state.b}
                </div>
                <div onClick={() => {this.setState({onEdit: true, editKey: 'c'})}}>
                    {this.state.c}
                </div>
                <div onClick={() => {this.setState({onEdit: true, editKey: 'd'})}}>
                    {this.state.d}
                </div>
                {
                    onEdit &&
                    <NativeEditor
                        value={this.state[editKey]}
                        onEnter={(text) => {
                            const newState = {}
                            newState[editKey] = text
                            this.setState(newState)
                        }}
                    />
                }
                
            </div>
        )
    }
}