import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No:</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              name="submit"
              className="btn btn-secondary btn-sm btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
