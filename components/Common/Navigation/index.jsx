import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import TextLogo from './Logo/TextLogo';
import ImgLogo from './Logo/ImgLogo';
import Tab from '../../UI/Tab';

const Navigation = () => {
  const query = 'screen and (min-width: 64em)';
  const [display, setDisplay] = useState('');
  const [large, isLarge] = useState(false);

  const handleResize = () => {
    const matches = window.matchMedia(query).matches;
    if (matches) {
      isLarge(true);
      setDisplay('');
    } else if (!matches) {
      isLarge(false);
      setDisplay('none');
    }
  };

  useEffect(() => {
    const matches = window.matchMedia(query).matches;
    setDisplay(matches ? '' : 'none');
    isLarge(window.matchMedia(query).matches);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    if (large) return;
    setDisplay(display ? '' : 'none');
  };

  return (
    <header style={{ position: large ? 'sticky' : 'relative', top: 0, zIndex: 5, bottom: 'auto' }}>
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

        <div>
          <div
            className={`top-bar bs--darken-light`}
            id="nav-menu"
            style={{ display: large ? '' : display }}
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
                {/* <!--<li><a href="2018.html" className="button link lowercase u-margin--right">2018</a></li>--> */}
                <li>
                  {/* <!-- <a href="2018.summerofcode.be" target="_blank" className="button">View 2018 showcase</a> --> */}
                  <Link href="/2018">
                    <a target="_blank" className="button">
                      Discover all oSoc18 projects
                      <span className="button__info" />
                    </a>
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
