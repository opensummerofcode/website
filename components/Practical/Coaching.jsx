// import ExternalLink from '../UI/ExternalLink';

const Coaching = () => {
  return (
    <div>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">Why should I participate in osoc?</h4>
            <div className="c-faq__item__answer">
              <p>
                As coach at osoc, you will make a real difference in a sector you care about. By
                guiding talented students you will not only practice your project coordination,
                supervision and team management skills but also develop an actual product for a real
                client, thus expanding your network across a multitude of open sectors. The next
                generation of technological ingenuity is in your hands!
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
                process. That includes discussions with your project partner to establish a clear
                vision of the specific open innovation project. You will endorse the desired student
                roles (web development, design, business or communication) essential to turning the
                partners idea into real-world products and services. At osoc you will outline a plan
                for action with your team and facilitate students&apos; progress throughout the
                one-month project. In the end, your team will present the finished product to the
                partnering organisation and the wide public.
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">How can I apply?</h4>
            <div className="c-faq__item__answer">
              <p>
                You can apply by sending an email with your motivation and CV to{' '}
                <a href="mailto:info@osoc.be">info@osoc.be</a>
              </p>
              {/*
                <p>
                Unfortunately, applications are closed right now. But you&apos;re welcome to join us
                during the <ExternalLink href="https://t.co/EhoiMCJRnT">demo day</ExternalLink>{' '}
                &mdash; which will take place Thursday, 26 June this year. You can always apply next
                year &mdash; so keep an eye on our{' '}
                <ExternalLink href="https://twitter.com/osocode">Twitter account</ExternalLink> to
                see what we&apos;re up to.
              </p>
              */}
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
                interaction within your team and between your team and partners. You&apos;ll be
                providing structure and guidance for the students to help them flourish and do a
                good job. Experience in coaching and team-coordination are not required but
                considered an asset. Furthermore, familiarity in the Belgian tech scene is valuable.
                However, what counts most is a positive mindset and the motivation to have an
                awesome summer!
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">I’m assisting another coach. How can I help?</h4>
            <div className="c-faq__item__answer">
              <p>
                Tasks will vary depending on the specific objectives of the project. Be attentive
                and responsive to what is relevant to make the project come to life.
              </p>
            </div>
          </div>
        </div>

        <div className="cell small-11 medium-8 large-6">
          <div className="c-faq__item">
            <h4 className="c-faq__item__question">I’m a student coach. How does that work?</h4>
            <div className="c-faq__item__answer">
              <p>
                As a student coach you will be acting as the interface between students and coaches.
                Hence, listen carefully and mediate concerns and ideas between both parties. Student
                coaches are aimed to become the next generation of coaches, see this role as an
                opportunity to learn as much as possible about the relevant aspects of the project
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
