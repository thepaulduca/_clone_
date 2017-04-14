class Login extends React.Component {
  constructor(){
    super();
    this.state ={
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(){
    var data = [this.state.username, this.state.password]
    var csrfToken = document.querySelectorAll('[name="csrf-token"]')[0].getAttribute("content");  //
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
      params: {
        authenticity_token: csrfToken
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
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
            Password:
            <input type="password" name="name" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>

            <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
