import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     let result = await fetch(`http://localhost:3001/users/${id}`,{
//         method:'put'
//     });
    
//     result = await result.json();
//     console.log(setUser(result));
//     // history.push("/");
//   };
//   const loadUser = async (e) => {
//     const result = await axios.get(`http://localhost:3001/users/${id}`);
//     setUser(result.data);
//   };
  const loadUser = async (e) => {
    let result = await fetch(`http://localhost:3001/users/${id}`,{
        method:'GET'
    });
    
    result = await result.json();
    // console.log(result);
    setUser(result);
}
  return (
    <div class="container">
      <h1 className="mb-5">Edit user</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => onSubmit(e)}>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Enter Name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="username"
                value={username}
                class="form-control"
                placeholder="Enter User Name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="email"
                value={email}
                class="form-control"
                placeholder="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Enter Phone Number"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="website"
                value={website}
                class="form-control"
                placeholder="Enter Website Name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" class="btn btn-warning">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
