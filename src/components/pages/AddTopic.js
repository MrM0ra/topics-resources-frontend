import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import ButtonAtom from '../atoms/ButtonAtom';
import { styles } from '../../styles/styles';

const AddTopic = (props) => {

	const [topicDescription, setTopicDescription] = useState("");
	const {userId} = useContext(UserContext);

	const handleInputChange = (args) => {
		setTopicDescription(args.target.value);
	}

	const postNewTopic = () => {
		let newTopic = {topicDescription: topicDescription, ownerId: userId};
		const response = fetch("http://127.0.0.1:8080/topics",{
			method: "POST",
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
			<h1>Add Topic</h1>
			<label for="TopicDescription">Name:</label>
			<input  id="TopicDescription" name="TopicDescription" onChange={handleInputChange} style={styles.input} placeholder="Topic Description" type="text" required></input>
			<input onClick={postNewTopic} style={styles.blueButton} type="button" value="Save"></input>
			<p style={{textDecoration:"underline"}} onClick={() => props.changePage("TopTopics")}>Back to list</p>
		</div>
	);
};

export default AddTopic;
