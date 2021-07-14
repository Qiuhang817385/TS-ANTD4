import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, List, Menu, Row } from 'antd'
import { isEqual, uniq, uniqWith } from 'lodash'
import { dataSource, dataProps } from './data'
interface Props {
  pathP?: any
}

const Index = (props: Props) => {
  // 转换成树形的结构
  const convertData = (dataSource: dataProps[]) => {
    return Array.from(new Set(dataSource.map((item) => item.clusterName))).map(
      (p) => {
        return {
          parent: p,
          clusterPathName: '',
          children: dataSource.filter((item) => {
            if (item.clusterName === p) {
              return item
            }
            return
          }),
        }
      }
    )
  }

  const convertData2 = (dataSource: dataProps[]) => {
    return uniqWith(
      dataSource.map((item) => ({
        parentName: item.clusterName,
        clusterPathName: item.clusterPathName,
      })),
      isEqual
    ).map((p) => {
      return {
        parent: p.parentName,
        clusterPathName: p.clusterPathName,
        children: dataSource.filter((item) => {
          if (item.clusterName === p.parentName) {
            return item
          }
          return
        }),
      }
    })
  }

  console.log('convertData2------------', convertData2(dataSource))

  const newsada = () => {
    return Array.from(new Set(dataSource.map((item) => item.clusterName))).map(
      (pName) => {
        return dataSource.map((item) => {
          if (item.clusterName === pName) {
            return {
              parent: pName,
              clusterPathName: item.clusterPathName,
              children: dataSource.filter((item) => {
                if (item.clusterName === pName) {
                  return item
                }
                return
              }),
            }
          }
          return
        })
      }
    )
  }

  console.log('newsada', newsada())

  const treeDataSource = convertData(dataSource)
  console.log('treeDataSource', treeDataSource)

  console.log('dataSource', dataSource)

  const breadcrumbNameMap2 = convertData2(dataSource).map((item) => ({
    [item.clusterPathName]: item.parent,
  }))

  console.log('breadcrumbNameMap2', breadcrumbNameMap2)

  const { pathP } = props
  const [path, setPath] = useState('')

  // 实际上应该是从路由当中拿到hash值的
  // 不过要动态改变？？
  useEffect(() => {
    setPath(pathP)
  }, [pathP])

  console.log('realPath', pathP)

  const breadcrumbNameMap = {
    // '/apps': 'Application List',
    // // 集群1
    // '/apps/1': '集群1',
    // // 集群2
    // '/apps/2': '集群2',
    // '/apps/1/detail': '集群1的Detail',
    // '/apps/2/detail': '集群2的Detail',
  }

  const extraBread = () => {
    return (
      <Menu>
        {treeDataSource.map((item) => {
          return <Menu.Item key={item.parent}>{item.parent}</Menu.Item>
        })}
      </Menu>
    )
  }

  const pathSnippets = path?.split('/')?.filter((i) => i) || []

  // const extraBreadcrumbItems: any[] = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
  //   return (
  //     <Breadcrumb.Item
  //       key={index}
  //       onClick={() => {
  //         setPath(url)
  //       }}
  //     >
  //       {breadcrumbNameMap[url]}
  //     </Breadcrumb.Item>
  //   )
  // })
  // console.log('extraBreadcrumbItems', extraBreadcrumbItems)

  const extraBreadcrumbItems: any[] = treeDataSource.map((item) => {
    if (item.children) {
      return (
        <Breadcrumb.Item
          overlay={extraBread}
          key={item.parent}
          onClick={() => {}}
        >
          {item.parent}
        </Breadcrumb.Item>
      )
    }
    return null
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">Home</Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  return (
    <div>
      <Row>
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </Row>
    </div>
  )
}

export default Index
