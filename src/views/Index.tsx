import { Button, Card, Form, Input, Radio } from 'antd';
import React, { FC, useState } from 'react';

const Index: FC = () => {
  const [form] = Form.useForm();
  const [env, setEnv] = useState('uat');
  const [generateType, setGenerateType] = useState('jwt');

  return (
    <Card title="Card" style={{ height: '100vh' }}>
      <Form form={form} layout="vertical">
        <Form.Item label="Environment:">
          <Radio.Group value={env} onChange={(e) => setEnv(e.target.value)}>
            <Radio.Button value="uat">UAT</Radio.Button>
            <Radio.Button value="prod">PROD</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Generate with:">
          <Radio.Group
            value={generateType}
            onChange={(e) => setGenerateType(e.target.value)}
          >
            <Radio.Button value="jwt">JWT</Radio.Button>
            <Radio.Button value="json">JSON</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {generateType === 'jwt' && (
          <Form.Item label="JWT">
            <Input.TextArea placeholder="please input old jwt token" />
          </Form.Item>
        )}
        {generateType === 'json' && (
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
