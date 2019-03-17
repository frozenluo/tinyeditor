import React from 'react'
import {Row, Col} from 'antd'

import ConsolePanel from './ConsolePanel'
import Editor from './Editor'

export default class Editor3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.console = {
            log: (text) => {
                const {items} = this.state
                const newItems = [text, ...items]
                this.setState({
                    items: newItems
                })
            },
            // error: (text) => {
            //     const {items} = this.state
            //     const newItems = [...items]
            //     newItems.push(<div className="error">{text}</div>)
            //     this.setState({
            //         items: newItems
            //     })
            // }
        }
    }
    render() {
        const {items} = this.state
        return (
            <Row>
                <Col span={10}>
                    <Editor
                        console={this.console}
                    />
                </Col>
                <Col span={10} offset={4}>
                    <ConsolePanel
                        items={items}
                    />
                </Col>
            </Row>
        )
    }
}