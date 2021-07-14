import { Divider, Button, Col, Collapse, Row, Table, Tree, Anchor, Card } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
// import Logo from './Logo'
import Logo from './Logon'

import DescriptionTable from './DescriptionTable'
import DemoTable from './DemoTable';
import style from './index.module.scss'

interface Props {
  startTime?: string
  endTime?: string
  isExport?: boolean
}

const { Panel } = Collapse
const { Link } = Anchor

const Index = ({
  startTime = '2021 年 1 月 28 日 10:00:00',
  endTime = '2021 年 1 月 30 日 10:00:00',
  isExport = false,
}: Props) => {
  const columns28 = [
    {
      title: '模块',
      dataIndex: 'port_address',
    },
    {
      title: '模块类型',
      dataIndex: 'tenant_name',
    },
    {
      title: '持有大小',
      dataIndex: 'tenant_na2me',
    },
    {
      title: '正在使用大小',
      dataIndex: 'teasdnant_na2me',
    },
    {
      title: '块数',
      dataIndex: 'tesasdnant_na2me',
    },
    {
      title: '平均大小',
      dataIndex: 'teasdn3ant_na2me',
    },
  ]

  const menuList = [
    // className={}
    {
      title: <span className="ant-collapse-header-self-define">基本信息</span>,
      key: '1basic_info',
      children: [
        {
          title: (
            <Link href="#components-anchor-demo-basic2" title="集群基本信息" />
          ),
          key: 'basi123c_info1',
        },
        {
          title: (
            <Link href="#components-anchor-demo-basic3" title="节点基本信息" />
          ),
          key: 'basic54_info2',
        },
        {
          title: (
            <Link href="#components-anchor-demo-basic4" title="节点资源信息" />
          ),
          key: 'basic_in43fo3',
        },
        {
          title: (
            <Link
              href="#components-anchor-demo-basic5"
              title="节点数据分区信息"
            />
          ),
          key: 'basic_in43fo4',
        },
      ],
    },
    {
      title: <span className="ant-collapse-header-self-define">工作负载统计信息</span>,
      key: 'basic_work_i546nfo',
      children: [
        {
          title: (
            <Link href="#components-anchor-demo-basic7" title="集群基本信息" />
          ),
          key: 'basic_wor756k_info1',
        },
        {
          title: (
            <Link href="#components-anchor-demo-basic30" title="OB_Tenant3" />
          ),
          key: 'basic_worrfdiok_info41',
        },
      ],
    },
    {
      title: <span className="ant-collapse-header-self-define">节点统计信息</span>,
      key: 'noqde_info',
    },
    {
      title: <span className="ant-collapse-header-self-define">SQL 统计信息</span>,
      key: 'sql_qqqinfo',
      children: [
        {
          title: <span className="ant-collapse-header-self-define">按照响应时间排序的SQL</span>,
          key: 'sql_weeinfo1',
          children: [
            {
              title: (
                <Link href="#components-anchor-demo-basic14" title="集群范围" />
              ),
              key: 'sql_iqwenfo_time1',
            },
            {
              title: (
                <Link
                  href="#components-anchor-demo-basic15"
                  title="OB_Tenant1"
                />
              ),
              key: 'sql_intytufo_time2',
            },
            {
              title: (
                <Link
                  href="#components-anchor-demo-basic16"
                  title="OB_Tenant2"
                />
              ),
              key: 'sql_infgho_time3',
            },
            {
              title: (
                <Link
                  href="#components-anchor-demo-basic17"
                  title="OB_Tenant3"
                />
              ),
              key: 'sql_info_txcvime4',
            },
          ],
        },
        {
          title: <span className="ant-collapse-header-self-define">按照 CPU 时间排序的SQL</span>,
          key: 'sql_info2',
          children: [
            {
              title: (
                <Link href="#components-anchor-demo-basic19" title="集群范围" />
              ),
              key: 'sql_info_cpu1',
            },
            {
              title: (
                <Link
                  href="#components-anchor-demo-basic20"
                  title="OB_Tenant1"
                />
              ),
              key: 'sql_info_cpu2',
            },
            {
              title: (
                <Link
                  href="#components-anchor-demo-basic21"
                  title="OB_Tenant2"
                />
              ),
              key: 'sql_info_cpu3',
            },
            {
              title: (
                <Link
                  href="#components-anchor-demo-basic22"
                  title="OB_Tenant3"
                />
              ),
              key: 'sql_info_cpu4',
            },
          ],
        },
      ],
    },
  ]

  const menuref = useRef<HTMLDivElement>(null)
  const contentref = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    if (dragRef.current && menuref.current) {
      dragRef.current.onmousedown = function (eve: any) {
        if (menuref.current && dragRef.current && contentref.current) {
          menuref.current.style.transition = 'width,min-width 0s'
          dragRef.current.style.transition = 'left 0s'
          contentref.current.style.transition = 'left 0s'
          let x: number,
            t1: number,
            menuListWidth: number,
            off: number,
            contentRight: number
          // 点击的地方
          x = eve.clientX
          menuListWidth = menuref.current?.clientWidth
          contentRight = contentref.current?.offsetLeft
          // 在mid内部鼠标点击的点距离当前盒子左边的距离
          t1 = eve.clientX - dragRef.current?.offsetLeft
          off = dragRef.current?.offsetLeft - menuListWidth
          document.onmousemove = function (e: any) {
            let MIN = 200, MAX = 480
            let increment = e.clientX - x
            // let posiLeft = e.clientX - t1 - off
            let posiLeft1 = e.clientX - t1
            if (dragRef.current && menuref.current && contentref.current) {
              if (posiLeft1 >= MIN && posiLeft1 <= MAX) {
                dragRef.current.style.left = posiLeft1 + 'px'
                menuref.current.style.width = menuListWidth + increment + 'px'
                menuref.current.style.minWidth =
                  menuListWidth + increment + 'px'
                contentref.current.style.left =
                  contentRight + increment + 'px'
              }
            }
          }
          document.onmouseup = function (e: any) {
            document.onmousemove = null
            if (menuref.current && contentref.current) {
              menuref.current.style.transition = 'width,min-width 0.3s'
              contentref.current.style.transition = 'left 0.3s'
            }
          }
        }
        return false
      }
    }
  }, [])

  const getMenu = (menu: any[]): any => {
    return menu.map((child: any) => {
      if (child.children) {
        return (
          // 默认全部展开
          <Collapse ghost={true} defaultActiveKey={child.key}>
            <Panel key={child.key} header={<>{child.title || ''}</>}>
              {getMenu(child.children)}
            </Panel>
          </Collapse>
        )
      }
      return (
        <Panel
          className={style.nav}
          showArrow={false}
          key={child.title}
          header={<>{child.title || '1'}</>}
        />
      )
    })
  }

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.header_content_logo}>
          <Logo width={125.7} height={16} />
          <Divider type="vertical" className={style.header_divider} />
          <h1>ob2342 的性能报告</h1>
        </div>
        <div className={style.header_content_title}>
          <span>生成时间：2021 年 1 月 28 日 10:00:00</span>
          <span>
            分析范围：{startTime || ''} ~ {endTime || ''}
          </span>
        </div>
      </header>
      <div className={style.content}>
        {/* 左侧导航区域 */}
        <nav id="menuref" ref={menuref} className={` ${style.left}`}>
          <Button
            id="toggleMenuShow"
            className={style.toggleMenuShow}
            onClick={() => {
              if (menuref.current && contentref.current && dragRef.current) {
                // 需要通过样式来控制，否则导出之后不兼容原生js
                // eslint-disable-next-line
                menuref.current.style.transition = 'all 0.3s'
                dragRef.current.style.transition = 'all 0.3s'
                contentref.current.style.transition = 'left 0.3s'
                menuref.current.classList.toggle(`showMenu`)
                contentref.current.classList.toggle(`showContent`)
                if (dragRef.current) {
                  dragRef.current.style.right = 0 + 'px'
                }
                setShowMenu((showMenu) => {
                  if (dragRef.current && menuref.current) {
                    if (showMenu) {
                      dragRef.current.style.left = 0 + 'px'
                    } else {
                      dragRef.current.style.left = menuref.current.style.width
                    }
                  }
                  // if (menuref.current && contentref.current) {
                  //   menuref.current.style.transition = 'width 0s'
                  //   contentref.current.style.transition = 'left 0s'
                  // }
                  return !showMenu
                })
              }
            }}
          >
            <RightOutlined style={{ fontSize: 10 }} />
          </Button>
          {/* 整体的菜单内容区域 */}
          <div className={style.directory}>目录</div>
          <div className={style.menuList_content}>
            <div className={style.menuList}>
              {/* 目录区域 */}
              <Anchor
                // 两个需要进行调整一下
                // 锚点点击之后距离顶部距离
                targetOffset={10}
                // 锚点距离顶部10px后左侧导航高亮
                offsetTop={50}
                getContainer={() => {
                  if (contentref.current) {
                    return contentref.current
                  }
                  return window
                }}
                style={{
                  maxHeight: 'calc(100vh - 48px - 90px)',
                }}
                affix={false}
                showInkInFixed={false}
              >
                {/* <Tree
                  defaultExpandAll={true}
                  treeData={menuList}
                /> */}
                {/* {getMenu(menuList)} */}
              </Anchor>
            </div>
          </div>
          <div id="dragRef" ref={dragRef} className={style.dragRight}></div>
        </nav>
        {/* 右侧内容区域 */}
        {/*  css样式名字没有被编译，但是实际上html样式名字会被编译掉 */}
        <article id="contentref" ref={contentref} className={` ${style.right}`}>
          <div className={style.right_content}>

            <Row gutter={[16, 16]}>
              <Card style={{ width: '100%' }} title="基本信息" className="card-without-padding" bordered={false}>
                <div className={style.contentsss}>
                  <Col span={24}>
                    <span
                      aria-label="anchor-link"
                      id="components-anchor-demo-basic2"
                      //  /* css样式名字没有被编译，但是实际上html样式名字会被编译掉 */
                      className={style.data_link_title}
                    >
                      集群基本信息
                    </span>
                  </Col>
                  <Col span={24}>
                    <DescriptionTable />
                  </Col>
                  <Col span={24}>
                    <span
                      id="components-anchor-demo-basic3"
                      className={style.data_link_title}
                    >
                      节点基本信息
                    </span>
                  </Col>
                  <Col span={24}>
                    <DemoTable />
                  </Col>
                  <Col span={24}>
                    <span
                      id="components-anchor-demo-basic4"
                      className={style.data_link_title}
                    >
                      节点资源信息
                    </span>
                  </Col>
                  <Col span={24}>
                    <Table
                      columns={columns28 || []}
                      dataSource={[]}
                      bordered
                      size="small"
                    />
                  </Col>
                  <Col span={24}>
                    <span
                      id="components-anchor-demo-basic5"
                      className={style.data_link_title}
                    >
                      节点数据分区信息
                    </span>
                  </Col>
                  <Col span={24}>
                    <Table
                      columns={columns28 || []}
                      dataSource={[]}
                      bordered
                      size="small"
                    />
                  </Col>
                </div>
              </Card>
              <Col span={24}>
                <span
                  id="components-anchor-demo-basic7"
                  className={style.data_link_title}
                >
                  集群基本信息
                </span>
              </Col>
              <Col span={24}>
                <Table
                  columns={columns28 || []}
                  dataSource={[]}
                  bordered
                  size="small"
                />
              </Col>
              <Col span={24}>
                <span id="OB_Tenant3" className={style.data_link_title}>
                  OB_Tenant3
                </span>
              </Col>
              <Col span={24}>
                <Table
                  columns={columns28 || []}
                  dataSource={[]}
                  bordered
                  size="small"
                />
              </Col>
              <Col span={24}>
                <span
                  id="components-anchor-demo-basic11"
                  className={style.data_link_title}
                >
                  节点统计信息
                </span>
              </Col>
              <Col span={24}>
                <Table
                  columns={columns28 || []}
                  dataSource={[]}
                  bordered
                  size="small"
                />
              </Col>
              <Col span={24}>
                <span
                  id="components-anchor-demo-basic14"
                  className={style.data_link_title}
                >
                  集群范围
                </span>
              </Col>
              <Col span={24}>
                <Table
                  columns={columns28 || []}
                  dataSource={[]}
                  bordered
                  size="small"
                />
              </Col>
              <Col span={24}>
                <span
                  id="components-anchor-demo-basic15"
                  className={style.data_link_title}
                >
                  OB_Tenant1
                </span>
              </Col>
              <Col span={24}>
                <Table
                  columns={columns28 || []}
                  dataSource={[]}
                  bordered
                  size="small"
                />
              </Col>
            </Row>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Index
