import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';
import ButtonAtom from '../atoms/ButtonAtom';

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
				}
			)
		},
	[userId]);

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
			{topics.length>0 ? 
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
				<input onClick={() => props.changePage("AddTopic")} style={styles.blueButton} type="button" value="Add New Topic"></input>
			</div>
				: 
			<div>
				<img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt=""></img>
				<p>It seems like you haven't created any topics yet</p>
				<input onClick={() => props.changePage("AddTopic")} style={styles.blueButton} type="button" value="Add New Topic"></input>
			</div>
		}
		<p style={{textDecoration:"underline"}} onClick={() => props.changePage("TopTopics")}>Back to list</p>
		</div>
	);
};

export default Topics;
