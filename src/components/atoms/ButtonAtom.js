import React from 'react';

const ButtonAtom = (props) => {

	const handleClick = () => {
		props.handleClick();
	}

	return (
		<button onClick={handleClick} style={props.style}>
			{props.text}
		</button>
	);
}

export default ButtonAtom;
