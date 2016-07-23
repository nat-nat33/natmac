//import dependencies
import React, { Component } from 'react';

//import component modules
import HeaderNav from './partials/headerNav.js';
import HeaderLogo from './partials/headerLogo.js';

//import styles
import styles from './header.scss';

//export module
export default

//creating global nav element
class Header extends Component {
  render(){
    return (
      <header className= "clearfix">
      <div className="container">
          <HeaderLogo/>
          <headerNav/>
      </div>
    )
  }
}