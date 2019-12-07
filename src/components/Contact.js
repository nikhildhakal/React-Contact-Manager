import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
	state = {
		showContactInfo: false
	}

	handleClick = e => {
		this.setState({
			showContactInfo: !this.state.showContactInfo
		})
	};

	render() {
		const { id, name, email, phone } = this.props.contact; // Use of destructure, props come from Contacts
		const { showContactInfo } = this.state; // Get showContactInfo from state

		return (
			<div className="card card-body mb-3">
				<h4>
					{ name } <i onClick={this.handleClick} className="fas fa-sort-down"></i>
					<button 
						onClick={() => this.props.onDelete(id)} 
						style={{float:'right'}} 
						className="btn btn-danger btn-sm">
						&times;
					</button>
				</h4>
				{ showContactInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: { email }</li>
						<li className="list-group-item">Phone: { phone }</li>
					</ul>
				) : null }
						
			</div>
		)
	}	
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
}

export default Contact;