import React from 'react'
import {Input} from 'antd'

class NativeEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value || ''
        }
    }
    render() {
        return (
            <Input
                value={this.state.value}
                onChange={(v) => {
                    this.setState({
                        value: v.target.value
                    })
                }}
                onPressEnter={() => {
                    this.props.onEnter(this.state.value)
                }}
            />
        )
    }
}

export default NativeEditor