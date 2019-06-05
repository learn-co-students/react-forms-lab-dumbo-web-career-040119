import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {
      chars: 140,
      message: "Your message here..."
    };
  }

  handleChange = (event) => {
    this.setState({
      chars: this.state.chars - 1,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.state.chars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
