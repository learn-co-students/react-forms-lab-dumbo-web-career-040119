import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      characters: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      characters: this.state.characters-1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} id="message" />
        <h4>{this.state.characters} remaining characters</h4>
      </div>
    );
  }
}

export default TwitterMessage;
