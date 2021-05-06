import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Nav = (props) => {
  const [searchVal, setSearchVal] = useState('');
  const { auth, app, setSearch } = props;
  const links = auth.uid ? <SignedInLinks /> : null;
  const [isMenuPopoutOpen, setIsMenuPopoutOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuPopoutOpen(false);
  };

  const handleOpenMenu = () => {
    setIsMenuPopoutOpen(true);
  };

  const NavList = () => {
    return (
      <ul>
        <li>
          <NavLink
            to='/'
            className='branding'
            style={{ color: 'rgb(252, 163, 17)' }}
            tabIndex='0'
            onClick={handleCloseMenu}>
            <h1 className='h6'>
              {app}
              <sup>beta</sup>
            </h1>
          </NavLink>
        </li>
        <li>
          <a
            href='https://airtable.com/shrxJ9FDlczEjIF2m'
            target='blank'
            tabIndex='0'
            onClick={handleCloseMenu}>
            <strong style={{ textDecoration: 'underline' }}>
              beta feedback form
            </strong>
          </a>
        </li>
        <li>
          <NavLink to='/create' tabIndex='0' onClick={handleCloseMenu}>
            Contribute
          </NavLink>
        </li>
        <li className='item'>
          <NavLink to='/faq' tabIndex='0' onClick={handleCloseMenu}>
            About
          </NavLink>
        </li>
      </ul>
    );
  };

  const searchSpace = (e) => {
    let keyword = e.target.value;
    setSearch(keyword);
    setSearchVal(keyword);
  };

  const reset = (e) => {
    setSearchVal('');
    setSearch(null);
  };
  return (
    <nav>
      <div className='ui search'>
        <NavLink
          to='/'
          className='branding'
          onClick={(e) => reset(e)}
          tabIndex='0'>
          connect. create. repeat
        </NavLink>
        <NavLink to='/search'>
          <label className='sr-only'>Search by Keyword</label>
          <input
            type='text'
            className='prompt'
            placeholder='Search by Keyword'
            value={searchVal}
            onChange={(e) => searchSpace(e)}
            tabIndex='0'
          />
        </NavLink>
      </div>
      <div className='desktop_nav'>
        <NavList />
      </div>

      <div className='mobile_nav'>
        <div className='menu_open'>
          <button
            className='no_appearance'
            onClick={handleOpenMenu}
            tabIndex='0'
            aria-label='hamburger mobile menu'>
            <GiHamburgerMenu title='hamburger icon' />
          </button>
        </div>
        <div className={`popout_menu ${isMenuPopoutOpen ? 'open' : 'closed'}`}>
          <div className='menu_close'>
            <button
              onClick={handleCloseMenu}
              className='no_appearance'
              tabIndex='0'>
              <ImCross />
            </button>
          </div>
          <NavList />
        </div>
      </div>
      {auth.isLoaded && links}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Nav);
