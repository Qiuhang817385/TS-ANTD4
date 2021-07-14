import React from 'react'
import { Progress } from 'antd'
import { ProgressProps } from 'antd/lib/progress'
import classNames from 'classnames'
import './index.scss'

export interface MyProgressProps extends ProgressProps {
  /* 外层容器的类型 */
  wrapperClassName?: string
  /* 展示模式: 默认 | 旋转 180 度
   * 业务需求: https://yuque.antfin-inc.com/ngf5ud/scuahg/473785/measure
   */
  mode?: 'default' | 'invert'
  /* 前缀 */
  prefix?: React.ReactNode
  prefixWidth?: number
  /* 后缀 */
  affix?: React.ReactNode
  affixWidth?: number
}

const MyProgress: React.FC<MyProgressProps> = ({
  wrapperClassName,
  mode = 'default',
  strokeLinecap = 'square',
  prefix,
  prefixWidth = 40,
  affix,
  affixWidth = 40,
  ...restProps
}: MyProgressProps) => (
  <span
    className={classNames(`${'progress'} ${wrapperClassName}`, {
      ['invert']: mode === 'invert',
    })}
  >
    {prefix && (
      <span className={'prefix'} style={{ width: prefixWidth }}>
        {prefix}
      </span>
    )}
    <span className={'wrapper'}>
      <Progress strokeLinecap={strokeLinecap} {...restProps} />
    </span>
    {affix && (
      <span className={'affix'} style={{ width: affixWidth }}>
        {affix}
      </span>
    )}
  </span>
)

export default MyProgress
