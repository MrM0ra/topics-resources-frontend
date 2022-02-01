import React, { useContext } from 'react';
import { styles } from '../styles/styles';
import { UserContext } from '../context/UserContext';

const AuthNav = (props) => {
	
	const logout = () => {
		props.setAuthentication(false);
		props.setCredentials("");
		props.setEmail("");
		props.changePage("TopTopics");
	}

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
			<div onClick={logout} style={{marginRight: "15px"}}>
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

	const {auth, changeAuth, changeUserId, changeUserEmail} = useContext(UserContext);

	return (
		<div>
			{auth ?
				<AuthNav setEmail={changeUserEmail} setCredentials={changeUserId} setAuthentication={changeAuth} changePage={props.viewChangeHandler}/>
					:
				<AuthLessNav changePage={props.viewChangeHandler} />
			}
		</div>
	);
}

export default NavBar;
