import React from 'react';

const TableCell = (props) => {

  return (
      <tr key={props.topic.topicId}>
          <td>{props.topic.topicDescription}</td>
          <td>{props.topic.resourcesCount}</td>
      </tr>
  );
};

export default TableCell;
