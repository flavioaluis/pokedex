import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Theme from 'styles/Theme.module.scss';
import styles from './NotFound.module.scss';
import Image404 from 'assets/not-found.png';

export default function NotFound() {
  const navigate = useNavigate ();
  return (
    
    <div className={classNames({
      [styles.container]: true,
      [Theme.container]: true
  
    })}>
      <div className={styles.voltar}>
        <button onClick = {() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <img className={styles.imgSnorlax }src={Image404} alt={'Error-Image'}/>
      <h3 className={styles.textSnorlax}> <span>Opss!</span> A wild Snorlax has blocked your path!</h3>
    </div>
    
  );
}