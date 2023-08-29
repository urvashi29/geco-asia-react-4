import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";

const UseEffectHook = () => {
  const [first, setFirst] = useState("alina");
  const [users, setUsers] = useState([]);

  // componentDidMount
  useEffect(() => {
    //api calls
    console.log("Implementing comppnnet did mount using useEffect");

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // componnetDidUpdate
  //   useEffect(() => {
  //     console.log("first");
  //   }, [first]);

  //   componentwillumount
  //   useEffect(() => {
  //     console.log("attach event");
  //     return () => {
  //       console.log("remove event");
  //     };
  //   });

  const userList = users.length ? (
    users.map((user) => {
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

  return <div>{userList}</div>;
};

export default UseEffectHook;
