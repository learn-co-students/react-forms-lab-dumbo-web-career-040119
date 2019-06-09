import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      message: "",
      charCount: 0
    };
  }

  handleChange = (event) => {
      this.setState({
        message: event.target.value,
        charCount: event.target.value.length
      })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleChange(event)} value={this.state.message} />
        <p>Remaining Characters: {this.state.maxChars - this.state.charCount}/140</p>
      </div>
    );
  }
}

export default TwitterMessage;
