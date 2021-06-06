import { useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createHelperOfProject } from '../../src/graphql/mutations';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Form, Input, Button, Select } from 'antd';

export default function HelperOfProject() {
  const { TextArea } = Input;
  const [componentSize, setComponentSize] = useState();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      await API.graphql(
        graphqlOperation(createHelperOfProject, { input: values }),
      );
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    setIsLoading(false);
    form.resetFields();
    router.push('/successAdd');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="HelperOfProject"
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
          placeholder="Vyberte si jednu z oblastí, ve které chcete pomáhat."
          name="businessField"
          label="Oblast, ve které chcete pomáhat"
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
          name="activityDescription"
          label="Popis činnosti"
          type="text"
          rules={[
            { required: true, message: 'Prosím, nezapomeňte vyplnit pole.' },
          ]}
        >
          <TextArea rows={4} placeholder="Popište více to, co děláte" />
        </Form.Item>

        <Form.Item name="reference" label="Reference" type="text">
          <TextArea
            rows={4}
            placeholder="Zde můžete uvést nějaký váš referenční projekt"
          />
        </Form.Item>

        <Form.Item
          name="timeAvailability"
          label="Kolik času můžete poskytnout?"
          type="text"
        >
          <TextArea placeholder="Pokud chcete, uveďte, kolik času můžete projektu věnovat" />
        </Form.Item>
        <Form.Item
          name="projectArea"
          label="Je nějaká oblast, ve které byste rádi pomáhali?"
          type="text"
        >
          <TextArea
            rows={4}
            placeholder="Např. kultura, příroda, vzdělávání, sport, apod."
          />
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
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            {isSent === true ? `Zaregistrováno` : `Registrovat se`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
