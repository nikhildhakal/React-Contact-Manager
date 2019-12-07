import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component
const Header = props => {
	const { branding } = props; // Use of destructure
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">
					{ branding }
				</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a href="/" className="nav-link">
								Home
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
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