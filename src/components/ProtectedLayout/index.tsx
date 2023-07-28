import { useAuth } from 'context/useAuth';
import styles from './ProtectedLayout.module.scss';
import { ReactComponent as Lock } from 'assets/svgs/locked.svg';


export const ProtectedLayout = ({children}: {children: JSX.Element}) => {

  const auth = useAuth();
 
  if(!auth.email) {
    return (
      <div className={styles.Acess}>
        <Lock className={styles.locked}/>
        <h1 >You dont have access</h1>
      </div> 
    );
  
  }    
  return children;
};