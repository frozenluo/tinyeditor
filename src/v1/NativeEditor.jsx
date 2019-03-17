import React from 'react'
import {Input, Icon} from 'antd'

class NativeEditor extends React.Component {
    render() {
        return (
            <Input
                addonBefore={<Icon type="edit"/>}
                value={this.props.value}
                onChange={(v) => {
                    const value = v.target.value
                    this.props.onEnter(value)
                }}
            />
        )
    }
}

export default NativeEditor