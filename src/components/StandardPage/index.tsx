import { Outlet } from 'react-router-dom';
import Theme from 'styles/Theme.module.scss';
import styles from './Header.module.scss';
export default function StandardPage() {
  return (
    <>
      <header className={styles.header} /> 
      <div className={Theme.container}>
        <Outlet />  
      </div> 
    </>
     
  );  
}