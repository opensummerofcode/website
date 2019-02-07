import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from '../ui/buttons';
import W2011 from '../../assets/img/previous-editions/2011W.svg';
import W2012 from '../../assets/img/previous-editions/2012W.svg';
import W2013 from '../../assets/img/previous-editions/2013W.svg';
import W2014 from '../../assets/img/previous-editions/2014W.svg';
import W2015 from '../../assets/img/previous-editions/2015W.svg';
import W2016 from '../../assets/img/previous-editions/2016W.svg';
import W2017 from '../../assets/img/previous-editions/2017W.svg';

const Footer = () => {
  return (
    <footer>
      <div className="grid-x grid-padding-x">
        <div className="small-12 medium-6 large-5 cell">
          <label htmlFor="mce-EMAIL" className="h6">
            Subscribe to our mailing list
          </label>
          {/*<!-- mailchimp -->*/}
          <div id="mc_embed_signup" className="u-margin-large--b">
            <form
              action="//okfn.us8.list-manage.com/subscribe/post?u=16c22b5f724fd6ef8c78c79fc&amp;id=4ec3a3c20a"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate="novalidate"
            >
              <div id="mc_embed_signup_scroll">
                <ButtonGroup>
                  <input
                    type="email"
                    className="form-control u-margin-none"
                    id="mce-EMAIL"
                    name="EMAIL"
                    placeholder="E-mail Address"
                    required=""
                    aria-required="true"
                  />
                  <input
                    type="submit"
                    className="button dark"
                    value="Mail"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                </ButtonGroup>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  />
                </div>{' '}
                {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                <div
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_16c22b5f724fd6ef8c78c79fc_4ec3a3c20a"
                    tabIndex="-1"
                    value=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="small-12 medium-6 large-5 large-offset-2 cell">
          <div className="grid-x grid-padding-x">
            {/*<!-- links -->*/}
            <div className="small-4 medium-4 cell">
              <ul className="inline-list">
                <li>
                  <Link to="students">Students</Link>
                </li>
                <li>
                  <Link to="companies">Companies</Link>
                </li>
                <li>
                  <Link to="coaches">Coaches</Link>
                </li>
              </ul>
            </div>
            <div className="small-4 medium-4 cell">
              <ul className="inline-list">
                <li>
                  <a
                    href="https://www.eventbrite.co.uk/e/demo-day-osoc18-registration-46709558547?ref=estw"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo&nbsp;day
                  </a>
                </li>
                <li>
                  <Link to="practical">Practical</Link>
                </li>
                <li>
                  <Link to="2018">2018</Link>
                </li>
              </ul>
            </div>
            {/*<!-- contact -->*/}
            <div className="small-4 medium-4 cell">
              <ul className="inline-list">
                <li>
                  <a href="mailto:dries@openknowledge.be">Contact</a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/osocode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="small-12 medium-12 large-6 cell">
          {/*<!-- previous edition -->*/}
          <div className="grid-x c-previous-editions">
            <div className="small-3 medium-auto cell">
              <a href="http://2011.summerofcode.be">
                <img src={W2011} alt="" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2012.summerofcode.be">
                <img src={W2012} alt="" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2013.summerofcode.be">
                <img src={W2013} alt="" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2014.summerofcode.be">
                <img src={W2014} alt="" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2015.summerofcode.be">
                <img src={W2015} alt="" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2016.summerofcode.be">
                <img src={W2016} alt="" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2017.summerofcode.be">
                <img src={W2017} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="small-12 large-5 large-offset-1 cell">
          <p>
            Powered by{' '}
            <a
              href="https://www.openknowledge.be/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Knowledge Belgium
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/oSoc18/website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code freely available on GitHub
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/oSoc18/website/blob/master/CONTRIBUTORS.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributors
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
