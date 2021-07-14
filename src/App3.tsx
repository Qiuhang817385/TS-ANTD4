import { Avatar, Button, List, Form, Table, Row, Col, Menu } from 'antd'
import React, { useState } from 'react'
import PerformanceReport from './component/PerformanceReport/index2'
// import { columns, data } from './data'
import './App.css'
import './App3.scss'

const data = [
  {
    key: '0',
    name: 'John Brown',
    age: 22,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'John Brown',
    age: 22,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 3,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 342,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 62,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
// 空数组调用reduce会报错
// 需要设置一个初始值，为一个空数组
//  合并数组单元格
const createNewArr = (data: any, key?: string) => {
  // 根据数组的   某个字段   进行数组去重，并且只保留了 data 的 name 字段。
  const ini = data.reduce((result: any, item: any) => {
    //首先将name字段作为新数组result取出
    // if (result.indexOf(item.name) < 0) {
    if (!result.includes(item.name)) {
      // return result.concat(item.name)
      result.push(item.name)
    }
    return result
  }, [])

  return ini.reduce((result: any, name: any) => {
    //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
    const children = data?.filter((item: any) => item.name === name) || []
    result = result.concat(
      children.map((item: any, index: any) => ({
        ...item,
        rowSpan: index === 0 ? children.length : 0, //将第一行数据添加rowSpan字段
      }))
    )
    return result
  }, [])
}

const columns = [
  {
    title: '分类名称',
    dataIndex: 'name',
    key: 'name',
    render(_: any, row: any) {
      // console.log('_,row', _, row)
      return {
        children: row.name,
        props: {
          rowSpan: row.rowSpan,
        },
      }
    },
  },
  {
    title: '分类名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '分类名称',
    dataIndex: 'address',
    key: 'address',
  },
]

function App() {
  const [collapsed, setCollapsed] = useState(false)
  console.log('createNewArr(daya)', createNewArr(data))
  return (
    <>
      <Row>
        <Button
          type="primary"
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          style={{ marginBottom: 16 }}
        >
          点击2
        </Button>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={createNewArr(data)} />
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} bordered />
    </>
  )
}

export default App
