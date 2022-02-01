import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';

const AddResource = (props) => {

	const {userId} = useContext(UserContext);

	const [topics, setTopics] = useState([]);

	const [resDescription, setResDescription] = useState("");
	const [resUrl, setResUrl] = useState("");
	const [resTopic, setResTopic] = useState(null);

	const handleDescriptionChange = (args) => {
		setResDescription(args.target.value);
	}

	const handleUrlChange = (args) => {
		setResUrl(args.target.value);
	}

	const handleTopicChange = (args) => {
		setResTopic(args.target.value);
	}

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


	const renderOptions = () => {
		return topics.map(option => <option value={option.topicId}>{option.topicDescription}</option>);
	}

	const postNewResource = () => {
		let newResource = {resourceName: resDescription, resourceURL: resUrl, topicId: +resTopic, ownerId: userId}
		const response = fetch("http://127.0.0.1:8080/resources",{
			method: "POST",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(newResource)
		})
		.then(res => res.json())
		.then((result) => {
			props.changePage("Resources");
		});
	}

	return (
		<div style={{display:"grid", placeItems:"center"}}>
			<h1>Add new resource</h1>
			<input  id="ResourceDescription" name="ResourceDescription" onChange={handleDescriptionChange} style={styles.input} placeholder="Resource Description" type="text" required></input>
			<input  id="ResourceUrl" name="ResourceUrl" onChange={handleUrlChange} style={styles.input} placeholder="Resource Url" type="text" required></input>
			<select onChange={handleTopicChange} style={{width:"50%"}}>
				{renderOptions()}
			</select>
			<input style={styles.blueButton} onClick={postNewResource} type="button" value="Save"></input>
			<p style={{textDecoration:"underline"}} onClick={() => props.changePage("TopTopics")}>Back to list</p>
		</div>
  );
};

export default AddResource;
