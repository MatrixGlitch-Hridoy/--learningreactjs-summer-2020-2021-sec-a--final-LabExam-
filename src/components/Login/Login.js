import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";
// import Header from "../Header";
const Login = () => {
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    async function signUp()
    {
        let items = {name,username,email,password};
        console.log(items);
        let result = await fetch("http://127.0.0.1:8000/api/registration",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(items)
        });
        result = await result.json();
        localStorage.setItem("tourist-info",JSON.stringify(result));
        history.push("/home");
    }
  return (
    <>
    {/* <Header/> */}
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h1>Login</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
              </Form.Group>
              <Button variant="primary"  onClick={signUp}>
                Login 
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
