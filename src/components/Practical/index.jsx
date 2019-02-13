import React from 'react';
/* import { Link } from 'react-router-dom';
import ExternalLink from '../UI/ExternalLink'; */
import PracticalHeader from './PracticalHeader';
import PracticalTabs from './PracticalTabs';
import When from './When';
import Where from './Where';
import StudentApplications from './StudentApplications';

const Practical = () => {
  return (
    <React.Fragment>
      <PracticalHeader />
      <PracticalTabs />

      <div className="tabs-content c-faq-answers" data-tabs-content="example-tabs">
        <When />
        <Where />
        <StudentApplications />
        <div className="tabs-panel" id="partners">
          <div className="grid-x grid-padding-x u-margin-large--tb">
            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">Why should I participate in osoc?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    Participating in osoc enables your organisation to bring your open innovation
                    idea or project to life while providing the next generation of web developers,
                    designers, communication specialists and project managers with a real challenge.
                    In one month the students will do their utter best to develop your idea into a
                    real innovative open product or service.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">How do I apply?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    Unfortunately, applications are closed right now. But you're welcome to join us
                    during the{' '}
                    <a href="https://t.co/EhoiMCJRnT" target="_blank">
                      Demo Day
                    </a>{' '}
                    — which will take place on Thursday 26 July this year. You can always apply next
                    year — so keep an eye on our{' '}
                    <a href="https://twitter.com/osocode" target="_blank">
                      Twitter account
                    </a>{' '}
                    to see what we're up to.
                  </p>
                  {/* <!-- <p>To arrange a meeting and discuss the collaboration in detail, send an email to <a href="mailto:dries@openknowledge.be">dries@openknowledge.be</a>. </p> --> */}
                  {/* <!-- <p>Cost and team size is arranged beforehand.</p> --> */}
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">What is expected of me as a client?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    Your organisation will need to take some time to write a good briefing, and have
                    some people available for meetings and feedback sessions during osoc. In some
                    cases, questions will be asked via email.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">How do I brief my team of students?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    <strong>Before</strong> open summer of code, it's important to create a good
                    briefing with what you expect of your team. The better the briefing, the less
                    questions will pop up, the better the project.
                  </p>
                  <p>
                    In the briefing you will outline what kind of project your organisation
                    envisions and what features and functions your end-product shall contain. Based
                    on your layout, osoc mobilises the student profiles required to make this vision
                    come to life.
                  </p>
                  <p>
                    In case you have a very defined project, a prioritized list of features will
                    help the students to define and create something valueable for you. But, if you
                    want the students to experiment, provide a good vision and mission to the
                    students so they'll have a good sense of direction.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">How do I provide feedback?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    At the beginning of osoc, a representative of your organisation will present
                    your organisation and project briefing to the students. From then on you will
                    meet your team once a week to receive pitched progress updates and give
                    feedback.
                  </p>
                  <p>
                    In those feedback sessions you'll provide feedback to make sure the students are
                    going in the right direction (on development, design, product management, ...).
                  </p>
                  <p>
                    Preferrably, we have a single point of contact that can make the decisions that
                    need to be made during the development of the project. This person will brief
                    the students at the beginning of the project, and will provide feedback in July.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">
                  What is the impact that I can expect for my organisation?
                </h4>
                <div className="c-faq__item__answer">
                  <p>
                    "Through the diverse set of participants' skills and expertise at open Summer of
                    code, you can co-create an innovative digital solution for the challenges your
                    organisation faces. All while fostering the individual social impact of engaging
                    a diverse and talented group of students in a digital transformative project as
                    well as a broader societal impact of training a new generation on the importance
                    of open data use and open source coding in a sustainable way that simultaneously
                    generates economic value.{' '}
                  </p>
                  <p>
                    Moreover, if you are searching for some top notch business, design or
                    IT-students to recruit, here’s your chance! If you like how members of your team
                    (or others) performed in this 4 week programme, you can decide to make the final
                    call."
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">
                  What will be done with the work afterwards?
                </h4>
                <div className="c-faq__item__answer">
                  <p>
                    At the end of osoc, your project will be published under a free and open-source
                    license, compatible with the{' '}
                    <a href="https://opensource.org" target="_blank">
                      Open Source Initiative
                    </a>{' '}
                    and will be showcased at the oSoc Demo Day, where students present the final
                    product to you and the broad public. You will receive access to all documents,
                    research, designs and code created at osoc, so that you can share it within your
                    own or with other organisations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-panel" id="coaching">
          <div className="grid-x grid-padding-x u-margin-large--tb">
            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">Why should I participate in osoc?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    As coach at osoc, you will make a real difference in a sector you care about. By
                    guiding talented students you will not only practice your project coordination,
                    supervision and team management skills but also develop an actual product for a
                    real client, thus expanding your network across a multitude of open sectors. The
                    next generation of technological ingenuity is in your hands!
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">What will I be doing during osoc?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    As coach you will be guiding a team of students through the project development
                    process. That includes discussions with your project partner to establish a
                    clear vision of the specific open innovation project. You will endorse the
                    desired student roles (web development, design, business or communication)
                    essential to turning the partners idea into real-world products and services. At
                    osoc you will outline a plan for action with your team and facilitate students'
                    progress throughout the one-month project. In the end, your team will present
                    the finished product to the partnering organisation and the wide public.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">How can I apply?</h4>
                <div className="c-faq__item__answer">
                  {/* <!-- <p>You can apply here (link to application) or by sending an email with your motivation and CV to <a href="mailto:dries@openknowledge.be">dries@openknowledge.be</a></p> --> */}

                  <p>
                    Unfortunately, applications are closed right now. But you're welcome to join us
                    during the{' '}
                    <a href="https://t.co/EhoiMCJRnT" target="_blank">
                      demo day
                    </a>{' '}
                    &mdash; which will take place Thursday, 26 June this year. You can always apply
                    next year &mdash; so keep an eye on our{' '}
                    <a href="https://twitter.com/osocode" target="_blank">
                      Twitter account
                    </a>{' '}
                    to see what we're up to.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">What skills should I bring to the table?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    An open attitude is vital. You will be working in a diverse team of motivated
                    students with different skills and expertise. Hence, your role is to facilitate
                    interaction within your team and between your team and partners. You'll be
                    providing structure and guidance for the students to help them flourish and do a
                    good job. Experience in coaching and team-coordination are not required but
                    considered an asset. Furthermore, familiarity in the Belgian tech scene is
                    valuable. However, what counts most is a positive mindset and the motivation to
                    have an awesome summer!
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">
                  I’m assisting another coach. How can I help?
                </h4>
                <div className="c-faq__item__answer">
                  <p>
                    Tasks will vary depending on the specific objectives of the project. Be
                    attentive and responsive to what is relevant to make the project come to life.
                  </p>
                </div>
              </div>
            </div>

            <div className="cell small-11 medium-8 large-6">
              <div className="c-faq__item">
                <h4 className="c-faq__item__question">I’m a student coach. How does that work?</h4>
                <div className="c-faq__item__answer">
                  <p>
                    As a student coach you will be acting as the interface between students and
                    coaches. Hence, listen carefully and mediate concerns and ideas between both
                    parties. Student coaches are aimed to become the next generation of coaches, see
                    this role as an opportunity to learn as much as possible about the relevant
                    aspects of the project development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-padding-medium--tb bs--darken-light text-center">
        <h6>Couldn't find what you were looking for?</h6>
        <a
          className="button secondary"
          href="mailto:dries@openknowledge.be?subject=Question regarding osoc18"
          title="Question for osoc18"
        >
          Mail us your questions
        </a>
      </div>
    </React.Fragment>
  );
};

export default Practical;
