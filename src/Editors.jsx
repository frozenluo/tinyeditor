import React from 'react'
import {Collapse, Col} from 'antd'

import Editor1 from './v1'
import CommandEditor from './v2/CommandEditor'
import Editor3 from './v3/MVCEditor'

export default class Editors extends React.Component {
    render() {
        return (
            <Collapse defaultActiveKey={['1','2','3']}>
                <Collapse.Panel header="Version 1 Editor" key="1">
                    <Editor1/>
                </Collapse.Panel>
                <Collapse.Panel header="Version 2 Editor" key="2">
                    <CommandEditor/>
                </Collapse.Panel>
                <Collapse.Panel header="Version 3 Editor" key="3">
                    <Editor3/>
                </Collapse.Panel>
            </Collapse>
        )
    }
}