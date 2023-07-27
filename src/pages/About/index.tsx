import styles from './About.module.scss';
import Theme from 'styles/Theme.module.scss';
import foto0 from 'assets/sobre/image.gif';
import foto1 from 'assets/sobre/batalha1.gif';
import foto2 from 'assets/sobre/batalha2.gif';
import foto3 from 'assets/sobre/batalha3.gif';

const images = [foto1,foto2,foto3];
export default function Sobre() {
  return (
    <section>
      <h3 className={Theme.title}> About</h3>
      <div className={styles.aboutUs}>
        <img src={foto0} alt={'Sobre Pokemon'} />
        <div className={styles.aboutUs__text}>
          <p>
            Ao completar 10 anos, Você tem permissão para começar sua jornada no mundo dos Pokémon e assim tentar se tornar um Mestre Pokémon. Você tem direito a um Pokémon, e batalhando conseguirá outros usando pokebolas depois de enfraquecê-los.
          </p>
          <p>
            Para conseguir participar dos torneios maiores é necessário conseguir as insígnias totalizando 8 delas.
          </p>
          <p>
            Cada pokemon tem seu tipo e cada tipo tem sua fraqueza, como por exemplo um pokemon de água é fraco contra elétrico e planta, e resistente ao aço, a água, fogo e gelo.
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, index)=> (
          <div key={index} className={styles.images__image}>
            <img src={image} alt="imagem de lutas" />
          </div>
        ))}

      </div>
    </section>
  );
}