import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useMemo } from 'react'
import { ColumnProps } from 'antd/lib/table'
import { groupBy, toNumber } from 'lodash'
import axios from 'axios'

interface Props {}

type QueryValues = {
  startTime?: string
  endTime?: string
  rangeKey?: string
  serverId?: string
  inner?: string
  sqlText?: string
  searchAttr?: string
  searchOp?: string
  searchVal?: string
  fields?: string[]
  current?: string
  pageSize?: string
  collapsed?: boolean
}

const Index = (props: Props) => {
  const [topSqls, setTopSqls] = useState<API.SqlAuditStatDetail[]>([])
  const [actives, setActives] = useState<API.SqlAuditStatDetailAttribute[]>([])
  const [fields, setFields] = useState<API.SqlAuditStatDetailAttribute[]>([])

  useEffect(() => {
    getData().then((res) => {
      const data = res.data.data.contents || []
      setTopSqls(data)
    })
  }, [])

  // const renderSpecialColumn = (
  //   field: API.SqlAuditStatDetailAttribute,
  //   node: React.ReactNode,
  //   record: API.SqlAuditStatDetail
  // ) => {
  //   switch (field.name) {
  //     case 'sqlTextShort':
  //       if (Object.keys(queryValues).length === 0) return null;
  //       return (
  //         <SqlText
  //           startTime={queryValues.startTime}
  //           endTime={queryValues.endTime}
  //           node={node}
  //           record={record}
  //           sqlId={record.sqlId as string}
  //           tenantId={match.params.tenantId}
  //           clusterId={match.params.clusterId}
  //           onHref={showDetail}
  //         />
  //       );
  //     // case 'avgCpuTime':
  //     case 'avgElapsedTime':
  //       return renderLine(record, field.name);
  //     default:
  //       if (field.unit === 'PERCENT100') {
  //         return `${toNumber(node || 0).toFixed(2)}%`;
  //       }
  //       if (field.dataType === 'BOOLEAN') {
  //         return node ? '是' : '否';
  //       }
  //       if (field.dataType === 'FLOAT' || field.dataType === 'INTEGER') {
  //         return formatterNumber(node as number);
  //       }
  //       return node;
  //   }
  // };

  const findOrdinal = (column: ColumnProps<API.SqlAuditStatDetail>) => {
    const order = fields.find((field) => field.name === column.dataIndex)
      ?.ordinal
    // 如果没有 ordinal ，排到最后
    return order === undefined ? 999 : order
  }

  const columns: ColumnProps<API.SqlAuditStatDetail>[] = useMemo(() => {
    if (fields.length === 0) return []
    return (
      fields
        .map((field) => {
          const column: ColumnProps<API.SqlAuditStatDetail> = {
            title: `${field.title}`,
            dataIndex: field.name as string,
            ellipsis: true,
            width: 140,
            className: actives.find((attr) => attr.name === field.name)
              ? 'ac'
              : '',
            sorter:
              field.operation === 'SORT'
                ? (a, b) => {
                    return a[field.name as string] - b[field.name as string]
                  }
                : undefined,
            filters:
              field?.operation === 'FILTER'
                ? Object.keys(
                    groupBy(topSqls, (top) => top[field.name as string])
                  ).map((key) => ({
                    text: key,
                    value: key,
                  }))
                : undefined,
            onFilter: (value, record) => record[field.name as string] === value,
            // todo 没有生效
            defaultSortOrder: field.operation === 'SORT' ? 'ascend' : undefined,
            // render: (text, record) => renderSpecialColumn(field, text, record),
            // render: (text, record) => ,
          }
          if (field.name === 'sqlTextShort') {
            column.width = 200
          }
          if (field.name === 'sqlId') {
            column.width = 160
          }
          // todo 2.5 只展示数字，不做差异化
          if (field.name === 'avgElapsedTime') {
            column.width = 230
          }
          return column
        })
        // 列排序
        .sort((a, b) => findOrdinal(a) - findOrdinal(b))
    )
  }, [fields, topSqls, actives])

  const columns2 = [
    {
      title: '期间内的总执行次数',
      dataIndex: 'executions',
    },
    {
      title: '期间内的平均每秒执行次数',
      dataIndex: 'execPs',
    },
    {
      title: '期间内平均更新行数',
      dataIndex: 'avgAffectedRows',
    },
    {
      title: '期间内平均返回行数',
      dataIndex: 'avgReturnRows',
    },
    {
      title: '期间内平均访问分区数',
      dataIndex: 'avgPartitionCount',
    },
    {
      title: '期间内的总错误次数',
      dataIndex: 'failCount',
    },
    {
      title: '期间内的错误百分比',
      dataIndex: 'failPercentage',
    },
    {
      title: '期间内结果码4012的发生次数',
      dataIndex: 'retCode4012Count',
    },
    {
      title: '期间内结果码4013的发生次数',
      dataIndex: 'retCode4013Count',
    },
    {
      title: '期间内结果码5001的发生次数',
      dataIndex: 'retCode5001Count',
    },
    {
      title: '期间内结果码5024的发生次数',
      dataIndex: 'retCode5024Count',
    },
    {
      title: '期间内结果码5167的发生次数',
      dataIndex: 'retCode5167Count',
    },
    {
      title: '期间内结果码5217的发生次数',
      dataIndex: 'retCode5217Count',
    },
    {
      title: '期间内结果码6002的发生次数',
      dataIndex: 'retCode6002Count',
    },
  ]

  const handlePageChange = (current: number, pageSize?: number) => {
    // setQueryValues({ ...queryValues, current, pageSize: pageSize || 40 });
  }

  return (
    <div>
      <Table<API.SqlAuditStatDetail>
        loading={false}
        columns={columns2}
        dataSource={topSqls}
        scroll={{ x: 700 }}
        // pagination={{
        //   showSizeChanger: true,
        //   onChange: handlePageChange,
        // }}
      />
    </div>
  )
}

async function getData() {
  return await axios.get(
    'http://www.qiuhang.club:7300/mock/5ff73022cd2bd50579f71e2e/oneapi/topsql'
  )
}

export default Index
