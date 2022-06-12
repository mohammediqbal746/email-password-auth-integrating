import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/' >Home</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ?
                    <button onClick={handleSignOut}>Signout</button>
                    :
                    <Link to='/login'>Login</Link>
                }
                <Link to='/register'>Register</Link>
                <Link to='/product'>Product</Link>
                <Link to='/review'>Review</Link>
            </nav>

        </div>
    );
};

export default Header;