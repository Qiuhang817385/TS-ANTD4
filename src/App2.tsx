import React, { useState } from 'react'
import { Breadcrumb, Button, List, Row } from 'antd'
import BreadcrumbRc from './component/Breadcrumb/Index'
import './App.css'
interface Props {}

const App2 = (props: Props) => {
  const breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  }

  const [path, setPath] = useState('/apps')
  const pathSnippets = path.split('/').filter((i) => i)

  const extraBreadcrumbItems: any[] = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item
        key={index}
        onClick={() => {
          setPath(url)
        }}
      >
        {breadcrumbNameMap[url]}
      </Breadcrumb.Item>
    )
  })
  console.log('extraBreadcrumbItems', extraBreadcrumbItems)

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">Home</Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  console.log('breadcrumbItems', breadcrumbItems)

  // 需要动态维护这么一个变量

  return (
    <div>
      <Row>
        {/* <Breadcrumb>{breadcrumbItems}</Breadcrumb> */}
        <BreadcrumbRc pathP={path} />
      </Row>
      <List>
        <List.Item>
          <Button
            type="link"
            onClick={() => {
              setPath('/apps')
            }}
          >
            return
          </Button>
        </List.Item>
        <List.Item>
          <Button
            type="link"
            onClick={() => {
              setPath('/apps/1')
            }}
          >
            租户1
          </Button>
        </List.Item>
        <List.Item>
          <Button
            type="link"
            onClick={() => {
              setPath('/apps/2')
            }}
          >
            租户2
          </Button>
        </List.Item>
      </List>
    </div>
  )
}

export default App2
