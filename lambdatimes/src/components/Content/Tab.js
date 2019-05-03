import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const classNameHandler = () => {
    props.tab === props.selectedTab ? "tab active-tab" : "tab"
  }

  return (
    <div
      className={classNameHandler()}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
