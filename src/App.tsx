import { Avatar, Button, List } from 'antd'
import React from 'react'
import './App.css'
// import FormTsTest from './component/FormTsTest'
import HighTable from './component/HighTable'
import MyProgress from './component/MyProgress/index'
import ScrollTable from './component/scrollTable/Index'
import Layout from './component/Layout'
import Layout2 from './component/Layout2'
import CheckBox from './component/Checkbox';

interface ParameterInfo {
  id: number
  name: string
  version?: string
  type?: string
  allowedStringValues?: string
  maxValue?: string
  minValue?: string
  defaultValue?: string
  needRestart?: boolean
  description?: string
  explanation?: string
}

export function sortByString(a: any, b: any, property: string): boolean {
  return a[property] > b[property]
}
export function sortByString2(a: any, b: any, property: string): number {
  return a[property] >= b[property] ? 1 : 0
}

function App() {
  const startupParameterList: ParameterInfo[] = [
    {
      id: 0,
      name: 'A顾',
    },
    {
      id: 1,
      name: 'B顾',
    },
    {
      id: 2,
      name: 'D',
    },
    {
      id: 3,
      name: 'C',
    },
  ]

  const aaa = startupParameterList.sort((a, b) => sortByString2(a, b, 'name'))
  const bbb = startupParameterList.sort(
    (a: ParameterInfo, b: ParameterInfo) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    }
  )
  console.log('a', aaa)
  console.log('b', bbb)

  const handleExport = () => {
    // const styleSheet = document.styleSheets[0].cssRules || document.styleSheets[0].rules || window.CSSRule.STYLE_RULE;
    const styleContent = Array.from(document.styleSheets)
      .map((item) => {
        return Array.from(item?.cssRules || [])
          .map((ruleItem) => {
            return ruleItem?.cssText
          })
          .join('\n')
      })
      .join('\n')
    console.log('styleContent', styleContent)
  }

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]


  return (
    <>
      这是文本123

      <CheckBox />


      {/* <ScrollTable /> */}
      {/* 
      <List
        bordered={false}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      <Button onClick={handleExport}>按钮</Button> */}
      {/* <MyProgress
          showInfo={false}
          strokeColor="#6495fa"
          affix={`10%`}
          affixWidth={40}
          percent={10}
          mode="invert"
        /> */}
      {/* <FormTsTest /> */}
      {/* <HighTable /> */}
      {/* <Layout /> */}
      {/* <Layout2 /> */}
    </>
  )
}

export default App
