import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../../context/UserContext';
import ButtonAtom from '../atoms/ButtonAtom';
import { styles } from '../../styles/styles';

const SignupForm = (props) => {
	
	const {changeUserId, userName, userEmail, changeAuth} = useContext(UserContext);

	const [userPwd, setUserPwd] = useState('');

	const handleEmailChange = (event) => {
		props.changeEmail(event.target.value);
	}

	const handlePwdChange = (event) => {
		setUserPwd(event.target.value);
	}

	const handleUserNameChange = (event) => {
		props.changeUserName(event.target.value);
	}

	const handleSignupWeb = () => {
        let newUser = {name: userName, email: userEmail, password: userPwd}
        fetch('http://127.0.0.1:8005/api/user/register',{
			method: "POST",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(newUser)
		})
		.then(res => res.json())
		.then((result) => {
            if(result.error===null){
                changeUserId(result.data._id);
				changeAuth(true);
				props.changePage("TopTopics")
            }
		});
	}

	return (
		<div style={{paddingTop:"5%"}}>
			<form style={{display: "grid"}}>
				<ButtonAtom text="Sign up with Facebook" style={styles.blueButton} handleClick={ () => console.log("clicked FB")}></ButtonAtom>
				<hr style={{width:"100%"}}></hr>
				<p>Sing up with your email address</p>
				<input placeholder="Email" onChange={handleEmailChange} type="text"></input>
				<input placeholder="Password" onChange={handlePwdChange} type="password"></input>
				<input placeholder="Name" onChange={handleUserNameChange} type="text"></input>
			</form>
			<div style={{display: "flex", placeItems:"flex-start", paddingTop:"10%"}}>
				<ButtonAtom text="SignUp" style={styles.greenButton} handleClick={handleSignupWeb}></ButtonAtom>
			</div>
		</div>
  );
};

export default SignupForm;
