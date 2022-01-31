import React, {useEffect, useState} from 'react';
import { styles } from '../../styles/styles';

const TopTopics = (props) => {

	const [topics, setTopics] = useState([]);

	useEffect( () => {
		fetch('http://127.0.0.1:8080/topics/top')
		.then(res => res.json())
		.then((result) => {
			setTopics(result);
			console.log(result);
		}
		)},[]);

	const renderTopics = () => {
		return topics.map(topic => (
			<tr key={topic.topicId}>
				<td style={styles.td}>{topic.topicDescription}</td>
				<td style={styles.td}>{topic.resourcesCount}</td>
			</tr>
		));
	}
  
	return (
	<div>
		<h1>Top ten topics</h1>
		<table style={styles.table}>
			<thead>
				<tr>
					<th style={styles.td}>Topic</th>
					<th style={styles.td}>Resources</th>
				</tr>
			</thead>
			<tbody>
				{renderTopics()}
			</tbody>
		</table>
	</div>
	);
};

export default TopTopics;
