import React from "react";

function Nav(props) {
  const { navTabs = [], setCurrentNavTab, currentNavTab } = props;

  return (
    <div className="header-div">
      <nav>
        <ul className="nav-bar">
          {navTabs.map((category) => (
            <li
              className={`${currentNavTab} === ${category.name} ? "current-nav-tab" : ""`}
              key={category.name}
            >
              <span onClick={() => setCurrentNavTab(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
