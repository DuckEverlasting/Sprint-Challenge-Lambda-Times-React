import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(el => {
          return (
            <Tab
              tab={el}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tabs;
