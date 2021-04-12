import { Button, Card, Form, Input, Radio } from 'antd';
import React, { ChangeEvent, FC, useState } from 'react';
import jwt_decode from 'jwt-decode';

interface GenerateDataType {
  env: 'uat' | 'prod';
  generateType: 'jwt' | 'json';
  jwt?: string;
  json?: string;
  jwtDecode?: string;
}

const Index: FC = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<GenerateDataType>({
    env: 'uat',
    generateType: 'jwt',
  });

  const setFormDataValue = <K extends keyof GenerateDataType>(
    key: K,
    value: GenerateDataType[K]
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleJWTChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let jwtDecode = '';
    try {
      jwtDecode = JSON.stringify(jwt_decode(e.target.value));
    } catch ({ message }) {
      jwtDecode = message;
    }
    setFormData((prevState) => ({
      ...prevState,
      jwt: e.target.value,
      jwtDecode,
    }));
  };

  return (
    <Card title="Card" style={{ height: '100vh' }}>
      <Form form={form} layout="vertical">
        <Form.Item label="Environment:">
          <Radio.Group
            value={formData.env}
            onChange={(e) => setFormDataValue('env', e.target.value)}
          >
            <Radio.Button value="uat">UAT</Radio.Button>
            <Radio.Button value="prod">PROD</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Generate with:">
          <Radio.Group
            value={formData.generateType}
            onChange={(e) => setFormDataValue('generateType', e.target.value)}
          >
            <Radio.Button value="jwt">JWT</Radio.Button>
            <Radio.Button value="json">JSON</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {formData.generateType === 'jwt' && (
          <Form.Item label="JWT">
            <Input.TextArea
              placeholder="please input old jwt token"
              onChange={handleJWTChange}
            />
            {formData.jwtDecode}
          </Form.Item>
        )}
        {formData.generateType === 'json' && (
          <Form.Item label="JSON">
            <Input.TextArea placeholder="please input json data" />
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary">Generate</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Index;
