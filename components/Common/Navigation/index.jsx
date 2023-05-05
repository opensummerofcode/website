import { useEffect, useState } from 'react';
import Link from 'next/link';
import TextLogo from './Logo/TextLogo';
import ImgLogo from './Logo/ImgLogo';
import Tab from '../../UI/Tab';
import DemoDayLink from '../../UI/DemoDayLink';
// import ApplyLink from '../ApplyLink';

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
    <header className="app-header has-ribbon">
      <div className="canceled-ribbon">
        Unfortunately, we will{' '}
        <b>
          <u>not be able to host the event in 2023</u>
        </b>{' '}
        due to a lack of organizational power. We are working hard to make the 2024 edition possible
        and a success. 💪
      </div>
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
                  <Tab onClick={handleToggle} href="/partners">
                    Partners
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/coaches">
                    Coaches
                  </Tab>
                </li>
                <li>
                  <Tab onClick={handleToggle} href="/editions/2022">
                    2022
                  </Tab>
                </li>

                {/* <li>
                  <ApplyLink />
                </li> */}

                <li>
                  {' '}
                  <DemoDayLink className="button">
                    Join the demo day! <span className="button__info">July 28th 2022</span>
                  </DemoDayLink>
                </li>

                {/* <li>
                  <Link href="/editions/[year]" as="/editions/2020">
                    <a className="button">
                      Discover all osoc20 projects
                      <span className="button__info" />
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
