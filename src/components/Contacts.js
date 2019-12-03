import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'Nikhil Dhakal',
				email: 'nickarsenal007@gmail.com',
				phone: '+977-9841377539'
			},
			{
				id: 2,
				name: 'Neeru Dhakal',
				email: 'dhakalneeru@hotmail.com',
				phone: '+977-9851042790'
			}
		]
	};

	render() {
		const { contacts } = this.state;

		return (
			<div>
				{
					contacts.map(contact =>	(
						<Contact 
							key = {contact.id}
							contact = { contact }
						/>
					))
				}
			</div>
		)
	}
}

export default Contacts;