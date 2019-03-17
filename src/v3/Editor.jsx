import React from 'react'

// function consoleWrapper(func, logFunc) {
//     return () => {
//         logFunc('')
//     }
// }

function addCharacter(srcText, added, position, log) {
    const s = srcText.split('')
    const {start, end} = position
    log(`[Command]: add character [${added}] at position: start=[${start}], end=[${end}]`)
    s.splice(start, end-start, added)
    return {
        text: s.join(''),
        position: {
            start: start + added.length,
            end: start + added.length
        }
    }
}

function setRangeByPosition({
    start,
    end,
    // collapsed,
    focusNode,
    log
}) {
    const selection = window.getSelection()
    const newRange = new Range()
    newRange.setStart(focusNode, start)
    newRange.setEnd(focusNode, end)
    selection.removeAllRanges()
    selection.addRange(newRange)
    log(`[After Command]: reset range at dom, start=[${start}] end=[${end}]`)
}

function getPosition(log) { 
    const selection = window.getSelection()
    const {
        rangeCount,
        focusNode
    } = selection
    if (rangeCount === 1) {
        const range = selection.getRangeAt(0)
        const {
            startOffset,
            endOffset,
            collapsed
        } = range
        log(`[Before Command]: save range in mem, collpased=[${collapsed}] start=[${startOffset}] end=[${endOffset}]`)
        return {
            collapsed,
            start: startOffset,
            end: endOffset,
            focusNode
        }
    }
}

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'helloworld'
        }
        this.onInput = this.onInput.bind(this)
    }
    onInput(e) {
        const {console} = this.props
        const {log} = console
        //1. Get range from selection
        const position = getPosition(log)
        if (!position.collapsed) {
            // remove selection text
        }

        //2. Add characters
        const {data} = e
        e.preventDefault()
        // e.stopPropagation()
        // return false
        const {text} = this.state
        const {
            text: newText,
            position: newPos
        } = addCharacter(text, data, position, log)
        this.setState({
            text: newText
        })

        //3. recover range
        requestAnimationFrame(() => {
            setRangeByPosition({...newPos, focusNode: position.focusNode, log})
        })
    }
    render() {
        const {text} = this.state
        return (
            <div id="aeditor" contentEditable="true" className="editor" onBeforeInput={this.onInput}>
                {text}
            </div>
        )
    }
}