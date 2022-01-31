import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';

const Topics = (props) => {

	const {userId} = useContext(UserContext);

	const [topics, setTopics] = useState([]);

	useEffect( 
		() => {
			fetch(`http://127.0.0.1:8080/topics/byUser/${userId}`)
			.then(res => res.json())
			.then(
				(result) => {
					setTopics(result);
					console.log(result);
				}
			)
		},
	[]);

	const renderTopics = () => {
		return topics.map(topic => (
			<tr key={topic.topicId}>
				<td style={styles.td}>{topic.topicId}</td>
				<td style={styles.td}>{topic.topicDescription}</td>
			</tr>
		));
	}

	return (
		<div>
			<h1>My topics</h1>
			<table style={styles.table}>
				<thead>
					<tr>
						<th style={styles.td}>Id</th>
						<th style={styles.td}>Name</th>
					</tr>
				</thead>
				<tbody>
					{renderTopics()}
				</tbody>
			</table>
		</div>
	);
};

export default Topics;
