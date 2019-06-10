import React, { Component } from "react";
const API_URL = "http://localhost:5000";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: Boolean(localStorage.getItem("token"))
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState(state => ({ [name]: value }));
  };

  login = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      });
      const { token, message } = await response.json();
      if (token) {
        localStorage.setItem("token", token);
        this.setState(() => ({ isLoggedIn: true }));
      }
      console.log(message);
    } catch (err) {
      console.log(err);
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState(() => ({ isLoggedIn: false }));
  };

  render() {
    const { isLoggedIn, email, password } = this.state;
    return (
      <div>
        {!isLoggedIn ? (
          <form onSubmit={this.login}>
            <input
              onChange={this.onChange}
              value={email}
              name="email"
              placeholder="email"
            />
            <input
              onChange={this.onChange}
              value={password}
              name="password"
              placeholder="password"
            />
            <button type="submit">Log In</button>
          </form>
        ) : (
          <div>
            {" "}
            <button onClick={this.logout}>Log Out</button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
