import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaUser } from 'react-icons/fa';
import { ReactComponent as PokeLogo} from 'assets/svgs/pokeLogo.svg';
import { ReactComponent as PokeDex} from 'assets/svgs/pokedex.svg';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default function Menu() {
  const navigate = useNavigate();
  

  return (
    <SideNav className={styles.side}
      onSelect={(selected: string) => {
        navigate('/'+ selected);
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav className={styles.menu} defaultSelected="profile">
        <NavItem className={styles.menu__item} eventKey="profile">
          <NavIcon>
            <FaUser className={styles.pokeIcons} />
          </NavIcon>
          <NavText style={{fontSize:20}}>
                User
          </NavText>
        </NavItem>
        <NavItem className={styles.menu__item} eventKey="">
          <NavIcon>
            <FaHome className={styles.pokeIcons} />
          </NavIcon>
          <NavText style={{fontSize:20}}>
                Home
          </NavText>
        </NavItem>
        <NavItem className={styles.menu__item} eventKey="about">
          <NavIcon>
            <PokeLogo className={styles.pokeIcons}/>
          </NavIcon>
          <NavText style={{fontSize:20}}>
                About
          </NavText>
        </NavItem>
        <NavItem className={styles.menu__item} eventKey="pokedex">
          <NavIcon>
            <PokeDex className={styles.pokeIcons}/>
          </NavIcon>
          <NavText style={{fontSize:20}}>
                Pokedex
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}