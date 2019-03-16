import randomColor from 'randomcolor';
import {Modal} from 'antd';
import React from 'react';
import ReactDOM from 'react-dom'
import "antd/dist/antd.css";

import NativeEditor from './v1/NativeEditor'

function execCommand(name, arg) {
    try {
        document.execCommand(name, true, arg);
    } catch (e) {
        const x = documnet.querySelector('.error-space');
        const errorNode = document.createElement('div');
        errorNode.innerHTML = e.toString();
        x.appendChild(errorNode);
    }
}

window.addEventListener('load', () => {
    const editor = document.querySelector('.editor');
    if (editor) {
        editor.style.color = 'red';
        editor.contentEditable = 'true';
        document.querySelector('#bold').addEventListener('click', () => {
            execCommand('bold');
        })
        document.querySelector('#backColor').addEventListener('click', () => {
            execCommand('backColor', randomColor());
        })
    }

    const editorV1 = document.querySelector('#editorV1');
    if (editorV1) {
        editorV1.addEventListener('click', () => {
            Modal.confirm({
                content: <NativeEditor value={editorV1.innerText} onEnter={(v) => {
                    editorV1.innerText = v
                }}/>
            })
        })
    }
});

ReactDOM.render(
    <div>hello</div>,
    document.getElementById('app')
);

module.hot.accept();