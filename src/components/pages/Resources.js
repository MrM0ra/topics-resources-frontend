import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';
import ButtonAtom from '../atoms/ButtonAtom';

const Resources = (props) => {
	
	const {userId, changeEditingResource} = useContext(UserContext);

	const [resources, setResources] = useState([]);

	useEffect( 
		() => {
			fetch(`http://127.0.0.1:8080/resources/byUser/${userId}`)
			.then(res => res.json())
			.then(
				(result) => {
					setResources(result);
				}
			)
		},
	[userId]);

    const editPass = (event) => {
        changeEditingResource(+event.target.innerHTML);
		props.changePage("EditResource");
    }

	const renderResources = () => {
		return resources.map(resource => (
			<tr key={resource.resourceId}>
                <td style={styles.td}>
					<p onClick={editPass}>
						<u>{resource.resourceId}</u>
					</p>
				</td>
				<td style={styles.td}>{resource.resourceName}</td>
			</tr>
		));
	}

	return (
		<div>
			{resources.length>0 ? 
			<div>
				<h1>My resources</h1>
				<table style={styles.table}>
				<thead>
					<tr>
						<th style={styles.td}>Id</th>
						<th style={styles.td}>Description</th>
					</tr>
				</thead>
				<tbody>
					{renderResources()}
				</tbody>
				</table>
                <input value="Add New Resource" style={styles.blueButton} onClick={() => props.changePage("AddResource")}></input>
            </div>
				: 
			<div>
				<img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt=""></img>
				<p>It seems like you haven't created any resources yet</p>
                <input value="Add New Resource" style={styles.blueButton} onClick={() => props.changePage("AddResource")}></input>
            </div>
		}
		<p style={{textDecoration:"underline"}} onClick={() => props.changePage("TopTopics")}>Back to list</p>
		</div>
	);
};

export default Resources;
