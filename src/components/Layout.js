import React from 'react';
import logo from './assets/images/logo.png';
import './bootstrap.min.css';
import './bootstrap-theme.css';
import './style.css';
import './font-awesome.min.css';
import './isotope.css';
// import './camera.css';



const Layout = (props) => {
  return (
    <div>
    <div class="navbar navbar-inverse">
  <div class="container">
    <div class="navbar-header">

      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>

      <img src={logo}></img>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav pull-right mainNav">
        <li class="active">Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Price</li>
        <li>Videos</li>
        <li class="dropdown">
          Pages <b class="caret"></b>
          <ul class="dropdown-menu">
            <li>Right Sidebar</li>
            <li>Dummy Link1</li>
            <li>Dummy Link2</li>
            <li>Dummy Link3</li>
          </ul>
        </li>
        <li>Contact</li>

      </ul>
    </div>

  </div>
  </div>
    </div>
  );
}

export default Layout;
