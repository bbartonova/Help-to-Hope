import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Form, Input, Button } from 'antd';

import axios from 'axios';

export default function InterestedInHelper(props) {
  const { TextArea } = Input;
  const [componentSize, setComponentSize] = useState();
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    axios
      .post('/api/mailer', {
        ...values,
        helperId: props.id,
        contactId: 'Zájem o pomocníka',
        helperName: `${props.name} ${props.lastname}`,
      })

      .then((response) => console.log(response));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="InterestedInHelper"
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
          label="Název"
          name="name"
          rules={[
            { required: true, message: 'Prosím, vyplňte název projektu.' },
          ]}
        >
          <Input placeholder="Uveďte název vašeho projektu" type="text" />
        </Form.Item>

        <Form.Item
          label="Popis projektu"
          name="eactivityDescription"
          rules={[{ required: true, message: 'Popište více váš projekt.' }]}
        >
          <TextArea rows={4} placeholder="Představte váš projekt" />
        </Form.Item>
        <Form.Item
          label="Účel projektu"
          name="projectPurpose"
          rules={[
            {
              required: true,
              message:
                'Popište, prosíme, komu váš projekt má pomoci nebo již pomáhá.',
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Popište, komu váš projekt má pomoci"
          />
        </Form.Item>

        <Form.Item
          label="Jméno a příjmení"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Prosím, vyplňte své jméno a příjmení.',
            },
          ]}
        >
          <Input placeholder="Zde vyplňte své jméno a příjmení" type="text" />
        </Form.Item>
        <Form.Item label="Název organizace" name="organization">
          <Input placeholder="Vyplňte název organizace" type="text" />
        </Form.Item>

        <Form.Item label="Telefon" name="phonenumber">
          <Input placeholder="Prosím, vyplňte své telefonní číslo" type="tel" />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Prosím, vyplňte svůj kontaktní e-mail.',
            },
          ]}
        >
          <Input placeholder="Váš e-mail" type="email" />
        </Form.Item>
        <Form.Item label="Stávající web" name="oldWeb">
          <Input
            placeholder="Pokud máte, uveďte vaše webové stránky"
            type="text"
          />
        </Form.Item>
        <Form.Item name="links" label="Další odkazy" type="text">
          <TextArea
            rows={4}
            placeholder="Můžete uvést další odkazy, např. na soc. sítě, aj."
          />
        </Form.Item>

        <Form.Item name="reward" label="Možná odměna" type="text">
          <TextArea
            rows={4}
            placeholder="Můžete nabídnout případnému IT odborníkovi originální nefinanční odměnu"
          />
        </Form.Item>
        <p className="font-body text-grey-dark text-base mb-6">
          Vyplněné údaje budou použity pouze za účelem zprostředkování kontaktu.
        </p>
        <p className="font-body text-grey-dark text-base mb-6">
          Další informace o zpracování osobních údajů najdete
          <Link href="/gdpr">
            <a> ZDE</a>
          </Link>
          .
        </p>

        <Form.Item name="submit" type="button">
          <Button
            className="bg-grey-light border-green-dark border-2 text-green-dark hover:bg-green hover:text-grey-light hover:border-green-dark hover:border-2"
            type="primary"
            htmlType="submit"
            type="primary"
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
