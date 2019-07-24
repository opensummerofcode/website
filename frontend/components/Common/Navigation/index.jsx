import { useEffect, useState } from 'react';
import Link from 'next/link';
import TextLogo from './Logo/TextLogo';
import ImgLogo from './Logo/ImgLogo';
import Tab from '../../UI/Tab';
import ExternalLink from '../../UI/ExternalLink';

const Navigation = () => {
  const [mobileNavIsVisible, setMobileNavVisibility] = useState(false);
  const [navClass, setNavClass] = useState('is-anchored');

  const handleScroll = () => {
    if (window.innerWidth >= 1024) return null;
    if (window.pageYOffset > 0) return setNavClass('is-stuck');
    return setNavClass('is-anchored');
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleToggle = () => {
    setMobileNavVisibility(!mobileNavIsVisible);
  };

  const navModifier = `${mobileNavIsVisible ? 'top-bar--visible' : 'top-bar--hidden'}`;
  return (
    <header className="app-header">
      <nav>
        <div
          className="title-bar hide-for-large"
          data-responsive-toggle="nav-menu"
          data-hide-for="large"
        >
          <div
            data-toggle="nav-menu"
            onClick={handleToggle}
            role="button"
            tabIndex="0"
            onKeyPress={handleToggle}
          >
            <button className="menu-icon" type="button" />
            <TextLogo text="open summer of code" />
          </div>
        </div>
        <div
          className={`sticky-container ${mobileNavIsVisible ? 'nav-menu-wrapper--shown' : ''}`}
          data-sticky-container=""
        >
          <div
            className={`top-bar bs--darken-light sticky ${navModifier} is-at-top ${navClass}`}
            id="nav-menu"
          >
            <div className="top-bar-left show-for-large">
              <Link href="/">
                <a className="logo" data-hide-for="medium">
                  <ImgLogo />
                </a>
              </Link>
            </div>
            <div className="top-bar-right">
              <ul className="menu vertical large-horizontal">
                <li>
                  <Tab onClick={handleToggle} href="/">
                    Home
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/practical">
                    Practical
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/students">
                    Students
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/companies">
                    Companies
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/coaches">
                    Coaches
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/2019">
                    2019
                  </Tab>
                </li>
                {/* <!--<li><a href="2018.html" className="button link lowercase u-margin--right">2018</a></li>--> */}
                <li>
                  {/* <!-- <a href="2018.summerofcode.be" target="_blank" className="button">View 2018 showcase</a> --> */}
                  <ExternalLink
                    href="https://demodayosoc19.eventbrite.co.uk"
                    target="_blank"
                    className="button"
                  >
                    Come to the demo day! <span className="button__info">25 July 2019</span>
                  </ExternalLink>
                  {/*
                    <Link href="/2018">
                        <a target="_blank" className="button">
                          Discover all oSoc18 projects
                          <span className="button__info" />
                        </a>
                      </Link>
                    */}
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
