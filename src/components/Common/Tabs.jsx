import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

// src: https://alligator.io/react/tabs-component/

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    contentClass: PropTypes.string.isRequired,
    tabClass: PropTypes.string.isRequired,
    tabListClass: PropTypes.string.isRequired,
    activeClass: PropTypes.string.isRequired
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
      props: { children, contentClass, tabClass, tabListClass, activeClass },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ul className={tabListClass}>
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                className={tabClass}
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                activeClass={activeClass}
              />
            );
          })}
        </ul>
        <div className={contentClass}>
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
