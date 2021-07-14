import React, { ChangeEvent } from 'react'
import { Button, Input } from 'antd'
import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons'

interface FilterDropdownProps {
  setSelectedKeys: (value: string[]) => void
  selectedKeys: string[]
  confirm: () => void
  clearFilters: () => void
}

export const getColumnSearchProps = (
  dataIndex: string,
  frontEndSearch = true
) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }: FilterDropdownProps) => {
    return (
      <div style={{ padding: 8 }}>
        <Input
          value={selectedKeys && selectedKeys[0]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSelectedKeys(e?.target?.value ? [e?.target?.value] : [])
          }
          onPressEnter={() => {
            confirm()
          }}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />

        <span className="button-group">
          <Button
            type="primary"
            onClick={() => {
              confirm()
            }}
            size="small"
            style={{ width: 90 }}
          >
            搜索
          </Button>
          <Button
            onClick={() => {
              clearFilters()
            }}
            size="small"
            style={{ width: 90 }}
          >
            重置
          </Button>
        </span>
      </div>
    )
  },
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  ),

  // 前端搜索，需要定义 onFilter 函数
  ...(frontEndSearch
    ? {
        onFilter: (value: any, record: any) =>
          record[dataIndex] &&
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value && value.toLowerCase()),
      }
    : {}),
})
