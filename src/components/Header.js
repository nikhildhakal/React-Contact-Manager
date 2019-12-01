import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
	const { branding } = props; // Use of destructure
	return (
		<div>
			<h1>{ branding }</h1>
		</div>
	);
};

// Default Prop as an Object
Header.defaultProps = {
	branding: 'My App'
};

// Prop Types
Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;