import React, { useEffect, useRef, useState } from 'react'
import { Anchor, Button, Card, Col, Divider, Layout, Menu, Row, Table, Tree } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.scss';
import Logo from '../Analyze/Logo'
import style from './abc.module.scss'
const { DirectoryTree } = Tree
const { Link } = Anchor
const { Header, Sider, Content } = Layout;
interface Props {

}
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
    title: <Link href="#1" title="基本信息" />,
    key: '1',
    children: [
      {
        title: (
          <Link href="#2" title="集群基本信息" />
        ),
        key: '2',
        isLeaf: true
      },
      {
        title: (
          <Link href="#3" title="节点基本信息" />
        ),
        key: '3',
      },
      {
        title: (
          <Link href="#4" title="节点资源信息" />
        ),
        key: '4',
      },
      {
        title: (
          <Link
            href="#5"
            title="节点数据分区信息"
          />
        ),
        key: '5',
      },
    ],
  },
  {
    title: <Link href="#6" title="工作负载统计信息" />,
    key: '6',
    children: [
      {
        title: (
          <Link href="#7" title="集群基本信息" />
        ),
        key: '7',
      },
      {
        title: (
          <Link href="#8" title="OB_Tenant3" />
        ),
        key: '8',
      },
    ],
  },
  {
    title: <span className="9">节点统计信息</span>,
    key: '9',
  },
  {
    title: <span className="10">SQL 统计信息</span>,
    key: '10',
    children: [
      {
        title: <Link href="#11" title="按照响应时间排序的SQL" />,
        key: '11',
        children: [
          {
            title: (
              <Link href="#12" title="集群范围" />
            ),
            key: '12',
          },
          {
            title: (
              <Link
                href="#13"
                title="OB_Tenant1"
              />
            ),
            key: '13',
          },
          {
            title: (
              <Link
                href="#14"
                title="OB_Tenant2"
              />
            ),
            key: '14',
          },
          {
            title: (
              <Link
                href="#15"
                title="OB_Tenant3"
              />
            ),
            key: '15',
          },
        ],
      },
      {
        title: <span>按照 CPU 时间排序的SQL</span>,
        key: 'sql_info2',
        children: [
          {
            title: (
              <Link href="#16" title="集群范围" />
            ),
            key: '16',
          },
          {
            title: (
              <Link
                href="#17"
                title="OB_Tenant1"
              />
            ),
            key: '17',
          },
          {
            title: (
              <Link
                href="#18"
                title="OB_Tenant2"
              />
            ),
            key: '18',
          },
          {
            title: (
              <Link
                href="#19"
                title="OB_Tenant3"
              />
            ),
            key: '19',
          },
        ],
      },
    ],
  },
]


const Index = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  // const menuref = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)
  const contentref = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const menuref = document.getElementById('123');

    if (menuref && dragRef.current) {
      menuref.style.transition = 'all 0.2s ease 0.2s'
      dragRef.current.style.transition = 'all 0.2s ease 0.2s'
    }

    setShowMenu((showMenu) => {

      // if (dragRef.current) {
      //   dragRef.current.style.right = 0 + 'px'
      // }
      if (dragRef.current && menuref) {
        if (showMenu) {
          dragRef.current.style.transition = 'all 0.2s ease 0.2s'
          dragRef.current.style.left = 0 + 'px'
        } else {
          setTimeout(() => {
            if (dragRef.current) {
              dragRef.current.style.left = menuref.style.width
            }
          }, 0)
        }
      }
      return !showMenu
    })

    setCollapsed(!collapsed)
  };


  useEffect(() => {
    const menuref = document.getElementById('123');
    if (dragRef.current && menuref) {
      dragRef.current.onmousedown = function (eve: any) {
        if (menuref && dragRef.current) {
          menuref.style.transition = 'all 0s'
          dragRef.current.style.transition = 'all 0s'
          let x: number,
            t1: number,
            menuListWidth: number,
            off: number,
            contentRight: number
          // 点击的地方
          x = eve.clientX
          menuListWidth = menuref?.clientWidth
          // 在mid内部鼠标点击的点距离当前盒子左边的距离
          t1 = eve.clientX - dragRef.current?.offsetLeft
          off = dragRef.current?.offsetLeft - menuListWidth
          document.onmousemove = function (e: any) {
            let MIN = 200, MAX = 480
            let increment = e.clientX - x
            // let posiLeft = e.clientX - t1 - off
            let posiLeft1 = e.clientX - t1
            if (dragRef.current && menuref) {
              if (posiLeft1 >= MIN && posiLeft1 <= MAX) {
                dragRef.current.style.left = posiLeft1 + 'px'
                menuref.style.width = menuListWidth + increment + 'px'
                menuref.style.minWidth = menuListWidth + increment + 'px'
                menuref.style.maxWidth = menuListWidth + increment + 'px'
                menuref.style.flex = `0 0 ${menuListWidth + increment}px`
              }
            }
          }
          document.onmouseup = function (e: any) {
            document.onmousemove = null
            if (menuref) {
              menuref.style.transition = 'all 0.2s ease 0.2s'
            }
          }
        }
        return false
      }
    }
  }, [])


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
            分析范围：2021 年 1 月 28 日 10:00:00 ~ 2021 年 1 月 28 日 10:00:00
          </span>
        </div>
      </header>
      <div style={{ marginTop: 48 }}>
        <Layout style={{
          height: 'calc(100vh - 48px)',
          backgroundColor: 'pink',
          position: 'fixed',
          top: '50px'
        }}>
          <Sider
            // ref={menuref}
            id="123"
            style={{
              position: 'relative',
              backgroundColor: '#ddd'
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}>

            <div>
              <div>
                {/* 目录区域 */}
                <Anchor
                  // 两个需要进行调整一下
                  // 锚点点击之后距离顶部距离
                  targetOffset={10}
                  // 锚点距离顶部10px后左侧导航高亮
                  offsetTop={50}
                  getContainer={() => {
                    const div = document.getElementById('cont');
                    if (div) {
                      return div
                    }
                    return window
                  }}
                  // style={{
                  //   maxHeight: 'calc(100vh - 48px - 90px)',
                  // }}
                  affix={false}
                  showInkInFixed={false}
                >
                  <DirectoryTree
                    selectable={false}
                    icon={null}
                    defaultExpandAll
                    treeData={menuList}
                  />
                </Anchor>
              </div>
            </div>




            <div
              ref={dragRef}
              style={{
                position: 'absolute',
                right: 0,
                width: 2,
                height: '100%',
                backgroundColor: 'red',
                cursor: 'col-resize',
                transition: 'all 0.2s ease 0.2s',
                left: 200
              }}
            >
            </div>
          </Sider>
          <Layout
          // className={style.content}
          // style={{ overflowY: 'scroll' }}
          >
            {/*<Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: ,
            })} 
            </Header>*/}
            <Content
              className="site-layout-background"
              id="cont"
              // ref={contentref}
              style={{
                width: 1300,
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                overflowY: 'scroll'
              }}
            >
              <Button onClick={toggle}>点击</Button>

              <article
              // id="contentref"
              // ref={contentref} 
              //  为什么呢。奇怪
              // className={` ${style.right}`}
              >
                <div
                // className={` ${style.right}`}
                // ref={contentref}
                >
                  <Row gutter={[16, 16]}>
                    <Card style={{ width: '100%' }} title="基本信息" className="card-without-padding" bordered={false}>
                      <div className={style.contentsss}>
                        <Col span={24}>
                          <span
                            aria-label="anchor-link"
                            id="1"
                            //  /* css样式名字没有被编译，但是实际上html样式名字会被编译掉 */
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
                          <span
                            id="2"
                            className={style.data_link_title}
                          >
                            节点基本信息
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
                            id="3"
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
                            id="4"
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
                        id="5"
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
                      <span id="6" className={style.data_link_title}>
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
                        id="7"
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
                        id="8"
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
                        id="9"
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
              {/*  */}
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}

export default Index
