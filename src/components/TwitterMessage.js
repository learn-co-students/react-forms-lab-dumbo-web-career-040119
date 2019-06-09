import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      message : event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message} onChange={ this.handleChange } />
        <p> { this.state.maxChars } remaining characters </p>
      </div>
    );
  }
}

export default TwitterMessage;
