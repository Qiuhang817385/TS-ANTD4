import React from 'react'
import { Row, Col, Card, List, Table } from 'antd'
interface Props {}

const PerformanceReport = (props: Props) => {
  const dataSource1: any = []
  const dataSource2: any = []
  const dataSource3: any = []
  const dataSource4: any = []

  const columns1: any = []
  const columns2: any = []
  const columns3: any = []
  const columns4: any = []

  const BasicData: any = []

  const SqlData = {
    title: 'SQL统计信息',
    key: 'sql_info',
    children: [
      {
        title: '按照响应时间排序的SQL',
        key: 'replay_time',
        data: [
          {
            title: '集群范围',
            obj: 'OB',
            column: [
              {
                title: '租户名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '响应时间',
                dataIndex: 'reply_time',
                key: 'reply_time',
              },
              {
                title: '执行次数',
                dataIndex: 'counter',
                key: 'counter',
              },
            ],
            data: [
              {
                title: '集群1',
                data: [
                  {
                    name: 'ob21',
                    reply_time: '100',
                    counter: '100',
                  },
                ],
              },
            ],
          },
          {
            title: '租户范围',
            obj: 'Tenant',
            column: [
              {
                title: '响应时间',
                dataIndex: 'reply_time',
                key: 'reply_time',
              },
              {
                title: '执行次数',
                dataIndex: 'counter',
                key: 'counter',
              },
            ],
            data: [
              {
                title: '租户1',
                key: 'tenant1',
                data: [
                  {
                    reply_time: '100',
                    counter: '100',
                  },
                ],
              },
              {
                title: '租户2',
                key: 'tenant2',
                data: [
                  {
                    reply_time: '200',
                    counter: '100',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: '按照CPU时间排序的SQL',
        key: 'cpu_time',
      },
      {
        title: '按照IO时间排序的SQL',
        key: 'io_time',
      },
      {
        title: '按照网络等待时间排序的SQL',
        key: 'await_time',
      },
    ],
  }

  const ReportEntity = [
    {
      title: '基本信息',
      key: 'basic_info',
      children: BasicData,
    },
    SqlData,
  ]

  return (
    <div>
      <Row>标题列表： {getTitleList(ReportEntity)}</Row>
      <Row>
        {/*
        这个应该是不需要的
          <a id={'sql_info'} href="">
          {' '}
          具体内容：
        </a> */}
        {ReportEntity.map((item: any) => {
          return (
            <>
              {getTitleList(item?.children)}
              <Row gutter={[16, 16]}>
                {(item?.children || [])?.map((child: any) => {
                  return (
                    <Col span={24}>
                      <Card
                        title={
                          <>
                            <a href="" id={child?.key}>
                              {child?.title}
                            </a>
                          </>
                        }
                      >
                        {(child?.data || [])?.map((item: any) => {
                          return (
                            <>
                              <Col span={24}>{item?.title}'范围'</Col>
                              {item?.obj === 'Tenant' && (
                                <>{getTitleList(item?.data)}</>
                              )}
                              <Col span={24}>
                                {getTableDataList(item?.data, item?.column)}
                              </Col>
                            </>
                          )
                        })}
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </>
          )
        })}
      </Row>
    </div>
  )
}

export interface getTitleListProps {}

const getTitleList = (Entity: any[]) => {
  return (
    <>
      <Col span={24}>
        <List bordered={true}>
          {(Entity || [])?.map((item: any) => {
            return (
              <List.Item>
                <Col span={24}>
                  <a href={`#${item?.key}`}>{item?.title}</a>
                </Col>
              </List.Item>
            )
          })}
        </List>
      </Col>
    </>
  )
}

const getTableDataList = (data: any[], column: any[]) => {
  return (
    <>
      {(data || [])?.map((obObj: any) => {
        return (
          <>
            <Col span={24}>
              <a href="" id={obObj?.key}>
                {obObj?.title}---
              </a>
            </Col>
            <Col span={24}>
              <Table
                pagination={false}
                dataSource={obObj?.data}
                columns={column || []}
              />
            </Col>
          </>
        )
      })}
    </>
  )
}

export default PerformanceReport
