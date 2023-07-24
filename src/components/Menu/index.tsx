import styles from './Menu.module.scss';
import SideNav, { 
  Toggle,
  Nav,
  NavItem, 
  NavIcon, 
  NavText 
} from '@trendmicro/react-sidenav';
import { CgHome } from 'react-icons/cg';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { ReactComponent as Logo} from 'assets/logo.svg';

export default function Menu() {
  return (
    <SideNav className={styles.menu}
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem className={styles.menu__item} eventKey="home">
          <NavIcon>
            <CgHome size={25} style={{ margin: '10px' }} />
          </NavIcon>
          <NavText>
                Home
          </NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
                Charts
          </NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>
                    Line Chart
            </NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>
                    Bar Chart
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}