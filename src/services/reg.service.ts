// Create login auth then invoke in Login componnet

import User from '../model/user';

// login Service
const RegisterService = async (user: User) => {

    //console.log(user);
    let url = "http://localhost:3001/auth/v1"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    return await response.json();
}

export default RegisterService
