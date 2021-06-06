import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';

export default function InterestInProject(props) {
  const { TextArea } = Input;
  const [componentSize, setComponentSize] = useState();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = async (values) => {
    setIsSending(true);
    await axios.post('/api/mailer', {
      ...values,
      projectId: props.id,
      contactId: 'Zájem o projekt',
      projectName: props.name,
    });
    setIsSending(false);
    form.resetFields();
    router.push('/successSent');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="InterestInProject"
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
          label="Jméno"
          name="name"
          rules={[{ required: true, message: 'Prosím, vyplňte své jméno.' }]}
        >
          <Input placeholder="Zde vyplňte své jméno" type="text" />
        </Form.Item>
        <Form.Item
          label="Příjmení"
          name="lastname"
          rules={[{ required: true, message: 'Prosím, vyplňte své příjmení.' }]}
        >
          <Input placeholder="Vyplňte své příjmení" type="text" />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Prosím, vyplňte svůj e-mail.' }]}
        >
          <Input placeholder="Váš e-mail" type="email" />
        </Form.Item>
        <Form.Item label="Telefon" name="phonenumber">
          <Input placeholder="Prosím, vyplňte své telefonní číslo" type="tel" />
        </Form.Item>
        <Form.Item name="links" label="Odkazy" type="text">
          <TextArea
            rows={4}
            placeholder="Odkazy na vaše osobní weby, sociální sítě, apod."
          />
        </Form.Item>

        <Form.Item
          name="activityDescription"
          label="Popis činnosti"
          type="text"
          rules={[
            { required: true, message: 'Prosím, nezapomeňte vyplnit pole.' },
          ]}
        >
          <TextArea rows={4} placeholder="Popište více vaši činnost" />
        </Form.Item>

        <Form.Item name="reference" label="Reference" type="text">
          <TextArea
            rows={4}
            placeholder="Zde můžete uvést nějaké vaše referenční projekty"
          />
        </Form.Item>

        <Form.Item
          name="timeAvailability"
          label="Kolik času můžete poskytnout?"
          type="text"
        >
          <TextArea placeholder="Pokud chcete, uveďte, kolik času můžete projektu věnovat" />
        </Form.Item>
        <p className="font-body text-grey-dark text-base mb-6">
          Vyplněné údaje budou použity pouze za účelem zprostředkování kontaktu.
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
            loading={isSending}
          >
            {isSent === true ? `Odesláno` : `Odeslat`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
