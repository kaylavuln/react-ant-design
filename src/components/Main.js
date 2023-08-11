import {
  PieChartOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes,NavLink} from 'react-router-dom';
import React, { useState } from 'react';
//page
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';
import ProductAdd from '../pages/ProductAdd';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <NavLink to="/"><PieChartOutlined /> Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/product"><ShoppingCartOutlined /> Product</NavLink>
          </Menu.Item>    
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }} separator=">"
          >
            
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/add" element={<ProductAdd />} />
          </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </Router>
  );
};
export default App;
  