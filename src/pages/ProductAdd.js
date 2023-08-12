import { Button, Form, Input, InputNumber, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from "react-router-dom";
import {React} from 'react';
import API from '../Axios';
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 6,
  },
};
const success = (msg) => {
  message.success(msg);
};

const App = () => {
  let navigate = useNavigate();
  const onFinish = async (values) => {
      try {
        const response = await API.post('http://localhost/api/add.php', values);
        //console.log(response)
        navigate("/product");
        success(response.data);
      } catch (error) {
        //console.error('Error:', error);
        //message.error('An error occurred');
      }
  };
  return (
    <Form {...layout} onFinish={onFinish}>
      <Form.Item
        name={['product', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['product', 'price']}
        label="Price"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 9999999999
          },
        ]}
      >
        <InputNumber defaultValue="0" />
      </Form.Item>
      <Form.Item
        name={['product', 'description']}
        label="Description"
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 3,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;