class App extends React.Component {

  constructor(){
    super();
    this.state = {
      signningUp: null,
      loggingIn: null
    }
      this.handleSignUp = this.handleSignUp.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
  }

  handleSignUp(){
    this.setState({
      signningUp:true
    })
  }

  handleLogin(){
    this.setState({
      loggingIn:true
    })
  }


  render(){
    let signUpForm;
    let loginForm;

    if(this.state.signningUp) {
      signUpForm = <SignUp/>;
    }

    if(this.state.loggingIn) {
      loginForm = <Login/>;
    }

    return(
      <div>
        <div>
          <h1>Welcome to the great Blog Application!</h1>
        </div>
        <div>
          <button onClick={this.handleSignUp}>Sign Up</button>
          <button onClick={this.handleLogin}>Login</button>
        </div>
        <div className="form-container">
          {signUpForm}
          {loginForm}
        </div>
      </div>
    )
  }
}
