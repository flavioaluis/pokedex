import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/svgs/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <Logo className={styles.Logo} />
        </div>
        <div className={styles.textContainer}>
          <h4>
            &copy; {new Date().getFullYear()} Flávio Almeida Luis 
            <a href="https://react.dev/"> React.js </a>,
            <a href="https://www.typescriptlang.org/"> Typescript </a>  and
            <a href="https://sass-lang.com/"> SCSS</a> .
          </h4>
        </div>
      </div>
    </footer>
  );
}