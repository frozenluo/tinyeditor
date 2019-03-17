import React from 'react'
import CommandPanel from './CommandPanel'

class CommandEditor extends React.Component {
    render() {
        return (
            <div className="panel">
                <h1>Version 2: Editor triggered by command</h1>
                <CommandPanel/>
                <div className="editor" contentEditable="true">
                    <div>
                        hello world
                    </div>
                    <div>
                        Microstratey
                    </div>
                    <div>
                        <img width="200" src="https://www.microstrategy.com/getmedia/3534c22d-a593-4ecc-bbec-c8c6ac3deab5/logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommandEditor