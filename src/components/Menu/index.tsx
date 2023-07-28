import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome } from 'react-icons/fa';
import { ReactComponent as Login} from 'assets/svgs/login.svg';
import { ReactComponent as Profile} from 'assets/svgs/profile.svg';
import { ReactComponent as PokeLogo} from 'assets/svgs/pokeLogo.svg';
import { ReactComponent as PokeDex} from 'assets/svgs/pokedex.svg';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default function Menu() {
  const navigate = useNavigate();
  

  return (
    <SideNav style={{width:10}}
      onSelect={(selected: string) => {
        navigate('/'+ selected);
        // Add your code here
      }}
      className={styles.fixed}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="login">
        <NavItem  eventKey="login">
          <NavIcon>
            <Login className={styles.pokeIcons} />
          </NavIcon>
          <NavText style={{fontSize:20}}>
                Login
          </NavText>
        </NavItem>
        <NavItem  eventKey="profile">
          <NavIcon>
            <Profile className={styles.pokeIcons} />
          </NavIcon>
          <NavText style={{fontSize:20}}>
                User
          </NavText>
        </NavItem>
        <NavItem eventKey="">
          <NavIcon>
            <FaHome className={styles.pokeIcons} />
          </NavIcon>
          <NavText style={{fontSize:20}}>
                Home
          </NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <PokeLogo className={styles.pokeIcons}/>
          </NavIcon>
          <NavText style={{fontSize:20}}>
                About
          </NavText>
        </NavItem>
        <NavItem eventKey="pokedex">
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