import React, { useContext, useState, useEffect, useCallback } from "react";
import "./Sidebar.css";
import assets from "../../assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const { prevPrompt } = useContext(Context);
  const [collapse, setCollapse] = useState(false);
  const [recentData, setRecentData] = useState([]);

  // Memoize collapse toggle function using useCallback
  const toggleCollapse = useCallback(() => {
    setCollapse((prevCollapse) => !prevCollapse);
  }, []);

  useEffect(() => {
    // Only add prevPrompt if it's not already in the array
    if (prevPrompt && !recentData.includes(prevPrompt)) {
      setRecentData((prev) => [...prev, prevPrompt]);
    }
  }, [prevPrompt, recentData]);

  return (
    <div className={`sidebar ${collapse ? "collapse" : ""}`}>
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
          onClick={toggleCollapse} // Use memoized toggle function
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat Icon" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          {recentData.length > 0 &&
            recentData.map((item, index) => (
              <div className="recent-entry" key={index}>
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item}.....</p>
              </div>
            ))}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="Help Icon" />
          <p>Help</p>
        </div>

        <div className="bottom-item">
          <img src={assets.history_icon} alt="Activity Icon" />
          <p>Activity</p>
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="Settings Icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
