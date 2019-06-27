import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import TextLogo from './Logo/TextLogo';
import ImgLogo from './Logo/ImgLogo';
import Tab from '../../UI/Tab';

let Foundation;

class Navigation extends React.Component {
  sticky = 'sticky is-at-top';

  state = {
    isSticky: false,
    height: 0,
    canStick: null,
    display: null,
    className: null
  };

  componentDidMount() {
    dynamic(async () => {
      Foundation = await import('foundation-sites');
      console.log(Foundation);
      this.setState({
        canStick: !!Foundation.MediaQuery.atLeast('large'),
        display: Foundation.MediaQuery.atLeast('large') ? '' : 'none',
        className: Foundation.MediaQuery.atLeast('large') ? this.sticky : ''
      });
    });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleLoad = () => {
    this.calc();
  };

  handleResize = () => {
    const { display } = this.state;
    const isLarge = Foundation.MediaQuery.atLeast('large');
    if (display && isLarge) {
      this.setState({ display: '', canStick: true }, () => {
        this.calc();
        this.setSticky();
      });
    } else if (!display && !isLarge) {
      this.setState({ display: 'none', canStick: false, height: 0 }, this.removeSticky);
    }
  };

  calc = () => {
    const height = this.element.clientHeight;
    this.setState({ height });
  };

  setSticky = () => {
    const { isSticky } = this.state;
    if (isSticky) {
      this.setState({ className: `${this.sticky} is-stuck` });
    } else {
      this.setState({ className: `${this.sticky} is-anchored` });
    }
  };

  removeSticky = () => {
    this.setState({ className: '' });
  };

  handleScroll = () => {
    if (!this.state.canStick) return;
    const position = window.pageYOffset;
    const { isSticky } = this.state;
    if (!isSticky && position > 0) {
      this.setState({ isSticky: true }, this.setSticky);
    } else if (isSticky && position === 0) {
      this.setState({ isSticky: false }, this.setSticky);
    }
  };

  handleToggle = () => {
    const { display, canStick } = this.state;
    if (!canStick) this.setState({ display: display ? '' : 'none' }, this.calc);
  };

  render() {
    return (
      <header>
        {/* <!-- topbar --> */}
        <nav>
          <div
            className="title-bar hide-for-large"
            data-responsive-toggle="nav-menu"
            data-hide-for="large"
          >
            <div
              data-toggle="nav-menu"
              onClick={this.handleToggle}
              role="button"
              tabIndex="0"
              onKeyPress={this.handleToggle}
            >
              <button className="menu-icon" type="button" />
              <TextLogo text="open summer of code" />
            </div>
          </div>

          <div
            className="sticky-container"
            data-sticky-container
            style={{ height: this.state.height }}
          >
            <div
              className={`${this.state.className} top-bar bs--darken-light`}
              id="nav-menu"
              data-sticky
              data-options="marginTop:0;"
              ref={element => (this.element = element)}
              style={{
                width: '100%',
                display: this.state.display,
                marginTop: '0px',
                bottom: 'auto',
                top: 0
              }}
            >
              <div className="top-bar-left show-for-large">
                <Link href="/">
                  <a className="logo" data-hide-for="medium">
                    <ImgLogo handleLoad={this.handleLoad} />
                  </a>
                </Link>
              </div>
              <div className="top-bar-right">
                <ul className="menu vertical large-horizontal">
                  <li>
                    <Tab onClick={this.handleToggle} href="/">
                      Home
                    </Tab>
                  </li>
                  <li>
                    <Tab onClick={this.handleToggle} href="/practical">
                      Practical
                    </Tab>
                  </li>
                  <li>
                    <Tab onClick={this.handleToggle} href="/students">
                      Students
                    </Tab>
                  </li>
                  <li>
                    <Tab onClick={this.handleToggle} href="/companies">
                      Companies
                    </Tab>
                  </li>
                  <li>
                    <Tab onClick={this.handleToggle} href="/coaches">
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
  }
}

export default Navigation;
