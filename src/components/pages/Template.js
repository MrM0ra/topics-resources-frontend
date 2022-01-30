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
      {auth ? <TopTopics /> : <LoginForm changeEmail={changeUserEmail}/>}
      {/*<button onClick={(e)=>{setPage("caballo")}}></button>*/}
    </div>
  );
};

export default Template;
