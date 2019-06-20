import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  updateTweet = (e) => {
    console.log(e.target.value)
    this.setState({
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateTweet} type="text" name="message" id="message" value={this.state.tweet} />
        <strong>Characters left: {this.props.maxChars - this.state.tweet.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
