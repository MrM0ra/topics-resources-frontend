import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { styles } from '../../styles/styles';

const Resources = (props) => {
	
	const {userId} = useContext(UserContext);

	const [resources, setResources] = useState([]);

	useEffect( 
		() => {
			fetch(`http://127.0.0.1:8080/resources/byUser/${userId}`)
			.then(res => res.json())
			.then(
				(result) => {
					setResources(result);
					console.log(result);
				}
			)
		},
	[]);

	const renderResources = () => {
		return resources.map(resource => (
			<tr key={resource.resourceId}>
				<td style={styles.td}>{resource.resourceId}</td>
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
            </div>
                : 
            <div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png"></img>
                <p>It seems like you haven't created any resources yet</p>
            </div>
        }			
		</div>
	);
};

export default Resources;
