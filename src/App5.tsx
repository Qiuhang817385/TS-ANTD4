import { Avatar, Button, List, Form, Table, Row, Col, Menu, Anchor } from 'antd'
import React, { useEffect, useState } from 'react'
// import { columns, data } from './data'
import { omit } from 'lodash';
import Analyze from './component/Analyze'
import { exportElement } from './util/index'
import Logon from './component/Analyze/Logon';
import TreeDemo from './component/TreeDemo';
import ReactTable from './component/ReactTable';
import Part from './component/Part';
import './App.css'
import './App3.scss'

const { Link } = Anchor

function App() {

  return (
    <>
      <Part />
    </>
  )
}

export default App
