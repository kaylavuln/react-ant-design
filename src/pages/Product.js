import { Button, Space, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
 }, []);
 const fetchProducts = async () => {
  const response = await axios.get('http://localhost/api/index.php');
  setProducts(response.data);
};
  const columns = [
    {
      
      title: 'ID',
      dataIndex: 'id'
    },
    {
      
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button
        style={{
          backgroundColor: '#1890FF',
          color: '#FFFFFF'
        }} onClick={() => navigate("/product/add")} >Add Product</Button>
      </Space>
      <Table columns={columns} dataSource={products} />
    </>
  );
};
export default App;