import React from 'react';
import { Link } from 'react-router-dom';
import TextLogo from './Logo/text-logo';
import ImgLogo from './Logo/img-logo';

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
                  <Link
                    to="/"
                    className="button link lowercase u-margin--right"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/practical"
                    className="button link lowercase u-margin--right"
                  >
                    Practical
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students"
                    className="button link lowercase u-margin--right"
                  >
                    Students
                  </Link>
                </li>
                <li>
                  <Link
                    to="/companies"
                    className="button link lowercase u-margin--right"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/coaches"
                    className="button link lowercase u-margin--right"
                  >
                    Coaches
                  </Link>
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
