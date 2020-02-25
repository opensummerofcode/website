import Link from 'next/link';
import { ButtonGroup } from '../UI/Buttons';
import ExternalLink from '../UI/ExternalLink';
import W2011 from '../../assets/img/previous-editions/2011W.svg';
import W2012 from '../../assets/img/previous-editions/2012W.svg';
import W2013 from '../../assets/img/previous-editions/2013W.svg';
import W2014 from '../../assets/img/previous-editions/2014W.svg';
import W2015 from '../../assets/img/previous-editions/2015W.svg';
import W2016 from '../../assets/img/previous-editions/2016W.svg';
import W2017 from '../../assets/img/previous-editions/2017W.svg';
import W2018 from '../../assets/img/previous-editions/2018W.svg';

const Footer = () => {
  return (
    <footer>
      <div className="grid-x grid-padding-x">
        <div className="small-12 medium-6 large-5 cell">
          <label htmlFor="mce-EMAIL" className="h6">
            Subscribe to our mailing list
          </label>
          {/* <!-- mailchimp --> */}
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
                    defaultValue="Mail"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    value="Subscribe"
                  />
                </ButtonGroup>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                  <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                </div>{' '}
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="b_16c22b5f724fd6ef8c78c79fc_4ec3a3c20a"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="small-12 medium-6 large-5 large-offset-2 cell">
          <div className="grid-x grid-padding-x">
            {/* <!-- links --> */}
            <div className="small-4 medium-4 cell">
              <ul className="inline-list">
                <li>
                  <Link href="/students">
                    <a>Students</a>
                  </Link>
                </li>
                <li>
                  <Link href="/companies">
                    <a>Companies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coaches">
                    <a>Coaches</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="small-4 medium-4 cell">
              <ul className="inline-list">
                <li>
                  <ExternalLink href="https://demodayosoc19.eventbrite.co.uk/">
                    Demo&nbsp;day
                  </ExternalLink>
                </li>
                <li>
                  <Link href="/practical">
                    <a>Practical</a>
                  </Link>
                </li>
                <li>
                  <Link href="/2019">
                    <a>2019</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- contact --> */}
            <div className="small-4 medium-4 cell">
              <ul className="inline-list">
                <li>
                  <a href="mailto:info@osoc.be">Contact</a>
                </li>
                <li>
                  <ExternalLink href="https://twitter.com/osocode">Twitter</ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="small-12 medium-12 large-6 cell">
          {/* <!-- previous edition --> */}
          <div className="grid-x c-previous-editions">
            <div className="small-3 medium-auto cell">
              <a href="http://2011.summerofcode.be">
                <img src={W2011} alt="2011 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2012.summerofcode.be">
                <img src={W2012} alt="2012 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2013.summerofcode.be">
                <img src={W2013} alt="2013 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2014.summerofcode.be">
                <img src={W2014} alt="2014 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2015.summerofcode.be">
                <img src={W2015} alt="2015 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2016.summerofcode.be">
                <img src={W2016} alt="2016 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2017.summerofcode.be">
                <img src={W2017} alt="2017 oSoc logo" />
              </a>
            </div>
            <div className="small-3 medium-auto cell">
              <a href="http://2018.summerofcode.be">
                <img src={W2018} alt="2018 oSoc logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="small-12 large-5 large-offset-1 cell">
          <p>
            Powered by{' '}
            <ExternalLink href="https://www.openknowledge.be/">Open Knowledge Belgium</ExternalLink>{' '}
            |{' '}
            <ExternalLink href="https://github.com/opensummerofcode/edition-webapp">
              Source code freely available on GitHub
            </ExternalLink>{' '}
            |{' '}
            <ExternalLink href="https://github.com/opensummerofcode/edition-webapp/blob/master/CONTRIBUTORS.md">
              Contributors
            </ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
