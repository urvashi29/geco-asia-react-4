import React, { useState } from "react";
import LifecycleComponent from "./LifecycleComponent";
import UseEffectHook from "./UseEffectHook";
import _ from 'lodash';

// hooks was introduced in React 16.8 (2019)
const App = () => {
  // [state variable, method to update it]
  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(90);
  const [isMarried, setIsMarried] = useState(true);

  const [person, setPerson] = useState({
    name: "alex",
    designation: "developer",
  });

  const [arr, setArr] = useState([90, 39, 20, 48]);

  const [emp, setEmp] = useState([
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ]);

  const handleUpdate = () => {
    setFirstName("harry");
    setAge(10);

    setPerson({ ...person, designation: "manager" });

    setArr([...arr, 100, 200]);

    //updating name property in first index of emp array of object
    let newArr = [...emp];
    newArr[1].name = "d";
    setEmp(newArr);

    //lodash
    console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
  };

  return (
    <div>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{person.name}</p>
      <p>{person.designation}</p>
      <p>
        {arr.map((e) => (
          <p>{e}</p>
        ))}
      </p>
      <p>
        {emp.map((e) => {
          return <p key={e.id}>{e.name}</p>;
        })}
      </p>

      <button onClick={handleUpdate}>Update</button>

      <h4>Lifecycle component methods</h4>
      <LifecycleComponent />

      <UseEffectHook />
    </div>
  );
};

export default App;

// https://rapidapi.com/SAdrian/api/moviesdatabase

// https method : get, post, update, delete

// free get api
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// API integration
// AJAX
// axios
// fetch

// Post request
// let api = https://reqres.in/api/users
// let data =  {
//   "name": "morpheus",
//   "job": "leader"
// }

// axios.post(api, data).then(() => {}).catch(() => {});
