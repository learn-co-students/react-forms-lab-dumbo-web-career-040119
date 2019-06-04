import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,

    }, console.log(this.state.username))
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,

    }, console.log(this.state.password))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    // console.log(e.target.children[0].firstChild.lastChild.value)
    // this.props.handleLogin()
    // const username = e.target.children[0].firstChild.lastChild.value
    // const password = e.target.children[1].firstChild.lastChild.value
    if(this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }else{
      return false
    }
  }

  render() {
    return (
      <form  onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input type="text" name="username" id="username" onChange={event=> this.handleUsername(event)} value={this.state.username} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" name="password" id="password" onChange={event=> this.handlePassword(event)} value={this.state.password} required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
