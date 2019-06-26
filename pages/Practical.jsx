import React from 'react';
/* import Link from 'next/link';
import ExternalLink from '../UI/ExternalLink'; */
import PracticalHeader from '../components/Practical/PracticalHeader';
// import PracticalTabs from './PracticalTabs';
import When from '../components/Practical/When';
import Where from '../components/Practical/Where';
import StudentApplications from '../components/Practical/StudentApplications';
import Partnerships from '../components/Practical/Partnerships';
import Coaching from '../components/Practical/Coaching';
import Tabs from '../components/Common/Tabs';

const Practical = () => {
  return (
    <React.Fragment>
      <PracticalHeader />
      {/* <PracticalTabs /> */}

      <Tabs
        contentClass="tabs-content c-faq-answers"
        tabListClass="tabs tabs--custom c-faq-tabs"
        tabClass="tabs-title"
        activeClass="is-active"
      >
        <When label="When" />
        <Where label="Where" />
        <StudentApplications label="Student applications" />
        <Partnerships label="Partnerships" />
        <Coaching label="Coaching" />
      </Tabs>
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
