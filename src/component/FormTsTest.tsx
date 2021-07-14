import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { layout, tailLayout } from '../constant/index'

export interface ObProxy {
  userName: string
  password?: string
  address?: string
  port?: number
}
export interface OB {
  obLinks?: string
}

interface Props {}

const FormTsTest: React.FC = (props: Props) => {
  const onFinish = (values: ObProxy) => {
    // const {} = values;
    console.log('Success:', values)
  }
  const [form] = Form.useForm<ObProxy>()
  // const [form] = Form.useForm()
  const { getFieldsValue } = form
  // const {} = getFieldsValue()
  // TS泛型的形式，可以让Form默认支持类型推断。
  // const {userName} = form.getFieldsValue();
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Row>
        <Col span={12}>
          <Form<ObProxy>
            {...layout}
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="姓名" name="userName">
              <Input />
            </Form.Item>
            <Form.Item label="地址" name="address">
              <Input />
            </Form.Item>
            <Form.Item label="端口号" name="port">
              <Input />
            </Form.Item>
            {/* <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default FormTsTest
