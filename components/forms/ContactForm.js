import { useState } from 'react';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';

export default function ContactForm() {
  const { TextArea } = Input;
  const [componentSize, setComponentSize] = useState();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name="ContactForm"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Jméno"
          name="fullname"
          rules={[{ required: true, message: 'Prosím, vyplňte své jméno.' }]}
        >
          <Input placeholder="Uveďte své jméno." type="text" />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Prosím, vyplňte svůj e-mail.' }]}
        >
          <Input placeholder="Zde uveďte svůj kontaktní e-mail." type="email" />
        </Form.Item>
        <Form.Item label="Telefonní číslo" name="phonenumber">
          <Input placeholder="Vaše kontaktní telefonní číslo." type="tel" />
        </Form.Item>

        <Form.Item name="subject" label="Předmět" type="text">
          <Input placeholder="Předmět vaší zprávy." />
        </Form.Item>

        <Form.Item name="message" label="Zpráva" type="text">
          <TextArea rows={4} placeholder="Vaše sdělení." />
        </Form.Item>

        <Form.Item name="submit" type="button">
          <Button type="primary" htmlType="submit">
            Odeslat
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
