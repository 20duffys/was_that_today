import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import "../stylesheets/Login.css"

/*
 Written by Austin
*/
class Login extends Component {

  handleLogin(event){
    event.preventDefault();
    let userName = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    //only go to the page if the username value isn't null or the length isn't zero
    //TODO need to do user auth and validation with firebase
    if(userName !== null || userName.length !== 0){
      const path = `/login/userPanel/${userName}`
      browserHistory.push(path);
    }
  }

  render(){
    return(
      <div id='login'>
        <form onSubmit={(event) => this.handleLogin(event)}>
          <label>UserName: </label>
          <input type="text"></input>
          <label>Password: </label>
          <input type="password"></input>
          <button type="submit">Login</button>
          <Link to="/login/userPanel/Guest">Login as Guest</Link>
        </form>
          <p>Don't have an account <Link to="login/newUser">create account</Link></p>
        {this.props.children}
      </div>
    )
  }
}

export default Login
