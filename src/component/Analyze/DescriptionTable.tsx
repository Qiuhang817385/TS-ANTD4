import React, { useState, useEffect } from 'react'
import {
  Tooltip,
  Descriptions,
  Modal,
  Alert,
  Card,
  Col,
  Row,
  Table,
  Button,
  Space,
} from 'antd'

interface BasicInfoTableProps {}

const BasicInfoTable: React.FC<BasicInfoTableProps> = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'static',
    },
    {
      title: '开始',
      dataIndex: 'start',
    },
    {
      title: '结束',
      dataIndex: 'end',
    },
  ]
  const dataSource = [
    {
      static: '集群名称1',
      start: 'OBCluster',
      end: '',
    },
    {
      static: '创建时间',
      start: '2012 年 12 月 12 日 12:12:12',
      end: '',
    },
    {
      static: '集群版本',
      start: '2.7.2',
      end: '2.7.2',
    },
    {
      static: '集群角色',
      start: '主集群',
      end: '主集群',
    },
    {
      static: '主机数',
      start: '3',
      end: '3',
    },
    {
      static: '租户数',
      start: '4',
      end: '4',
    },
    {
      static: '最近一次合并开始时间',
      start: '2012 年 12 月 12 日 12:12:12',
      end: '2012 年 12 月 12 日 12:12:12',
    },
    {
      static: '最近一次合并结束时间',
      start: '2012 年 12 月 12 日 12:12:12',
      end: '2012 年 12 月 12 日 12:12:12',
    },
  ]

  return (
    <>
      <Row>
        <Col span={12}>
          <Table
            columns={columns || []}
            dataSource={dataSource || []}
            bordered
            size="small"
            pagination={false}
          />
        </Col>
      </Row>
    </>
  )
}

export default BasicInfoTable
