import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import TextLogo from './Logo/TextLogo';
import ImgLogo from './Logo/ImgLogo';
import Tab from '../../UI/Tab';

let Foundation;
const Navigation = () => {
  const STICKY = 'sticky is-at-top';
  const $nav = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [height, setHeight] = useState(0);
  const [canStick, setCanStick] = useState(null);
  const [display, setDisplay] = useState('none');
  const [className, setClassName] = useState('');

  const setSticky = () => {
    if (isSticky) setClassName(`${STICKY} is-stuck`);
    else setClassName(`${STICKY} is-anchored`);
  };

  useEffect(setSticky, [isSticky]);

  const calc = () => setHeight($nav.current.clientHeight);

  useEffect(calc, [display]);

  const handleToggle = () => {
    if (canStick) return;
    setDisplay(display ? '' : 'none');
    calc();
  };

  const handleResize = () => {
    const isLarge = Foundation.MediaQuery.atLeast('large');
    if (display && isLarge) {
      setSticky(true);
      setDisplay('');
      setCanStick(true);
    } else if (!display && !isLarge) {
      setDisplay('none');
      setCanStick(false);
      setHeight(0);
      setClassName('');
    }
  };

  const handleScroll = () => {
    if (!canStick) return;
    const position = window.pageYOffset;
    if (!isSticky && position > 0) {
      setIsSticky(true);
    } else if (isSticky && position === 0) setIsSticky(false);
  };

  useEffect(() => {
    import('foundation-sites').then(Mod => {
      Foundation = Mod;
      setCanStick(!!Foundation.MediaQuery.atLeast('large'));
      setDisplay(Foundation.MediaQuery.atLeast('large') ? '' : 'none');
      setClassName(Foundation.MediaQuery.atLeast('large') ? STICKY : '');
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <header>
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

        <div className="sticky-container" data-sticky-container style={{ height }}>
          <div
            className={`${className} top-bar bs--darken-light`}
            id="nav-menu"
            data-options="marginTop:0;"
            ref={$nav}
            style={{
              width: '100%',
              display,
              marginTop: '0px',
              bottom: 'auto',
              top: 0
            }}
          >
            <div className="top-bar-left show-for-large">
              <Link href="/">
                <a className="logo" data-hide-for="medium">
                  <ImgLogo handleLoad={calc} />
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
