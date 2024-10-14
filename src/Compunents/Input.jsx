import React from 'react';
import { InputNumber, Space } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const Input = () => (
  <Space wrap>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </Space>
);
export default Input;