import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';

const EditTopic = (props) => {

	const [topicDescription, setTopicDescription] = useState("");
	const {userId, editingTopic} = useContext(UserContext);

	useEffect( 
		() => {
			fetch(`http://127.0.0.1:8080/topics/${editingTopic}`)
			.then(res => res.json())
			.then(
				(result) => {
					setTopicDescription(result.topicDescription);
				}
			)
		},
	[editingTopic]);

	const handleInputChange = (args) => {
		setTopicDescription(args.target.value);
	}

	const editTopic = () => {
		let newTopic = {topicDescription: topicDescription, ownerId: userId};
		const response = fetch(`http://127.0.0.1:8080/topics/${editingTopic}`,{
			method: "PUT",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(newTopic)
		})
		.then(res => res.json())
		.then((result) => {
			props.changePage("Topics");
		});
	} 

  	return (
		<div style={{display:"grid", placeItems:"center"}}>
			<h1>Edit Topic</h1>
			<label for="TopicDescription">Name:</label>
			<input id="TopicDescription" name="TopicDescription" value={topicDescription} onChange={handleInputChange} style={styles.input} placeholder="Topic Description" type="text" required></input>
			<input onClick={editTopic} style={styles.blueButton} type="button" value="Save"></input>
			<p style={{textDecoration:"underline"}} onClick={() => props.changePage("TopTopics")}>Back to list</p>
		</div>
	);
};

export default EditTopic;
