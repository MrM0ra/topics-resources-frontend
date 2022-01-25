import React, {useState} from 'react';
import { styles } from '../../styles/styles';
import TopTopics from './TopTopics';
const Template = (props) => {

  const [page, setPage] = useState("TopTopics");

  return (
    <div style={styles.template}>
      {page==="TopTopics" ? <TopTopics /> : <img src="https://pbs.twimg.com/media/EdIqJTlWsAMsoS2.jpg"></img>}
    </div>
  );
};

export default Template;
