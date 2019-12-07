import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Nikhil Dhakal",
        email: "nickarsenal007@gmail.com",
        phone: "+977-9841377539"
      },
      {
        id: 2,
        name: "Neeru Dhakal",
        email: "dhakalneeru@hotmail.com",
        phone: "+977-9851042790"
      },
      {
        id: 3,
        name: "Punya Prasad Dhakal",
        email: "punyadhakal@gmail.com",
        phone: "+977-9841300275"
      }
    ]
  };

  //Raising and handling events
  handleDelete = contactId => {
    const contacts = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
