import { useAuth } from 'context/AuthProvider/useAuth';
import { Button, Col, Form, Input, Row, message } from 'antd';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);

      navigate('/profile');
    } catch (error) {
      alert('Invalid email or password');
    }
  }

  return (
    <Row
      justify='center'
      align='middle'
      style={{
        height: '100vh',
      }}
    >
      <Col span={12}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={() => {}}
        >
          <Form.Item label='Email' name='email'>
            <Input />
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
