import { Button, Form, Input, Radio } from 'antd';
import {  useState } from "react";
const Add = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
      
  return (
    <>
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item  label="Id">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Name">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="UnitPrice">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default Add