import React from 'react';
/* import { Link } from 'react-router-dom';
import ExternalLink from '../UI/ExternalLink'; */
import PracticalHeader from './PracticalHeader';
// import PracticalTabs from './PracticalTabs';
// import When from './When';
// import Where from './Where';
// import StudentApplications from './StudentApplications';
// import Partnerships from './Partnerships';
// import Coaching from './Coaching';

const Practical = () => {
  return (
    <React.Fragment>
      <PracticalHeader />
      {/* <PracticalTabs />

      <div className="tabs-content c-faq-answers" data-tabs-content="example-tabs">
        <When />
        <Where />
        <StudentApplications />
        <Partnerships />
        <Coaching />
      </div> */}

      <div className="u-padding-medium--tb bs--darken-light text-center">
        <h6>Couldn&apos;t find what you were looking for?</h6>
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
