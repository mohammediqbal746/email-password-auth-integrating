import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Please Register Now</h2>
            <form className='register'>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='your Email' name="" id="" />
                <br />
                <input type="password" placeholder='type your password' name="" id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;