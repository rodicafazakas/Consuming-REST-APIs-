import { useState, useEffect } from "react";

const User = () => {
  const id = window.location.pathname.split("/")[2];

  const [user, setUser] = useState({});
  const [userAddress, setUserAddress] = useState({});
  const [userCompany, setUserCompany] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUser(data);
        setUserAddress(data.address);
        setUserCompany(data.company);
      });
  }, [id]);

  return (
    <>
      <h1>User Details</h1>
      <p> User ID : {id} </p>
      <p> Email: {user.email} </p>
      <p> Phone: {user.phone} </p>
      <p> Website: {user.website} </p>
      <p> City: {userAddress.city} </p>
      <p> Company: {userCompany.name} </p>
    </>
  );
};

export default User;
