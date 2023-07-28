import { useAuth } from 'context/useAuth';
import styles from './ProtectedLayout.module.scss';
import { ReactComponent as Lock } from 'assets/svgs/locked.svg';
import imgPsy from 'assets/psyduck.png';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return (
      <section>
        <div className={styles.Acess}>
          <Lock className={styles.locked} />
          <h1 className={styles.text}>You dont have access</h1>
        </div>
        <div className={styles.imgContainer}>
          <img src={imgPsy} alt='img pokemons' />
        </div>
      </section>
    );
  }
  return children;
};
