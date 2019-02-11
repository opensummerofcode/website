import React from 'react';
import { Link } from 'react-router-dom';
import TextLogo from './Logo/TextLogo';
import ImgLogo from './Logo/ImgLogo';
import Tab from '../../UI/Tab';

const Navigation = () => {
  return (
    <header>
      {/*<!-- topbar --> */}
      <nav>
        <div
          className="title-bar hide-for-large"
          data-responsive-toggle="nav-menu"
          data-hide-for="large"
        >
          <div data-toggle="nav-menu">
            <button className="menu-icon" type="button" />
            <TextLogo text={'open summer of code'} />
          </div>
        </div>

        <div data-sticky-container>
          <div
            className="top-bar bs--darken-light"
            id="nav-menu"
            data-sticky
            data-options="marginTop:0;"
            style={{ width: '100%' }}
          >
            <div className="top-bar-left show-for-large">
              <Link className="logo" to="/" data-hide-for="medium">
                <ImgLogo />
              </Link>
            </div>
            <div className="top-bar-right">
              <ul className="menu vertical large-horizontal">
                <li>
                  <Tab to="/">Home</Tab>
                </li>
                <li>
                  <Tab to="/practical">Practical</Tab>
                </li>
                <li>
                  <Tab to="/students">Students</Tab>
                </li>
                <li>
                  <Tab to="/companies">Companies</Tab>
                </li>
                <li>
                  <Tab to="/coaches">Coaches</Tab>
                </li>
                {/*<!--<li><a href="2018.html" className="button link lowercase u-margin--right">2018</a></li>-->*/}
                <li>
                  {/*<!-- <a href="2018.summerofcode.be" target="_blank" className="button">View 2018 showcase</a> -->*/}
                  <Link to="/2018" target="_blank" className="button">
                    Discover all oSoc18 projects
                    <span className="button__info" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
