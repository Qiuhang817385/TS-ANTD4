import { Button, Divider } from 'antd'
import React, { useRef, RefObject } from 'react'
import './index.scss'
interface Props {}

const Index = (props: Props) => {
  const show = useRef<HTMLDivElement>(null)

  const toggleClass = () => {
    if (show.current) {
      // eslint-disabled-next
      show.current.classList.toggle('show')
    }
  }

  return (
    <div>
      <div className="container">
        <div className="left" ref={show}>
          <nav className="nav textElipsis">
            后我们需要根据自己的业务逻辑来进行处理如果用户不同意授权的话可能我们会有一个让他手动输入的界面如果不是强制获取手机号的话可以直接跳转页面进行下一步
          </nav>
          <Button
            className="btn"
            onClick={() => {
              toggleClass()
            }}
          >
            &gt;
          </Button>
        </div>
        <div className="common right">
          <div>
            <span className="tit">集群基本信息</span>
          </div>
          <Divider></Divider>
          <div>
            <span className="tit">这里是一个标题</span>
          </div>
          <Divider></Divider>
          <div>
            <span className="tit">这里是一个标题</span>
          </div>
          <Divider></Divider>
          <div>
            <span className="tit">这里是一个标题</span>
          </div>
          <Divider></Divider>
          <div>
            <span className="tit">这里是一个标题</span>
          </div>
          <Divider></Divider>
        </div>
      </div>
    </div>
  )
}

export default Index
