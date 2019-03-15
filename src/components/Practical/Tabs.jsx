import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Common/Tab';

// src: https://alligator.io/react/tabs-component/

class Faqs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ul className="tabs tabs--custom c-faq-tabs">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                className="tabs-title"
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tabs-content c-faq-answers">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Faqs;
