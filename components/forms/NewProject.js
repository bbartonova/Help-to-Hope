import { useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createNewProject } from '../../src/graphql/mutations';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Form, Input, Button, Select } from 'antd';

export default function NewProject() {
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
    try {
      await API.graphql(graphqlOperation(createNewProject, { input: values }));
    } catch (error) {
      console.log(error);
    }
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="NewProject"
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
          label="Popis vaši činnosti"
          name="eactivityDescription"
          rules={[
            {
              required: true,
              message: 'Popište, co děláte a komu tím pomáháte.',
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Popište, co děláte a komu tím pomáháte"
          />
        </Form.Item>
        <Form.Item
          label="Popis projektu"
          name="projectPurpose"
          rules={[
            {
              required: true,
              message:
                'Popište, prosíme, s čím potřebujete pomoct (např. nový web apod.).',
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Popište, s čím potřebujete pomoci (např. nový web apod.)"
          />
        </Form.Item>
        <Form.Item
          placeholder="Oblast, ve které potřebujete pomoci s projektem."
          name="businessField"
          label="Oblast, ve které potřebujete pomoci"
          rules={[
            { required: true, message: 'Prosím, vyberte jednu z možností.' },
          ]}
        >
          <Select>
            <Select.Option value="úpravy/tvorba webů">
              úpravy/tvorba webů
            </Select.Option>
            <Select.Option value="online marketing">
              online marketing
            </Select.Option>
            <Select.Option value="grafika">grafika</Select.Option>
            <Select.Option value="jiná IT oblasti">
              jiná IT oblast
            </Select.Option>
          </Select>
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
            placeholder="Pokud máte, uveďte vaše stávající webové stránky"
            type="text"
          />
        </Form.Item>
        <Form.Item name="links" label="Další odkazy" type="text">
          <TextArea
            rows={4}
            placeholder="Můžete uvést další odkazy, např. na soc. sítě, aj."
          />
        </Form.Item>

        <Form.Item name="experiences" label="Preference zkušeností" type="text">
          <TextArea
            rows={4}
            placeholder="Uveďte, zda požadujete nějaké zkušenosti od případného IT odborníka"
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
            onClick={() => {
              setIsSent(!isSent);
              router.push('/successAdd');
            }}
          >
            {isSent === true
              ? `Přidány informace o projektu`
              : `Přidat nový projekt`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
