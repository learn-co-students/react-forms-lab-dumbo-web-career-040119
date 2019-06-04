import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
      // counter: (this.props.maxChars - this.state.message.length)
    };
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value,

    }, console.log(this.state.message.length))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Total Allowed Characters: {this.props.maxChars}</p>
        <p>Characters Remaining: {this.props.maxChars - this.state.message.length}</p>
        <input type="text" name="message" id="message" onChange={event=> this.handleMessage(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
