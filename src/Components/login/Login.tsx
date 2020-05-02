import React, { Component, useState } from 'react'



import { FormControl, TextField, Button } from '@material-ui/core'





const Login = (props: any) => {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errName, setrErrName] = useState('');
    const [errPass, setrErrPass] = useState('');


    const handleOnChange = (event: any) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if (name == 'uName') {
            setUserName(value)
        }
        else {
            setPassword(value);
        }

    }

    const handleOnClick = () => {

        if (userName.length < 3) {
            setrErrName("Username needs min 6 char")
        }
        else if (password.length < 3) {
            setrErrPass("Passwoed needs min 4 char")
        }
        else {
            
            if (userName == "admin" && password == "password") {
                alert('Sucess');
                let { history } = props;
                history.push({
                    pathname: '/Dashboard'
                }

                )
            }
          

        }



    }

    return (
        <div>
            <h4>Login</h4>
            <FormControl>
                <TextField name="uName" type="text" placeholder="User Name" value={userName}
                    onChange={handleOnChange} required error helperText={errName}></TextField>
                <br></br>
                <TextField name="uPass" type="password" placeholder="Password" value={password}
                    onChange={handleOnChange} required error helperText={errPass} ></TextField>
                <br></br>
                <Button color="primary" onClick={handleOnClick}> Login</Button>
            </FormControl>

        </div>
    )

}




export default Login
