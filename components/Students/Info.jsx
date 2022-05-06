import Link from 'next/link';
// import DemoDayLink from '../UI/DemoDayLink';
import ExternalLink from '../UI/ExternalLink';

const Info = () => {
  return (
    <>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-10 large-6 cell">
          <h1>
            Open summer of code is for anyone who brings motivation, enthusiasm and talent to
            the&nbsp;table.
          </h1>
          <ul className="hero-text u-margin">
            <li>
              You'll work in <strong>cross-functional</strong> teams to bring an idea to life.{' '}
              <strong>Experts</strong> in the field guide you to do so with valuable{' '}
              <strong>techniques</strong> and <strong>tools</strong>.
            </li>
            <li>
              You'll become more <strong>independent and professional</strong> by managing a real
              project for a real client.
            </li>
            <li>
              What you make is <strong>open source</strong>: <strong>spread knowledge</strong> and
              foster <strong>innovation</strong>, by opening up your work.
            </li>
          </ul>
          {/* <p>
            *Applications are closed! Keep an eye on our{' '}
            <ExternalLink href="https://twitter.com/osocode">Twitter account</ExternalLink> to see
            when applications open for 2022 &mdash; or{' '}
            <DemoDayLink>join us on the Demo Day</DemoDayLink> on the 29th of July.
          </p> */}
        </div>

        <div className="medium-8 large-6 cell">
          <img
            src="/img/pictures/osoc17-1.jpg"
            className="u-margin--b"
            alt="Students getting freaky with it"
          />
          {/* <p>
            <small>Open summer of code 2017 &mdash; project B-badges</small>
          </p> */}
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="support-partners">
        <div className="medium-12 large-10 large-offset-1 cell">
          <table className="c-pricing u-hide-for-medium-down">
            <thead>
              <tr>
                <th className="c-package__name" width="10%" />
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />{' '}
                    Student
                  </span>
                  <p className="c-package__info">
                    Show us what you're good at! Design, development, marketing, communication, ...
                  </p>
                </th>
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o-small.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />{' '}
                    Student coach
                  </span>
                  <p className="c-package__info">
                    For experienced students that will be the link between their colleagues, coaches
                    &amp; partners.
                  </p>
                </th>
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-c.svg"
                      alt=""
                      className="c-package__fruit--melon"
                    />{' '}
                    Volunteer
                  </span>
                  <p className="c-package__info">
                    You're not a student anymore, but you want to be part of the experience. Let's
                    talk!
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="c-package__condition">
                  Your wage
                  <br />
                  <span className="c-package__info">
                    {/* 7,6 hours per day during */} For 16 days
                  </span>
                </th>
                <td>
                  <p className="c-package__price">€&thinsp;1&thinsp;300</p>
                  €&thinsp;11,00 per hour
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;1&thinsp;475</p>
                  €&thinsp;12,50&thinsp; per hour
                </td>
                <td>
                  <p className="c-package__price">Let's talk!</p>
                  Eternal gratitude per hour
                </td>
              </tr>
            </tbody>
          </table>

          <section class="c-pricing u-padding--rl u-hide-for-medium-up">
            <article>
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-o.svg" alt="" className="c-package__fruit--lemon" />
                Student
                <br />
                <span className="c-package__price">
                  Earn €&thinsp;1&thinsp;300 &mdash; €11 an hour
                </span>
              </h2>
              <p className="c-package__info">
                Show us what you're good at! Design, development, marketing, communication, ... you
                name it.
              </p>
            </article>
            <article>
              <h2 className="c-package__name">
                <img
                  src="../img/logo/logo-osoc-o-small.svg"
                  alt=""
                  className="c-package__fruit--lemon"
                />
                Student coach
                <br />
                <span className="c-package__price">
                  Earn €&thinsp;1&thinsp;475 &mdash; €12,5 an hour
                </span>
              </h2>
              <p className="c-package__info">
                For experienced students that will be the link between their colleagues, coaches &
                partners.
              </p>
            </article>
            <article className="u-margin-large--b">
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-c.svg" alt="" className="c-package__fruit--melon" />
                Volunteer
                <br />
                <span className="c-package__price">Let's talk!</span>
              </h2>
              <p className="c-package__info">
                You're not a student anymore, but you want to be part of the experience.
              </p>
            </article>
          </section>
        </div>
        <div className="medium-12 large-5 large-offset-1 cell">
          <section className="u-margin--t">
            <article>
              <p>
                Officially you'll work 4 days a week, 7,6 hours a day for 16 days. You're off during
                holidays, but still paid!
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 large-6 cell">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: '1rem' }}>
            <iframe
              src="https://player.vimeo.com/video/177368331?title=0&byline=0&portrait=0"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
              }}
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              title="TODO"
            />
          </div>
          <p>
            <small>The 2016 aftermovie; see us building, pitching &amp; cruising!</small>
          </p>
        </div>

        <div className="medium-8 large-5 cell">
          <h1>The benefits: more than money</h1>
          <p>
            An unforgettable <strong>learning experience</strong>, for any student, as long as
            you&apos;re motivated. Work on real, valuable projects that beef your cv and grow your
            network — all while having fun.
          </p>
          <p>
            <Link href="/practical">
              <a>Visit our FAQ</a>
            </Link>{' '}
            to learn more, or send us{' '}
            <a href="mailto:info@osoc.be?subject=Regarding osoc" title="Student at osoc">
              a message
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
