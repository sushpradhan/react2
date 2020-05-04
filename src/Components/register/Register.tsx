import React, { Component, useState } from 'react'

import User from "../../model/user";

import { FormControl, TextField, Button } from '@material-ui/core'


import RegisterService from '../../services/reg.service'

import {Link} from 'react-router-dom'
const Register = (props: any) => {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [phoneNo, setPhoneNo]=useState('');
    const [errName, setrErrName] = useState('');
    const [errPass, setrErrPass] = useState('');
    const [errFname, setErrFname]=useState('');
    const [errLname, setErrLname]=useState('');
    const [errEmail, setErrEmail]=useState('');
    const [errPhone, setErrPhone]=useState('');


    const handleOnChange = (event: any) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'uName') {
            setUserName(value)
        }
        else {
            setPassword(value);
        }

    }

    const handleOnClick = () => {

        if (userName.length < 3) {
            setrErrName("Username needs min 4 char")
        }
        else if (password.length < 3) {
            setrErrPass("Passwoed needs min 4 char")
        }
        else if(firstName.length==0){
            setErrFname("First Name cannot be empty")
        }
        else if(email.length<10){
            setErrEmail("Enter valid Email Id")
        }
        else if(phoneNo.length<10){
            setErrPhone("Enter a valid phone number")
        }

        else {
            const user = new User(userName, password)
            // if (userName == "admin" && password == "admin") {
            //     alert('Sucess');
            //     let { history } = props;
            //     history.push({
            //         pathname: '/dashboard'
            //     }

            //     )
            // }
            console.log(user);
            const auth = RegisterService(user);
            auth.then((data)=>{
                
                console.log(data)
                props.updateToken(data.token);
            })

        }



    }

    return (
        <div>
            <h2>Register</h2>
            <FormControl>
                <TextField name="uName" type="text" placeholder="User Name" value={userName}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <TextField name="uPass" type="password" placeholder="Password" value={password}
                    onChange={handleOnChange} required error helperText={errPass} ></TextField>
                <br></br>
                <TextField name="fName" type="text" placeholder="First Name" value={firstName}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <TextField name="lName" type="text" placeholder="Last Name" value={lastName}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <TextField name="email" type="text" placeholder="Email Id" value={email}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <TextField name="phone" type="text" placeholder="Phone Number" value={phoneNo}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <Button color="primary" onClick={handleOnClick}> Register</Button>
                <Link to="/Login"> Already Registered? Click here to login</Link>
            </FormControl>

        </div>
    )

}




export default Register
