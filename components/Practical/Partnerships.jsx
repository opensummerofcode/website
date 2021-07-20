import ExternalLink from '../UI/ExternalLink';
import DemoDayLink from '../UI/DemoDayLink';

const Partnerships = () => {
  return (
    <div>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">Why should I participate in osoc?</h4>
            <div className="c-faq__item__answer">
              <p>
                Participating in osoc enables your organisation to bring your open innovation idea
                or project to life while providing the next generation of web developers, designers,
                communication specialists and project managers with a real challenge. In one month
                the students will do their utter best to develop your idea into a real innovative
                open product or service.
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">How do I apply?</h4>
            <div className="c-faq__item__answer">
              {/*
                <p>
                Unfortunately, applications are closed right now. But you&apos;re welcome to join us
                during the <DemoDayLink>Demo Day</DemoDayLink> — which will take place on Thursday
                26 July this year. You can always apply next year — so keep an eye on our{' '}
                <ExternalLink href="https://twitter.com/osocode">Twitter account</ExternalLink> to
                see what we&apos;re up to.
              </p>
              */}
              <p>
                To arrange a meeting and discuss the collaboration in detail, send an email to{' '}
                <a href="mailto:info@osoc.be">info@osoc.be</a>.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">What is expected of me as a client?</h4>
            <div className="c-faq__item__answer">
              <p>
                Your organisation will need to take some time to write a good briefing, and have
                some people available for meetings and feedback sessions during osoc. In some cases,
                questions will be asked via email.
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">How do I brief my team of students?</h4>
            <div className="c-faq__item__answer">
              <p>
                <strong>Before</strong> open summer of code, it&apos;s important to create a good
                briefing with what you expect of your team. The better the briefing, the less
                questions will pop up, the better the project.
              </p>
              <p>
                In the briefing you will outline what kind of project your organisation envisions
                and what features and functions your end-product shall contain. Based on your
                layout, osoc mobilises the student profiles required to make this vision come to
                life.
              </p>
              <p>
                In case you have a very defined project, a prioritized list of features will help
                the students to define and create something valueable for you. But, if you want the
                students to experiment, provide a good vision and mission to the students so
                they&apos;ll have a good sense of direction.
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">How do I provide feedback?</h4>
            <div className="c-faq__item__answer">
              <p>
                At the beginning of osoc, a representative of your organisation will present your
                organisation and project briefing to the students. From then on you will meet your
                team once a week to receive pitched progress updates and give feedback.
              </p>
              <p>
                In those feedback sessions you&apos;ll provide feedback to make sure the students
                are going in the right direction (on development, design, product management, ...).
              </p>
              <p>
                Preferrably, we have a single point of contact that can make the decisions that need
                to be made during the development of the project. This person will brief the
                students at the beginning of the project, and will provide feedback in July.
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
                Through the diverse set of participants&apos; skills and expertise at open Summer of
                code, you can co-create an innovative digital solution for the challenges your
                organisation faces. All while fostering the individual social impact of engaging a
                diverse and talented group of students in a digital transformative project as well
                as a broader societal impact of training a new generation on the importance of open
                data use and open source coding in a sustainable way that simultaneously generates
                economic value.
              </p>
              <p>
                Moreover, if you are searching for some top notch business, design or IT-students to
                recruit, here’s your chance! If you like how members of your team (or others)
                performed in this 4 week programme, you can decide to make the final call.
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">What will be done with the work afterwards?</h4>
            <div className="c-faq__item__answer">
              <p>
                At the end of osoc, your project will be published under a free and open-source
                license, compatible with the{' '}
                <ExternalLink href="https://opensource.org">Open Source Initiative</ExternalLink>{' '}
                and will be showcased at the osoc <DemoDayLink>Demo Day</DemoDayLink>, where
                students present the final product to you and the broad public. You will receive
                access to all documents, research, designs and code created at osoc, so that you can
                share it within your own or with other organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
