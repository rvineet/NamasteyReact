import React from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// svery important to learn component lifecycles

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    console.log("child constructor is called");
  }
  async componentDidMount() {
    console.log("child componentDidMount is called");
    const data = await fetch("https://api.github.com/users/rvineet");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json, "===json==");
  }

  componentDidUpdate() {
    console.log("component did update is called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }
  render() {
    console.log("child render is called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count = {this.state.count}</h1>
        <button onClick={() => {
            this.setState({
                count:this.state.count + 1
            })
        {/* }}>Count Increase</button> */}
        {/* <h1>Count2 = {this.state.count2}</h1> */}
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: rvineet663</h4>
      </div>
    );
  }
}
export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
