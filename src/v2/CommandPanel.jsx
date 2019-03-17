import React from 'react'
import { Button, Row } from 'antd'
import randomColor from 'randomcolor'

import './commandPanel.css'

function execCommand(name, arg) {
    try {
        document.execCommand(name, true, arg);
    } catch (e) {
        console.log(e)
    }
}

class CommandPanel extends React.Component {
    onBold() {
        execCommand('bold')
    }
    onBackgroundColor() {
        const rcolor = randomColor()
        execCommand('backColor', rcolor);
    }
    onCut() {
        execCommand('cut')
    }
    onPaste(e) {
        e.preventDefault()
        setTimeout(() => {
            execCommand('paste')
        })
    }
    setFont() {
        execCommand('fontName', 'Tahoma')
    }
    onUndo() {
        execCommand('undo')
    }
    onRedo() {
        execCommand('redo')
    }
    onJustifyCenter() {
        execCommand('justifyCenter')
    }
    onJustifyLeft() {
        execCommand('justifyLeft')
    }
    render() {
        return (
            <Row className="command-panel">
                <Button icon="undo" type="danger" onClick={this.onUndo}></Button>
                <Button icon="redo" type="primary" onClick={this.onRedo}></Button>
                <Button type="primary" onClick={this.onBold}>bold</Button>
                <Button type="primary" onClick={this.onBackgroundColor}>Set BackColor to random</Button>
                <Button type="primary" onClick={this.onCut}>cut</Button>
                <Button type="primary" onClick={this.onPaste}>past</Button>
                <Button type="primary">delete</Button>
                <Button type="primary" onClick={this.setFont}>Set Font to Tahoma</Button>
                <Button onClick={this.onJustifyLeft}>Justify to Left</Button>
                <Button onClick={this.onJustifyCenter}>Justify to Center</Button>
            </Row>
        )
    }
}

export default CommandPanel