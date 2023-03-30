import React from 'react';
import { Link, NavLink/*, useNavigate */} from 'react-router-dom';

export const NavBar = () => {
/*    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/about')
    }, 2000);
*/
    return (
        <nav className='ui raised very padded segment' style={{marginBottom: '50px'}}>
            <a className='ui teal inverted segment' href="/router-and-redux-udemy/">Gloria</a>
            <div className='ui right floated header'>
                <button className='ui button'><Link to="/router-and-redux-udemy/">Home</Link></button>
                <button className='ui button'><NavLink to="/router-and-redux-udemy/about">About</NavLink></button>
                <button className='ui button'><NavLink to="/router-and-redux-udemy/contact">Contact</NavLink></button>
            </div>
        </nav>
    )
}