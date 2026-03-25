import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import questionLogo from "../images/fitrquest_logo.svg";

// quest component data
import Quest from "../data/quest";

const QuestFinder = () => {
  //useRef selectors
  const showImgRef = useRef(null);
  const showVidsRef = useRef(null);
  const showLinkRef = useRef(null);
  const showtabRef = useRef(null);
  const showRec = document.querySelector(".quest-rec-heading");
  const showRecContent = document.querySelector(".quest-rec-content");
  const showHelpVid = document.querySelector(".quest-help-heading");
  const showRestartBtn = document.querySelector(".restartBtn");
  const hideQuestion = document.querySelector(".question-wrapper");

  // tabs function component
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  // tabs function component

  // navigate via user interactions with the questions
  let navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState("");

  useEffect(() => {
    setCurrentQ(Quest[0]);
  }, []);

  // Question handlers
  const selectClickA = () => {
    const nextQ = Quest.find(
      (question) => question.id === currentQ.idNextQuestionA,
    );
    if (nextQ) {
      setCurrentQ(nextQ);
    }
  };

  const selectClickB = () => {
    const nextQ = Quest.find(
      (question) => question.id === currentQ.idNextQuestionB,
    );
    if (nextQ) {
      setCurrentQ(nextQ);
    }
  };
  // Question handlers

  // show the hidden elements when user is given results
  if (
    ["Bodybuilding", "Powerlifting", "Crossfit/Hyrox"].includes(
      currentQ.question,
    )
  ) {
    showImgRef.current?.classList.add("show");
    showVidsRef.current?.classList.add("show");
    showLinkRef.current?.classList.add("show");
    showtabRef.current?.classList.add("show");
    showRec.classList.add("show");
    showRecContent.classList.add("show");
    showHelpVid.classList.add("show");
    showRestartBtn.classList.add("show");
    hideQuestion.classList.add("hidden");
  }

  // Display youtube videos
  const ytvid = `https://www.youtube.com/embed/${currentQ.answerVideo}`;
  const eatvid = `https://www.youtube.com/embed/${currentQ.answerLink3}`;
  const recvid = `https://www.youtube.com/embed/${currentQ.recoveryvid}`;

  // Display macro and training help links
  const macLink = `${currentQ.answerlink1}`;
  const macLink2 = `${currentQ.answerLink2}`;
  const recLink = `${currentQ.recoveryLink}`;
  const trainLink = `${currentQ.trainingLink}`;

  // Display Instagram profiles
  const instaLink = `https://www.instagram.com/${currentQ.instaName}`;
  const instaLink2 = `https://www.instagram.com/${currentQ.instaName2}`;
  const instaLink3 = `https://www.instagram.com/${currentQ.instaName3}`;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="question-wrapper">
            <div className="question-logo">
              <img src={questionLogo} alt="fitrquest logo" />
            </div>
            <div className="textsection">{currentQ.question}</div>
            <div className="contents">
              <button
                className="p-4 bg-black text-white rounded-lg  hover:bg-[#E6A22B] hover:text-black"
                aria-label={`Answer A: ${currentQ.answerA}`}
                onClick={selectClickA}
              >
                {currentQ.answerA}
              </button>

              <button
                className="p-4 bg-black text-white mt-5 rounded-lg hover:bg-[#E6A22B] hover:text-black"
                aria-label={`Answer B: ${currentQ.answerB}`}
                onClick={selectClickB}
              >
                {currentQ.answerB}
              </button>
            </div>
          </div>

          <div className="quest-intro-snippet">{currentQ.intro}</div>
          <div className="quest-intro">{currentQ.content}</div>

          {/* Tabs */}
          <div className="tab-wrapper" ref={showtabRef}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 0 }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  aria-label="Quest paths"
                  sx={{
                    "& .MuiTabs-indicator": {
                      border: "3px solid #E6A22B",
                      height: "3px",
                      backgroundColor: "transparent",
                      color: "#292929",
                    },
                    "& .MuiTabs-flexContainer": {
                      justifyContent: "center",
                    },
                    "& .MuiTab-root": {
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      padding: { xs: "8px 4px", sm: "12px 16px" },
                    },
                  }}
                >
                  <Tab
                    label="Training"
                    sx={{
                      fontFamily: "Outfit",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#292929",
                      "&.Mui-selected": {
                        color: "#005180",
                      },
                    }}
                    {...a11yProps(0)}
                  />

                  <Tab
                    label="Nutrition"
                    sx={{
                      fontFamily: "Outfit",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#292929",
                      "&.Mui-selected": {
                        color: "#005180",
                      },
                    }}
                    {...a11yProps(1)}
                  />

                  <Tab
                    label="Recovery"
                    sx={{
                      fontFamily: "Outfit",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#292929",
                      "&.Mui-selected": {
                        color: "#005180",
                      },
                    }}
                    {...a11yProps(2)}
                  />

                  <Tab
                    label="Learn"
                    sx={{
                      fontFamily: "Outfit",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#292929",
                      "&.Mui-selected": {
                        color: "#005180",
                      },
                    }}
                    {...a11yProps(3)}
                  />
                </Tabs>
              </Box>

              <CustomTabPanel value={value} index={0}>
                <div className="quest-cal1">{currentQ.training}</div>
                <br />
                <a className="quest-link" href={trainLink} ref={showLinkRef}>
                  [1] WOD Workouts - Find various beginner friendly workouts to
                  modify at your pace
                </a>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <div className="quest-cal3">{currentQ.nutrition}</div>
                <br />

                <a className="quest-link" href={macLink} ref={showLinkRef}>
                  [1] Macro Finder - Calculate what your macros should be
                  determined by your given calories.
                </a>
                <br />

                <a className="quest-link" href={macLink2} ref={showLinkRef}>
                  [2] Meal Planner - Struggling to plan meals? Have no fear,
                  plan all your meals here. All meals are macro nutrient
                  friendly and easy to make.
                </a>
                <br />

                <a className="quest-link" href={eatvid} ref={showLinkRef}>
                  [3] Beginners guide to using MyFitnessPal to help track
                  calories
                </a>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <div className="quest-cal4">{currentQ.recovery}</div>
                <br />

                <a className="ques-cal4" href={recLink}>
                  Top 14 Tips for muscle recovery
                </a>
                <br />

                <div className="video" ref={showVidsRef}>
                  `<iframe id="video-frame" src={recvid}></iframe>`
                </div>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={3}>
                <div className="quest-cal1">
                  {/* Allows for a line break from the received JSON data*/}
                  {currentQ.learn?.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </CustomTabPanel>
            </Box>
          </div>
          {/* Tabs */}

          <p className="quest-rec-heading">Influencer Recommendation</p>

          <p className="quest-rec-content">
            Here are amazing influencer's that will assist you on your quest.
            Click on all below or type their name into various social media apps
            to engage and watch all their content.
          </p>

          <div className="columns-3">
            <a
              href={instaLink}
              aria-label={`Click to see ${currentQ.imgFileName} instagram profile`}
              target="_blank"
            >
              <p className="influencer-names" ref={showImgRef}>
                {currentQ.imgFileName}
              </p>
              <img
                className="col-4"
                ref={showImgRef}
                src={currentQ.imgFile}
                alt={currentQ.altTag1}
              />
            </a>

            <a
              href={instaLink2}
              aria-label={`Click to see ${currentQ.imgFileNam2} instagram profile`}
              target="_blank"
            >
              <p className="influencer-names" ref={showImgRef}>
                {currentQ.imgFileName2}
              </p>
              <img
                className="col-4"
                ref={showImgRef}
                src={currentQ.imgFile2}
                alt={currentQ.altTag2}
              />
            </a>

            <a
              href={instaLink3}
              aria-label={`Click to see ${currentQ.imgFileName3} instagram profile`}
              target="_blank"
            >
              <p className="influencer-names" ref={showImgRef}>
                {currentQ.imgFileName3}
              </p>
              <img
                className="col-4"
                ref={showImgRef}
                src={currentQ.imgFile3}
                alt={currentQ.altTag3}
              />
            </a>
          </div>

          <p className="quest-help-heading">Helpful Videos</p>
          <div className="video1" ref={showVidsRef}>
            `
            <iframe
              id="video-frame"
              src={ytvid}
              title="Helpful video to help with planning exercises depending on quest plan"
            ></iframe>
            `
          </div>

          <Link
            to="/"
            className="restartBtn"
            aria-label="Restart Quest"
          >
            Restart Quest
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuestFinder;
