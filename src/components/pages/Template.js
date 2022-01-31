import React, {useContext, useState} from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';
import LoginForm from './LoginForm';
import TopTopics from './TopTopics';

const Template = (props) => {

	const {userName, userId, auth, changeUserEmail} = useContext(UserContext);

	const [page, setPage] = useState("TopTopics");

	return (
		<div style={styles.template}>
			{auth ? 
				page==="TopTopics" ? 
					<TopTopics />
					:
					undefined 
				: 
				page==="SignUp" ? 
					undefined
					: 
					<LoginForm changeEmail={changeUserEmail}/>
			}
		</div>
	);
};

export default Template;
