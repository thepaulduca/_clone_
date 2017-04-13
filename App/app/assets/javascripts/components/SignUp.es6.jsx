class SignUp extends React.Component {
  render(){
    return(
      <div>
        <form>
          <label>
            Username:
            <input type="text" name="name" />
          </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
