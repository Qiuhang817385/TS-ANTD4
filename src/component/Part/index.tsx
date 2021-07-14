import React, { useEffect, useRef } from 'react'
import './index.scss'
interface Props {

}

const Index = (props: Props) => {
  const food = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {

    }
  }, [])

  return (
    <div id="main">
      {/* 设置游戏舞台 */}
      <div id="stage">
        <div id="snake">
          <div></div>
        </div>
        <div id="food" ref={food}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* 积分面板 */}
      <div id="score-panel">
        <div>
          分数:<span>0</span>
        </div>
        <div>
          等级:<span>1</span>
        </div>
      </div>
    </div>
  )
}

export default Index
