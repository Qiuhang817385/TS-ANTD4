import { Table } from 'antd'
import React, { ReactElement, useEffect, useState } from 'react'
import { getColumnSearchProps } from '../../util/Component'
import { uniq } from 'lodash'
import axios from 'axios'

interface Props {}

interface TenantSession {
  id: number
  dbUser?: string
  clientIp?: string
  dbName?: string
  command?: string
  time?: number
  status?: string
  info?: string
  proxyIp?: string
}

const Index: React.FC = ({}: Props): ReactElement => {
  const [dataSource, setDataSource] = useState<TenantSession[]>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])
  useEffect(() => {
    getUser().then((res) => {
      setDataSource(res?.data.data.contents)
    })
  }, [])

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      ellipsis: true,
    },
    {
      title: 'SQL',
      dataIndex: 'info',
      ellipsis: true,
    },

    {
      title: '来源',
      dataIndex: 'clientIp',
      width: 160,
      // 默认筛选值	string[]
      ...(true ? { defaultFilteredValue: ['201.227.209.238'] } : {}),
      ...getColumnSearchProps('clientIp', false),
    },
    {
      title: '用户',
      dataIndex: 'dbUser',
      // ellipsis: true,
      ...('财富事业部'
        ? { defaultFilteredValue: ['体验技术部', '财富事业部', '网商银行'] }
        : {}),
      ...getColumnSearchProps('dbUser', false),
    },
    {
      title: '数据库名',
      dataIndex: 'dbName',
      ellipsis: true,
    },
  ]

  const handleTableChange = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {
    console.log('pagination', pagination)
    console.log('filters', filters)
    console.log('sorter', sorter)
    console.log('extra', extra)
  }

  // 当前页的会话 ID 列表
  const currentPageSessionIds = dataSource.map((item) => item.id)
  return (
    <div>
      <Table
        columns={columns}
        rowKey={(record: TenantSession) => record?.id}
        rowSelection={{
          selectedRowKeys,
          onSelect: (record, selected, selectedRows) => {
            // 需要配合定义rowKey来使用，否则不生效。
            console.log('record', record)
            console.log('selectedRowKeys', selectedRowKeys)
            setSelectedRowKeys(
              selected
                ? [...selectedRowKeys, record.id as number]
                : selectedRowKeys.filter((item) => item !== record.id)
            )
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            console.log('object', selectedRowKeys)
            if (selected) {
              setSelectedRowKeys(
                uniq([...selectedRowKeys, ...currentPageSessionIds]) as number[]
              )
            } else {
              setSelectedRowKeys(
                (selectedRowKeys as number[]).filter(
                  (selectedRowKey) =>
                    !currentPageSessionIds.includes(selectedRowKey)
                )
              )
            }
          },
        }}
        dataSource={dataSource}
        // 用于后端筛选，如果是前端筛选，getColumnSearchProps需要传递true的参数。
        onChange={handleTableChange}
        // {...tableProps}
      />
    </div>
  )
}

async function getUser() {
  try {
    const response = await axios.get(
      'http://www.qiuhang.club:7300/mock/5ff73022cd2bd50579f71e2e/oneapi/listTenantSessions'
    )
    // const response = await axios.post('/demo2', {
    //   title: '123',
    //   content: '12323',
    // })
    // const response = await axios.get('/user')
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default Index
