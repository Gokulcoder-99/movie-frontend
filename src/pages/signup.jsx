import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
    const [inputValue,setInputValue] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        dob:"",
        bio:"",
        avatar:""
    })
    const { name,email,password,confirmPassword,dob,bio,avatar } = inputValue;
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
      position: "bottom-right",
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://movie-backend-9sty.onrender.com/api/auth/signup",
          {
            ...inputValue,
          }
        );
        const { message } = data;
        if (message) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/");
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
        username: "",
      });
    };
  return (
    <Signupcontainer>
        <Centrecontainer>
            <Heading>Signup</Heading>
            <Lable>Name:</Lable>
            <Input type='text' name="name" value={name} onChange={handleOnChange}/>
            <Lable>Email:</Lable>
            <Input type='text' name="email" value={email} onChange={handleOnChange}/>
            <Lable>Password:</Lable>
            <Input type='password' name="password" value={password} onChange={handleOnChange}/>
            <Lable>Confirm Password:</Lable>
            <Input type='password'name="confirmPassword" value={confirmPassword}  onChange={handleOnChange}/>
            <Lable>DOB:</Lable>
            <Input type='text' name="dob" value={dob} onChange={handleOnChange}/>
            <Lable>Bio:</Lable>
            <Input type='text' name="bio" value={bio} onChange={handleOnChange}/>
            <Lable>Profile Image:</Lable>
            <Input type='file' name="avatar" value={avatar} onChange={handleOnChange}/>
            <Button type="submit" onClick={handleSubmit}> Submit</Button>
            <p style={{marginTop:"5px"}}>Already have account ? <Link to="/" style={{color:"white"}}>Login</Link></p>
        </Centrecontainer>
    </Signupcontainer>
  )
}

export default Signup

const Signupcontainer = styled.div`
    width: 100vw;
    height:100vh;
    padding: 10px;
    background-color: black;
    display: flex;
    justify-content: center;
    color:white
`
const Centrecontainer = styled.div`
    width: 30vw;
    min-width: 300px;
    margin: 10px;
    padding: 0 15px;
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
    padding: 5px 0;
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 10px;
    border-radius: 5px;
`
const Button = styled.button`
  width: 100%;
  height: 30px;
`