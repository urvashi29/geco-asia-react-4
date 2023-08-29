import React, { Component } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

class LifecycleComponent extends Component {
  //initialization
  constructor() {
    super();
    // this is referring to LifecycleComponent
    this.state = {
      name: "alex",
      users: [],
    };
  }

  //   Mounting
  //(deprecated)
  //   componentWillMount = () => {
  //     console.log("will mount");
  //     this.setState({
  //       name: "alina",
  //     });
  //   };

  static getDerivedStateFromProps = (props, state) => {
    //state update
    console.log("get derived", state);
    return null;
  };

  componentDidMount = () => {
    //api calls
    console.log("component did mount");

    // axios.get(api).then().catch();

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        console.log(response.data);

        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleUpdate = () => {
    this.setState({
      name: "harry",
    });
  };

  //   Updation
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("should component update", nextState);
    // if() {

    // }

    // always return boolean based on condition
    return true;
  };

  //   deprecated
  //   componentWillUpdate = (nextProps, nextState) => {
  //     //animations
  //     console.log("component will update");
  //   };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(prevState);
    return "get snapshot";
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("component did update", prevState, snapshot);
  };

  componentWillUnmount = () => {
    // element.removeListerener()
  };

  render() {
    console.log(this.state.users);

    const userList = this.state.users.length ? (
      this.state.users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <p>{user.name}</p>
            <p>{user.address.street}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </React.Fragment>
        );
      })
    ) : (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );

    return (
      <div>
        {this.state.name}
        <button onClick={this.handleUpdate}>Update Name</button>

        {userList}
      </div>
    );
  }
}

export default LifecycleComponent;
