import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import axios from 'axios';

export default function ContactForm() {
  const { TextArea } = Input;
  const [componentSize, setComponentSize] = useState();
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = async (values) => {
    console.log('Success:', values);
    await axios.post('/api/mailer', {
      ...values,
      contactId: 'Kontaktní formulář',
    });

    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="ContactForm"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="font-body text-grey-dark text-base"
      >
        <Form.Item
          label="Jméno a příjmení"
          name="fullname"
          rules={[
            { required: true, message: 'Prosím, vyplňte celé své jméno.' },
          ]}
        >
          <Input placeholder="Napište nám své jméno." type="text" />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Prosím, vyplňte svůj e-mail.' }]}
        >
          <Input
            placeholder="Uveďte váš e-mail, abychom vás mohli kontaktovat."
            type="email"
          />
        </Form.Item>
        <Form.Item label="Telefonní číslo" name="phonenumber">
          <Input
            placeholder="Budeme rádi, když nám napíšete své telefonní číslo."
            type="tel"
          />
        </Form.Item>

        <Form.Item name="subject" label="Předmět" type="text">
          <Input placeholder="Předmět vaší zprávy" />
        </Form.Item>

        <Form.Item name="message" label="Zpráva" type="text">
          <TextArea
            rows={4}
            placeholder="Napište nám, s čím vám můžeme pomoci."
          />
        </Form.Item>
        <p className="font-body text-grey-dark text-base mb-6">
          Vyplněné údaje budou použity pouze za účelem kontaktu.
        </p>
        <p className="font-body text-grey-dark text-base mb-6">
          Další informace týkající se zpracování osobních údajů naleznete
          <Link href="/gdpr">
            <a> ZDE</a>
          </Link>
          .
        </p>

        <Form.Item name="submit" type="button">
          <Button
            className="bg-grey-light border-green-dark border-2 text-green-dark hover:bg-green hover:text-grey-light hover:border-green-dark hover:border-2"
            type="default"
            htmlType="submit"
            onClick={() => {
              setIsSent(!isSent);
              router.push('/successSent');
            }}
          >
            {isSent === true ? `Odesláno` : `Odeslat`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
