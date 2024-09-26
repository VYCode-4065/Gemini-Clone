import React, { useContext } from "react";
import "./Main.css";
import assets from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="top">
        <div className="logo">
          <img src={assets.gemini_icon} alt="" />
          <p>Gemini</p>
        </div>
        <div className="profile">
          <img src={assets.user_icon} alt="" />
        </div>
      </div>
      {!showResult ? (
        <div className="middle flex-dev">
          <div className="name-section">
            <span>Hello,Vishal</span>
            <br />
            <p>How can I help you today?</p>
          </div>
          <div className="predefined">
            <div className="pre-item">
              <p>Find YouTube videos with inspiring best man speeches</p>
              <img src={assets.youtube_icon} alt="" />
            </div>
            <div className="pre-item">
              <p>Help write SQL to generate a report</p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="pre-item">
              <p>Create trivia questions about a specific topic</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="pre-item">
              <p>Show the most important emails in my inbox</p>
              <img src={assets.compass_icon} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="result flex-dev">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />

            <p>{recentPrompt}</p>
          </div>
          <div className="result-box">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            )}
          </div>
        </div>
      )}

      <div className="bottom flex-dev">
        <div className="input-container bottom-div">
          <input
            type="text"
            placeholder="Enter prompt here..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="text-area">
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} onClick={() => onSent()} />
          </div>
        </div>

        <div className="bottom-info bottom-div">
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <a href="https://support.google.com/gemini?p=privacy_notice">
              Your privacy & Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
