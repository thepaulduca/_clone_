class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event){
    this.setState({
      username : event.target.value
    })
  }

  handleEmailChange(event){
    this.setState({
      email : event.target.value
    })
  }
  handlePasswordChange(event){
    this.setState({
      password : event.target.value
    })
  }

  handleSubmit(){
    console.log(this.state.username + " " + this.state.email + " " + this.state.password)
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>

          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
          </label>

          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>

            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
