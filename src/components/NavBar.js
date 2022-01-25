import React from 'react';
import { styles } from '../styles/styles';
import { colors } from '../styles/colors';
import ButtonAtom from './atoms/ButtonAtom';

const NavBar = (props) => {

    const btnClick = () => {
        console.log("clicked");
    }

  return (
      <div style={styles.navBar}>
        <div style={{marginLeft: "15px"}}>
            <p>Avantica Training</p>
        </div>
        <div style={styles.navBar}>
            <p style={styles.paragraph}>
                {/*<a href="#">Login</a>*/}
                Login
                </p>
            <p style={styles.paragraph}>
                {/*<a href="#">Sign up</a>*/}
                Sign up
                </p>
          </div>
          {/*<ButtonAtom style={styles.greenButton} text="Mi libro" handleClick={btnClick}/>*/}
      </div>
  );
}

export default NavBar;
