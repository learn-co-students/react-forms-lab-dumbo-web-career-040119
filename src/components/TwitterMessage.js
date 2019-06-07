import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ""
    };
  }
  
  handleChange = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.msg} />
        {this.props.maxChars-this.state.msg.length}
      </div>
    );
  }
}

export default TwitterMessage;
