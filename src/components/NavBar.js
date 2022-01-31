import React, { useContext } from 'react';
import { styles } from '../styles/styles';
import { colors } from '../styles/colors';
import ButtonAtom from './atoms/ButtonAtom';
import { UserContext } from '../context/UserContext';

const AuthNav = () => {
    return (
        <div style={styles.navBar}>
            <div style={styles.navBar}>
                <div style={{marginLeft: "15px"}}>
                    <p>Avantica Training</p>
                </div>
            </div>
            <div style={{marginRight: "15px"}}>
                <p>Logout</p>
            </div>
        </div>
    );
}

const AuthLessNav = () => {
    return (
        <div style={styles.navBar}>
            <div style={styles.navBar}>
                <div style={{marginLeft: "15px"}}>
                    <p>Avantica Training</p>
                </div>
            </div>
            <div style={styles.navBar}>
                <p style={styles.paragraph}>
                    Login
                </p>
                <p style={styles.paragraph}>
                    Sign up
                </p>
            </div> 
        </div>
    );
}

const NavBar = (props) => {

    const {auth} = useContext(UserContext);

    const btnClick = () => {
        console.log("clicked");
    }

  return (
      <div>
        {auth ?
            <AuthNav />
                :
            <AuthLessNav />
        }
      </div>          
  );
}

export default NavBar;
