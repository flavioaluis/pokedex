import Theme from 'styles/Theme.module.scss';
import styles from './Profile.module.scss';
import { Col, Form, Input, Row, Select } from 'antd';
import pokeData from './pokeData.json';
import cityData from './cityData.json';
import trainne from 'assets/profile/trainne.png';
import iniciais from 'assets/profile/iniciais.jpg';

const options = pokeData;
const options1 = cityData;

export default function Profile() {
  return (
    <section>
      <h3 className={Theme.title}>Profile</h3>
      <div className={styles.container}>
        <img className={styles.perfil} src={trainne} alt={'Perfil'} />
        <Row
          justify = 'center'
          style={{
            width:'60vh',       
          }}
        >
          <Col span={14} xs={ 8 } sm={ 14 } md={ 14 } >
            <h3 className={styles.title}>Trainer</h3>
            <Form name='basic' labelCol={{ span: 11 }} wrapperCol={{ span: 10 }}>
              <Form.Item label='Name' name='name'>
                <Input />
              </Form.Item>

              <Form.Item label='Choose one ' name='pokemon'>
                <Select options={options} />
              </Form.Item>

              <Form.Item label='Place of Birth' name='city'>
                <Select options={options1}/>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <div className={styles.image}>
        <img src={iniciais} alt="imagem de lutas" />
      </div>
      
    </section>
  );
}
