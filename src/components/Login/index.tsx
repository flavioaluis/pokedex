import { useAuth } from 'context/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, Row, message } from 'antd';
import styles from './Login.module.scss';
import imgLogin from 'assets/pokemons.png';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);

      navigate('/profile');
    } catch (error) {
      message.error('Invalid email or password');
    }
  }

  return (
    <>
      <Row
        justify='center'
        align='middle'
        style={{
          height: '10vh',
        }}
      >
        <Col span={15} xs={24} sm={15} md={8}>
          <Form
            name='basic'
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <Form.Item label='Email' name='email'>
              <Input />
            </Form.Item>

            <Form.Item
              className={styles.formItem}
              label='Password'
              name='password'
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className={styles.formButton}
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Button type='primary' htmlType='submit' className={styles.botao}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className={styles.imgContainer}>
        <img src={imgLogin} alt='img pokemons' />
      </div>
    </>
  );
};

export default Login;
