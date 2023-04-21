import React, {Fragment} from 'react';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/helper';

const Menu = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const activeStyle = {
    color: '#2ecc72'
  };

  return (
    <div>
      <ul className='nav nav-tabs bg dark'>
        <li className='nav-item'>
          <NavLink to='/' end className='nav-link' activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
       {!isAuthenticated() && (
        <Fragment>
           <li className='nav-item'>
          <NavLink to='/signin' className='nav-link' activeStyle={activeStyle}>
            Signin
          </NavLink>
          </li>
        </Fragment>
       )}
        
        {isAuthenticated() && (
          <Fragment>
            <li className='nav-item'>
          <NavLink to='/user/dashboard' className='nav-link' activeStyle={activeStyle}>
             Dashboard
          </NavLink>
          </li>

          <li className='nav-item'>
          <NavLink to='/cart' className='nav-link' activeStyle={activeStyle}>
             Cart
          </NavLink>
          </li>

          <li className='nav-item'>
          <span
            onClick={() => {
              signout(() => {
                <NavLink to="/"/>
              });
            }}
            className='nav-link text-warning'
          >
            <NavLink to='/signout' className='nav-link' activeStyle={activeStyle}>
              Signout
            </NavLink>
          </span>
        </li>

          </Fragment>

          


          
        )}
        <li className='nav-item'>
          <NavLink to='/signup' className='nav-link' activeStyle={activeStyle}>
            Signup
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Menu;
