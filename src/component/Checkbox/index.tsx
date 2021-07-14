import React, { useState } from 'react'
import CheckBox from 'rc-checkbox';
interface Props {

}

const Index = (props: Props) => {

  const [disabled, setDisabled] = useState(false);

  // eslint-disable-next-line
  const onChange = (e: { target: { checked: any; }; }) => {
    console.log(`e.target.checked`, e.target.checked);
  }

  const onKeyDown = (e: { key: any; }) => {
    console.log(`e.onKeyDown`, e.key);
  }

  const onKeyPress = (e: { key: any; }) => {
    console.log(`e.onKeyPress`, e.key);
  }

  const onKeyUp = (e: { key: any; }) => {
    console.log(`e.onKeyUp`, e.key);
  }


  return (
    <div>
      <p>
        <label htmlFor="123">
          点击一下
          {/* 其实这个库已经帮你写好了怎么来处理 ts类型。我在d.ts里面声明的话
            会直接被覆盖掉！！！
           */}
          <CheckBox
            id='123'
            // 用于表单上传的时候来标志当前name
            name="123"
            defaultChecked
            onChange={onChange}
          />
          asd
        </label>
      </p>
      <p>
        <label>
          <CheckBox
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            disabled={disabled}
          />
          这是一行文案
        </label>
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            disabled={disabled}
          />
          这是一行文案
        </label>
      </p>
    </div>
  )
}

export default Index
