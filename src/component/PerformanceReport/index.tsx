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
      <Row>
        标题列表：{' '}
        {/* item
          {
            title: '基本信息',
            key: 'basic_info',
            children: BasicData,
          }, */}
        {/* {ReportEntity.map((item: any) => {
          return (
            <Col span={24}>
              <a href={`#${item?.key}`}>{item?.title}</a>
            </Col>
          )
        })} */}
        {getTitleList(ReportEntity)}
      </Row>
      <Row>
        具体内容：
        {ReportEntity.map((item: any) => {
          return (
            <>
              {/* {(item?.children || [])?.map((child: any) => {
                return (
                  <Col span={24}>
                    <a href={`#${child?.key}`}>{child?.title}</a>
                  </Col>
                )
              })} */}
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
                                // (item?.data || []).map((c: any) => {
                                //   return (
                                //     <Col span={24}>
                                //       <a href={`#${c?.key}`}>{c?.title}</a>
                                //     </Col>
                                //   )
                                // })
                                <>{getTitleList(item?.data)}</>
                              )}
                              <Col span={24}>
                                {(item?.data || [])?.map((obObj: any) => {
                                  return (
                                    <>
                                      <Col span={24}>
                                        <a href="" id={obObj?.key}>
                                          {obObj?.title}
                                        </a>
                                      </Col>
                                      <Col span={24}>
                                        <Table
                                          pagination={false}
                                          dataSource={obObj?.data}
                                          columns={item?.column || []}
                                        />
                                      </Col>
                                    </>
                                  )
                                })}
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
      {/* <Table dataSource={dataSource1} columns={columns1} />
      <Table dataSource={dataSource2} columns={columns2} />
      <Table dataSource={dataSource3} columns={columns3} />
      <Table dataSource={dataSource4} columns={columns4} /> */}
    </div>
  )
}

export interface getTitleListProps {}

const getTitleList = (Entity: any[]) => {
  console.log('123')
  return (
    <>
      {(Entity || [])?.map((item: any) => {
        return (
          <Col span={24}>
            <a href={`#${item?.key}`}>{item?.title}</a>
          </Col>
        )
      })}
    </>
  )
}

export default PerformanceReport
