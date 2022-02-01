import React, { useContext } from 'react';
import { styles } from '../styles/styles';
import { colors } from '../styles/colors';
import ButtonAtom from './atoms/ButtonAtom';
import { UserContext } from '../context/UserContext';

const AuthNav = (props) => {
	
	return (
		<div style={styles.navBar}>
			<div style={styles.navBar}>
				<div style={{marginLeft: "15px"}}>
					<p>Avantica Training</p>
				</div>
				<div onClick={() => props.changePage("Topics")} style={{marginLeft: "15px"}}>
					<p>Topics</p>
				</div>
				<div onClick={() => props.changePage("Resources")} style={{marginLeft: "15px"}}>
					<p>Resources</p>
				</div>
			</div>
			<div style={{marginRight: "15px"}}>
				<p>Logout</p>
			</div>
		</div>
	);
}

const AuthLessNav = (props) => {
	return (
		<div style={styles.navBar}>
			<div style={styles.navBar}>
				<div style={{marginLeft: "15px"}}>
					<p>Avantica Training</p>
				</div>
			</div>
			<div style={styles.navBar}>
				<p onClick={() => props.changePage("LogIn")} style={styles.paragraph}>
					Login
				</p>
				<p onClick={() => props.changePage("SignUp")} style={styles.paragraph}>
					Sign up
				</p>
			</div> 
		</div>
	);
}

const NavBar = (props) => {

	const {auth} = useContext(UserContext);

	return (
		<div>
			{auth ?
				<AuthNav changePage={props.viewChangeHandler}/>
					:
				<AuthLessNav changePage={props.viewChangeHandler} />
			}
		</div>
	);
}

export default NavBar;
