import React from "react";
import PropTypes from "prop-types";
// import gsap from "gsap";
// import Flip from "gsap/Flip";

// gsap.registerPlugin(Flip);

interface NavigationTabsProps {
  tabs: string[];
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

function NavigationTabs(props: NavigationTabsProps) {
  return (
    <div className="flex flex-col justify-evenly h-full border-r border-front border-opacity-20 w-max">
      {props.tabs.map((tab) => (
        <button
          onClick={() => {
            props.setCurrentTab(tab);
          }}
          className="cursor-pointer px-10 relative"
        >
          {tab}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max p-4 rounded-full bg-front bg-opacity-30 pointer-events-none text-front text-opacity-0">
            {tab}
          </div>
        </button>
      ))}
    </div>
  );
}

NavigationTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  setCurrentTab: PropTypes.func,
};

export default NavigationTabs;
