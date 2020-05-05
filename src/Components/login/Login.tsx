import React, { useState } from 'react'

import User from "../../model/user";

import { FormControl, TextField, Button} from '@material-ui/core'
// import  Register  from "./Components/register/Register";
import {Link} from 'react-router-dom'

import LoginService from '../../services/auth.service'


const Login = (props: any) => {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    const [errName, setrErrName] = useState('');
    const [errPass, setrErrPass] = useState('');
   


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
            const auth = LoginService(user);
            auth.then((data)=>{
                
                console.log(data)
                props.updateToken(data.token);
            })

        }



    }

    return (
        <div >
            <h2>Login</h2>
            <FormControl>
                <TextField name="uName" type="text" placeholder="User Name" value={userName}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <TextField name="uPass" type="password" placeholder="Password" value={password}
                    onChange={handleOnChange} required error helperText={errPass} ></TextField>
                <br></br>
                <Button id="login" color="primary" onClick={handleOnClick}> Login</Button>
                <Link to="/Register"> Not Registered? Click here</Link>
            </FormControl>

        </div>
    )

}




export default Login
