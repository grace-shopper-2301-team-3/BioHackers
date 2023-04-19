import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
<<<<<<< HEAD
import Cart from '../cart/Cart';
=======
import Cart from '../cart/Cart'

>>>>>>> 847273e8dd3ee7e55da2032e947abe797b184ceb

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.me.id);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1>BioHackers</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to={`/users/${id}`}>Profile</Link>
            <Link to='/cart' element={<Cart name='cart' displayName='Cart' />}> Cart </Link>

            {isAdmin && (
              <>
                <Link to="/users">Users</Link>
              </>
            )}
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
