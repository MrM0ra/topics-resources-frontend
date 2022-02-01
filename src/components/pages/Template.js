import React, {useContext, useState} from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Topics from './Topics';
import Resources from './Resources';
import TopTopics from './TopTopics';
import AddTopic from './AddTopic';
import AddResource from './AddResource';
import EditTopic from './EditTopic';

const Template = (props) => {

	const {userName, userId, auth, changeUserEmail, changeUserName} = useContext(UserContext);

	const changePage = (page) => {
		props.viewChangeHandler(page);
	}

	const rendering = () => {
		if(auth) {
			if(props.page==="TopTopics"){
				return <TopTopics changePage={changePage} />; 
			}
			if(props.page==="Topics"){
				return <Topics changePage={changePage} />
			}
			if(props.page==="Resources"){
				return <Resources changePage={changePage} />
			}
			if(props.page==="AddTopic"){
				return <AddTopic changePage={changePage}/>
			}
			if(props.page==="AddResource"){
				return <AddResource changePage={changePage}/>
			}
            if(props.page==="EditTopic"){
				return <EditTopic changePage={changePage}/>
			}
		}else{
			if(props.page==="SignUp"){
				return <SignupForm changePage={changePage} changeUserName={changeUserName} changeEmail={changeUserEmail} />
			}else{
				return <LoginForm changePage={changePage} changeEmail={changeUserEmail}/>
			}
		}
	}
	
	return (
		<div style={styles.template}>
			{rendering()}
		</div>
	);
};

export default Template;
