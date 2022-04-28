import Link from 'next/link';
// import Demo DayLink from '../UI/Demo DayLink';
// import ExternalLink from '../UI/ExternalLink';
import { ButtonLink } from '../UI/Buttons';

const Info = () => {
  return (
    <>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-6 cell">
          <h1>
            Innovate with your own team of motivated students &mdash; or become a community partner.
          </h1>
          <p className="hero-text u-margin-large--b">
            #osoc mobilises the next generation to build your open source project. Experiment, get
            access to external innovation, find fresh talent, expand your network and give students
            the opportunity to get relevant work experience.{' '}
            <a
              href="mailto:info@osoc.be?subject=Regarding osoc Partnership"
              title="Start a partnership with open summer of code"
            >
              {/* className="link--strikethrough" */}
              Mail us
            </a>
            .
          </p>
          <p className="hero-text">Discover our new Open Summer Packages.</p>
        </div>
        <div className="medium-8 large-6 cell">
          <img
            src="/img/pictures/osoc17-2.jpg"
            className="u-margin--b"
            alt="A coach and his students tackling a problem"
          />
          <p>
            <small>
              Open summer of code 2017 &mdash; the project Prisma. Partner and students
              brainstorm&nbsp;session.
            </small>
          </p>
          {/* <img
            src="/img/pictures/osoc17-3.jpg"
            className="u-margin--b"
            alt="Students working out"
          />
          <p>
            <small>
              Open summer of code 2017 &mdash; making sure our students get some exercise to tackle their projects!
            </small>
          </p> */}
        </div>
        <div className="medium-12 large-10 large-offset-1 cell">
          <h1 className="u-margin-large--tb u-text-align-center">
            Innovate with your own team <br />
            of motivated students
          </h1>
          <table className="c-pricing">
            <thead>
              <tr>
                <th className="c-package__name">
                  <br />
                </th>
                <th width="33%">
                  <p className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-c.svg"
                      alt=""
                      className="c-package__fruit--melon"
                    />
                    Melon <br />
                    Team
                  </p>
                  <p className="c-package__info">
                    Tailor your team with specific profiles to fit your idea.
                  </p>
                </th>
                <th width="33%">
                  <p className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />
                    Lemon <br />
                    Team
                  </p>
                  <p className="c-package__info">
                    Innovate &amp; hack together with a well-rounded team.
                  </p>
                </th>
                <th width="33%">
                  <p className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o-small.svg"
                      alt=""
                      className="c-package__fruit--strawberry"
                    />
                    Strawberry <br />
                    Team
                  </p>
                  <p className="c-package__info">
                    Bring a new idea to life with a small but motivated team.
                  </p>
                </th>
                {/* <th>
                  <p className="c-package__name">Custom <br />Team</p>
                  <p className="c-package__info">Get in touch!</p>
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="c-package__condition">Pricing</th>
                <td>
                  <p className="c-package__price">€&thinsp;17&thinsp;500</p>
                  <p className="c-package__info--small">
                    *Provide your own project management coach: €&thinsp;15&thinsp;750
                  </p>
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;14&thinsp;000</p>
                  <p className="c-package__info--small">
                    *Provide your own project management coach: €&thinsp;12&thinsp;600
                  </p>
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;12&thinsp;000</p>
                  <p className="c-package__info--small">
                    *Provide your own project management coach: €&thinsp;10&thinsp;800
                  </p>
                </td>
              </tr>
              <tr>
                <th className="c-package__condition">Students total</th>
                <td className="u-padding-medium--tb">5 students</td>
                <td className="u-padding-medium--tb">4 students</td>
                <td className="u-padding-medium--tb">3 students</td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Student coach <br />
                  <span className="c-package__info">4th student with more experience</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Topic expert student <br />
                  <span className="c-package__info">5th student</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Project coach
                  <br />
                  <span className="c-package__info">Part-time</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o-small.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Development &amp; design coaching
                  <br />
                  <span className="c-package__info">On-demand</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o-small.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr className="c-package__price__extra">
                <td colSpan="4">
                  <p className="u-text-align-center">
                    <Link href="#benefits">
                      <strong>
                        <a>Discover all benefits &darr;</a>
                      </strong>
                    </Link>{' '}
                    <br />
                    Get in touch for your custom team size and pricing.
                  </p>
                  <p className="c-package__info--small u-text-align-center">
                    Not ready to partner up with a team? Check out our other{' '}
                    <Link href="#support-partners">
                      <strong>
                        <a>partner deals</a>
                      </strong>
                    </Link>{' '}
                    .
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="support-partners">
        <div className="medium-12 large-10 large-offset-1 cell">
          <h1 className="u-margin-large--tb u-text-align-center">Become a community partner</h1>
          <table className="c-pricing">
            <thead>
              <tr>
                <th className="c-package__name" width="10%" />
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-c.svg"
                      alt=""
                      className="c-package__fruit--melon"
                    />{' '}
                    Opportunity <br /> partner
                  </span>
                  <p className="c-package__info">
                    Give students an opportunity, get access to the community.
                  </p>
                </th>
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />{' '}
                    Logistics <br /> partner
                  </span>
                  <p className="c-package__info">
                    Support our community with location or transport means.
                  </p>
                </th>
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o-small.svg"
                      alt=""
                      className="c-package__fruit--strawberry"
                    />{' '}
                    Support <br /> partner
                  </span>
                  <p className="c-package__info">Show your support and appreciation by donating.</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="c-package__condition">Pricing</th>
                <td>
                  <p className="c-package__price">€&thinsp;3&thinsp;000</p>
                </td>
                <td>
                  <p className="c-package__price">Gift in kind</p>
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;1&thinsp;500</p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Online visibility</span>
                  <br />
                  <span className="c-package__info">Thank you for your support.</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Partner highlight</span>
                  <br />
                  <span className="c-package__info">A highlight of your organisation.</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr className="c-package__price__extra">
                <td colSpan="4">
                  <p className="u-text-align-center">
                    <Link href="#benefits">
                      <strong>
                        <a>Discover all benefits &darr;</a>
                      </strong>
                    </Link>{' '}
                    <br />
                    All partners are welcome and encouraged to come meet our teams!
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="benefits">
        <div className="medium-12 large-10 large-offset-1 cell">
          <h1 className="u-margin-large--tb u-text-align-center">More benefits</h1>
          <table className="c-pricing c-pricing--small">
            <thead>
              <tr>
                <th className="c-package__name" width="10%" />
                <th className="c-package u-text-align-center" width="25%">
                  <span className="c-package__name">
                    All team
                    <br /> partners
                  </span>
                </th>
                <th className="c-package u-text-align-center" width="25%">
                  <span className="c-package__name">
                    Opportunity
                    <br /> partners
                  </span>
                </th>
                <th className="c-package u-text-align-center" width="25%">
                  <span className="c-package__name">
                    Logistics &amp;
                    <br /> Support
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <span className="c-package__condition">Online visibility</span>
                  <br />
                  <span className="c-package__info">
                    Your logo on our website, social media shout-outs and recognition during our
                    Demo Day.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Dedicated project highlight</span>
                  <br />
                  <span className="c-package__info">A long-form highlight of your project.</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Dedicated partner highlight</span>
                  <br />
                  <span className="c-package__info">
                    A long-form highlight of your organisation.
                  </span>
                </th>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Access a network of young potentials</span>
                  <br />
                  <span className="c-package__info">
                    Meet the new lead dev, rockstar designer, communication wizard or CEO of
                    tomorrow.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Share job opportunities during osoc</span>
                  <br />
                  <span className="c-package__info">
                    A win-win situation; a possibility to share and find job opportunities. We post
                    your job opportunities on our communication channels for our students.
                  </span>
                </th>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Project booth during the Demo Day</span>
                  <br />
                  <span className="c-package__info">
                    Each project gets presented by the students, with partner visibility.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Open innovation</span>
                  <br />
                  <span className="c-package__info">
                    The opportunity to bring your open innovation idea or project to life.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Fresh ideas</span>
                  <br />
                  <span className="c-package__info">
                    Access to fresh ideas and young brains, selected for motivation and talent.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Co-creation with your own team</span>
                  <br />
                  <span className="c-package__info">
                    Bring your ideas to life with a diverse skilled team.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Access to our #osoc alumni channels</span>
                  <br />
                  <span className="c-package__info">
                    A community to exchange ideas and keep in touch.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
            </tbody>
          </table>

          {/* <p>
            *Applications are closed! Keep an eye on our{' '}
            <ExternalLink href="https://twitter.com/osocode">Twitter account</ExternalLink> to see
            when applications open for 2022 &mdash; or{' '}
            <Demo DayLink>join us on the Demo Day</Demo DayLink> on the 29th of July.
          </p> */}
        </div>
      </div>

      {/* <!-- info companies --> */}
      <div className="grid-x grid-padding-x u-margin-large--tb">
        {/* <!--<div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-happy.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Michael, a really happy coach at open summer of code 2016</small></p></div> --> */}
        {/* <!--<div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-pieter.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Pieter, coach &amp; founding father speaking to the crowds</small></p></div> --> */}
        {/* <!-- <div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-sitting.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Brainstorming hard for Leuven Leest at open summer of code 2016</small></p></div> --> */}
        <div className="medium-8 large-5 large-offset-1 cell">
          <p>
            <Link href="/practical">
              <a>Visit our FAQ</a>
            </Link>{' '}
            if you have any questions, or send us{' '}
            <a
              href="mailto:info@osoc.be?subject=Regarding osoc Partnership"
              title="Partnership at osoc"
            >
              a message
            </a>
            .
          </p>

          <p className="u-margin-large--tb">
            {/* <a
              className="button"
              href="mailto:info@osoc.be?subject=Regarding osoc Partnership"
              title="Start a partnership with open summer of code"
            >
              Mail us to apply
            </a>
            <br /> */}
            {/* <Demo DayLink className="button">Come to the Demo Day</Demo DayLink> */}
            {/* <br /> */}
            <ButtonLink className="button" href="/editions/2021">
              View last year&apos;s projects
            </ButtonLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
