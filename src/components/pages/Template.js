import React, {useContext, useState} from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Topics from './Topics';
import Resources from './Resources';
import TopTopics from './TopTopics';

const Template = (props) => {

	const {userName, userId, auth, changeUserEmail} = useContext(UserContext);

	const changePage = (page) => {
		props.viewChangeHandler(page);
	}

	return (
		<div style={styles.template}>
			{auth ? 
				props.page==="TopTopics" ? 
					<TopTopics changePage={changePage} />
					:
					props.page==="Topics" ?
                        <Topics />
                    :
                        <Resources />
				: 
				props.page==="SignUp" ? 
					<SignupForm changePage={changePage} changeEmail={changeUserEmail} />
					: 
					<LoginForm changePage={changePage} changeEmail={changeUserEmail}/>
			}
		</div>
	);
};

export default Template;
