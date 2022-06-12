import React from 'react';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>signIn Login</button></div>
            <form>
                <input type="email" name="" id="" />
                <br />
                <input style={{ margin: '20px' }} type="password" name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;