import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://movie-backend-9sty.onrender.com/api/auth/login",
        {
          ...inputValue,
        }
      );
      console.log(data);
      const { message } = data;
      if (message) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <Logincontainer>
        <Centrecontainer>
            <Heading>Login</Heading>
            <Lable>Email:</Lable>
            <Input type='text' name="email" value={email} onChange={handleOnChange}/>
            <Lable>Password:</Lable>
            <Input type='password' name="password" value={password} onChange={handleOnChange}/>
            <Button type="submit" onClick={handleSubmit}> Submit</Button>
            <p style={{marginTop:"5px"}}>Create new account ? <Link to="/signup" style={{color:"white"}}>Signup</Link></p>
        </Centrecontainer>
    </Logincontainer>
  )
}

export default Login

const Logincontainer = styled.div`
    width: 100vw;
    height:100vh;
    padding: 10px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white
`
const Centrecontainer = styled.div`
    width: 30vw;
    min-width: 300px;
    margin: 10px;
    padding: 15px;
    background-color:transparent;
    box-shadow: 0 0 10px 5px blue;
    border-radius: 10px;

`

const Heading = styled.h1`
    padding: 5px;
    text-align: center;
`
const Lable = styled.label`
    display: block;
    font-size: 20px;
    padding: 10px 0;
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
`
const Button = styled.button`
  width: 100%;
  height: 30px;
`