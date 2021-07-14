declare namespace API {
  interface SqlAuditStatDetail {
    /** 期间内的总执行次数 */
    executions?: number
    /** 期间内的平均每秒执行次数 */
    execPs?: number
    /** 期间内平均更新行数 */
    avgAffectedRows?: number
    /** 期间内平均返回行数 */
    avgReturnRows?: number
    /** 期间内平均访问分区数 */
    avgPartitionCount?: number
    /** 期间内的总错误次数 */
    failCount?: number
    /** 期间内的错误百分比 */
    failPercentage?: number
    /** 期间内结果码4012的发生次数 */
    retCode4012Count?: number
    /** 期间内结果码4013的发生次数 */
    retCode4013Count?: number
    /** 期间内结果码5001的发生次数 */
    retCode5001Count?: number
    /** 期间内结果码5024的发生次数 */
    retCode5024Count?: number
    /** 期间内结果码5167的发生次数 */
    retCode5167Count?: number
    /** 期间内结果码5217的发生次数 */
    retCode5217Count?: number
    /** 期间内结果码6002的发生次数 */
    retCode6002Count?: number
    /** 期间内的平均等待时间（毫秒） */
    avgWaitTime?: number
    /** 期间内的平均等待次数 */
    avgWaitCount?: number
    /** 期间内的平均发送RPC次数 */
    avgRpcCount?: number
    /** 期间内的本地计划百分比 */
    localPlanPercentage?: number
    /** 期间内的远程计划百分比 */
    remotePlanPercentage?: number
    /** 期间内的分布式计划百分比 */
    distPlanPercentage?: number
    /** 期间内的平均响应时间（毫秒） */
    avgElapsedTime?: number
    /** 期间内的最大响应时间（毫秒） */
    maxElapsedTime?: number
    /** 期间内的总响应时间（毫秒） */
    sumElapsedTime?: number
    /** 期间内的平均CPU时间（毫秒） */
    avgCpuTime?: number
    /** 期间内的最大CPU时间（毫秒） */
    maxCpuTime?: number
    /** 期间内的平均网络传输时间（毫秒） */
    avgNetTime?: number
    /** 期间内的平均网络入队时间（毫秒） */
    avgNetWaitTime?: number
    /** 期间内的平均排队时间（毫秒） */
    avgQueueTime?: number
    /** 期间内的平均语法解析时间（毫秒） */
    avgDecodeTime?: number
    /** 期间内的平均计划生成时间（毫秒） */
    avgGetPlanTime?: number
    /** 期间内的平均计划执行时间（毫秒） */
    avgExecuteTime?: number
    /** 期间内的平均执行RPC请求次数 */
    avgExecutorRpcCount?: number
    /** 期间内的计划命中率 */
    missPlanPercentage?: number
    /** 期间内的平均Application事件等待时间（毫秒） */
    avgApplicationWaitTime?: number
    /** 期间内的平均Concurrency事件等待时间（毫秒） */
    avgConcurrencyWaitTime?: number
    /** 期间内的平均UserIO事件等待时间（毫秒） */
    avgUserIoWaitTime?: number
    /** 期间内的平均Schedule事件等待时间（毫秒） */
    avgScheduleTime?: number
    /** 期间内的总计RowCache命中次数 */
    avgRowCacheHit?: number
    /** 期间内的平均命中次数 */
    avgBloomFilterCacheHit?: number
    /** 期间内的平均命中次数 */
    avgBlockCacheHit?: number
    /** 期间内的总计命中次数 */
    avgBlockIndexCacheHit?: number
    /** 期间内的总计磁盘度次数 */
    avgDiskReads?: number
    /** 期间内的总计重试次数 */
    retryCount?: number
    /** 期间内的平均表扫描次数 */
    tableScanPercentage?: number
    /** 期间内的强一致性事务百分比 */
    strongConsistencyPercentage?: number
    /** 期间内的弱一致性事务百分比 */
    weakConsistencyPercentage?: number
    /** 期间内的平均Memstore读行数 */
    avgMemstoreReadRows?: number
    /** 期间内的平均Sstore读行数 */
    avgSsstoreReadRows?: number
    /** SQL的Id */
    sqlId?: string
    /** SQL执行所在的Server（svr_ip:svr_port） */
    server?: string
    /** SQL访问的数据库 */
    dbName?: string
    /** SQL的用户 */
    userName?: string
    /** SQL的类型 */
    sqlType?: string
    /** SQL的文本（前100字符） */
    sqlTextShort?: string
    /** 是否内部SQL */
    inner?: boolean
    /** 期间内的最长等待事件 */
    waitEvent?: string
  }

  interface SqlAuditStatDetailAttribute {
    /** 指标的顺序（用于TopSQL列表展示、分组内的顺序） */
    ordinal?: number
    /** 指标的名称(英文；与数据查询接口返回数据的属性名一致） */
    name?: string
    /** 指标的展示标题（按指定语言的） */
    title?: string
    /** 指标的说明信息（按指定语言的） */
    tooltip?: string
    /** 指标的度量单位 */
    unit?: MeasureUnit
    /** 指标的分组 */
    group?: SqlAuditStatDetailAttributeGroup
    /** 指标支持的列操作 */
    operation?: AttributeOperation
    /** 是否默认展示 */
    displayByDefault?: boolean
    /** 是否总是展示（不可隐藏） */
    displayAlways?: boolean
    /** 是否允许用于高级搜索 */
    allowSearch?: boolean
    /** 数据类型 */
    dataType?: AttributeDataType
  }
}

// declare module 'rc-checkbox' {
//   import CheckBox from 'rc-checkbox'
//   export default CheckBox
//   // export interface Props {
//   //   prefixCls?: string
//   //   className?: string
//   //   style?: React.CSSProperties
//   //   name?: string
//   //   id?: string
//   //   type?: string
//   //   defaultChecked?: number | boolean
//   //   checked?: number | boolean
//   //   disabled?: boolean
//   //   onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
//   //   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
//   //   onChange?: (e: Event) => void
//   //   onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
//   //   tabIndex?: string | number
//   //   readOnly?: boolean
//   //   required?: boolean
//   //   autoFocus?: boolean
//   //   value?: any
//   // }
// }
