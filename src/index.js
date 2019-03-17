import React from 'react';
import ReactDOM from 'react-dom'
import "antd/dist/antd.css";

import Editors from './Editors'

ReactDOM.render(
    <Editors/>,
    document.getElementById('app')
);

module.hot.accept();