import { Button, Space, Table, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';
import API from '../Axios';
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
  const response = await API.get('/index.php');
    setProducts(response.data);
  };
  const deleteProduct = async (record) => {
    try {
      await API.delete('http://localhost/api/delete.php?id='+record.id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
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
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
        products.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteProduct(record)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
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