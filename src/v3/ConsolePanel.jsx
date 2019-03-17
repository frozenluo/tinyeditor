import React from 'react'
import {List} from 'antd'
import _ from 'lodash'

const {Item} = List

export default class ConsolePanel extends React.Component {
    render() {
        const {items} = this.props
        return (
            <List dataSource={items}
                bordered
                renderItem={item => {
                    return <Item>{item}</Item>
                }}
            />
        )
    }
}