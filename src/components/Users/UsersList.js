import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "UserA" },
    { id: 2, name: "UserB" },
    { id: 3, name: "UserC" },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1> Users List </h1>
      <ul>
        {users.map((user) => (
          //   <li key={user.id}> {user.name} </li>
          <li key={user.id}>
            <Link to={`${user.id}`}> {user.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
