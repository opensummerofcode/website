import React from 'react';

const PracticalTabs = () => {
  return (
    <ul className="tabs tabs--custom c-faq-tabs" data-tabs id="example-tabs">
      <li className="tabs-title is-active">
        <h2>
          <a href="#when">When</a>
        </h2>
      </li>
      <li className="tabs-title">
        <h2>
          <a href="#where">Where</a>
        </h2>
      </li>
      <li className="tabs-title">
        <h2>
          <a data-tabs-target="students" href="#students">
            Student applications
          </a>
        </h2>
      </li>
      <li className="tabs-title">
        <h2>
          <a data-tabs-target="partners" href="#partners">
            Partnerships
          </a>
        </h2>
      </li>
      <li className="tabs-title">
        <h2>
          <a data-tabs-target="coaching" href="#coaching">
            Coaching
          </a>
        </h2>
      </li>
    </ul>
  );
};

export default PracticalTabs;
