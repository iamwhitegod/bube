import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../Button';
import NavItem from '../NavItem';
import NavList from '../NavList';
import DropDownMenu from '../DropDownMenu';
import DropDownItem from '../DropDownItem';

import Container from '../../layouts/Container';

import bube_logo from '../../assets/bube_logo.svg';
import user_avatar from '../../assets/user_avatar.png';

import help_center from '../../assets/message-edit_icon.svg';
import user_icon from '../../assets/user_avatar.svg';
import logout_icon from '../../assets/logout_icon.svg';
import setting_icon from '../../assets/setting_icon.svg';
import question_icon from '../../assets/message-question_icon.svg';
import notification_icon from '../../assets/notification_icon.svg';

function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { pathname } = useLocation();

  // adds Bottom Margin and backgroundColor
  // on NavBar component except on homepage
  const styleNavBar = () => {
    if (pathname === '/') return {};

    return {
      background: 'hsla(0, 0%, 97%, 1)',
      marginBottom: '6.4rem',
    };
  };

  return !isSignedIn ? (
    <nav className="navbar" style={styleNavBar()}>
      <Container>
        <div className="navbar__nav">
          <img className="navbar__logo" src={bube_logo} alt="Bube logo" />
          <NavList>
            <NavItem name="Home" />
            <NavItem name="Features" />
            <NavItem name="Download" />
            <NavItem name="About Us" />
            <NavItem name="Contact" />
          </NavList>
          <Button
            onClick={() => console.log('Goto sign up page')}
            classname="navbar__cta btn btn--primary"
          >
            {pathname === '/'
              ? 'Login / Register'
              : pathname === '/signup'
              ? 'Login'
              : 'Sign up'}
          </Button>
        </div>
      </Container>
    </nav>
  ) : (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav">
          <img className="navbar__logo" src={bube_logo} alt="Bube logo" />

          <NavList>
            <NavItem name="Home" />
            <NavItem name="Jobs" />
            <NavItem name="Download" />
            <DropDownMenu name="Help">
              <ul className="dropdown__menu">
                <DropDownItem icon={help_center} title="Help Center" />
                <DropDownItem icon={question_icon} title="Ask Question " />
              </ul>
            </DropDownMenu>
            <DropDownMenu name="Account" userAvatar={user_avatar}>
              <ul className="dropdown__menu">
                <DropDownItem icon={user_icon} title="Profile" />
                <DropDownItem
                  icon={notification_icon}
                  title="Notifications"
                  notifications={3}
                />
                <DropDownItem icon={setting_icon} title="Settings" />
                <DropDownItem icon={logout_icon} title="Logout" />
              </ul>
            </DropDownMenu>
          </NavList>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
