import React from 'react';
import { styles } from '../../styles/styles';

const TableCell = (props) => {

  return (
      <tr key={props.topic.topicId}>
          <td style={styles.td}>{props.topic.topicDescription}</td>
          <td style={styles.td}>{props.topic.resourcesCount}</td>
      </tr>
  );
};

export default TableCell;
