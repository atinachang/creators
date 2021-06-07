import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.png";

const Nav = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const { auth, setSearch } = props;
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
      <Fragment>
        <ul>
          <li className="nav_logo">
            <img src={logo} alt="wecreate logo" />
          </li>
          <li>
            <NavLink to="/create" tabIndex="0" onClick={handleCloseMenu}>
              Contribute
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/faq" tabIndex="0" onClick={handleCloseMenu}>
              About
            </NavLink>
          </li>
          <li className="item">
            <a
              href="mailto:to.wecreate@gmail.com"
              tabIndex="0"
              onClick={handleCloseMenu}>
              Contact
            </a>
          </li>
        </ul>
      </Fragment>
    );
  };

  const searchSpace = (e) => {
    let keyword = e.target.value;
    setSearch(keyword);
    setSearchVal(keyword);
  };

  const reset = (e) => {
    setSearchVal("");
    setSearch(null);
  };
  return (
    <nav>
      <div className="ui search wrapper">
        <div className="mobile_home">
          <NavLink
            to="/"
            className="branding"
            onClick={(e) => reset(e)}
            tabIndex="0">
            connect. create. repeat
          </NavLink>

          <div className="mobile_nav">
            <div className="menu_open">
              <button
                className="no_appearance"
                onClick={handleOpenMenu}
                tabIndex="0"
                aria-label="hamburger mobile menu">
                <GiHamburgerMenu title="hamburger icon" />
              </button>
            </div>
            <div
              className={`popout_menu ${isMenuPopoutOpen ? "open" : "closed"}`}>
              <div className="menu_close">
                <button
                  onClick={handleCloseMenu}
                  className="no_appearance"
                  tabIndex="0">
                  <ImCross />
                </button>
              </div>
              <NavList />
            </div>
          </div>
        </div>

        <NavLink to="/search">
          <label className="sr-only">Search by Keyword</label>
          <input
            type="text"
            className="prompt"
            placeholder="Search by Keyword"
            value={searchVal}
            onChange={(e) => searchSpace(e)}
            tabIndex="0"
          />
        </NavLink>
      </div>
      <div className="desktop_nav">
        <NavList />
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
