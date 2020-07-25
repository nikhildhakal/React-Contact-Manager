import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                placeholder="Enter Name ..."
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Enter Email ..."
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No:</label>
              <input
                type="text"
                name="phone"
                value={phone}
                className="form-control"
                placeholder="Enter Phone ..."
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              name="submit"
              className="btn btn-secondary btn-sm btn-block"
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
