import { useEffect, useState, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import questionLogo from "../images/fitrquest_logo.svg";
import Quest from "../data/quest";
import { QuestType } from "../QuestType";

// tabs
interface CustomTabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function CustomTabPanel({ children, value, index }: CustomTabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const QuestFinder = () => {
  const [currentQ, setCurrentQ] = useState<QuestType | null>(null);
  const [tabValue, setTabValue] = useState<number>(0);
  // const [showResults, setShowResults] = useState<boolean>(false);

  /* Initial question */
  useEffect(() => {
    setCurrentQ(Quest[0]);
  }, []);

  /* Detect result state */
  // useEffect(() => {
  //   if (!currentQ) return;

  //     setShowResults(!!currentQ.isResult);

  // }, [currentQ]);

  if (!currentQ) return null;

  const isResult = currentQ.isResult === true;

  // navigation handler
  const selectClickA = () => {
    if (!currentQ.idNextQuestionA) return;

    const nextQ = Quest.find(
      (q: QuestType) => q.id === currentQ.idNextQuestionA,
    );
    if (nextQ) setCurrentQ(nextQ);
  };

  const selectClickB = () => {
    if (!currentQ.idNextQuestionB) return;

    const nextQ = Quest.find(
      (q: QuestType) => q.id === currentQ.idNextQuestionB,
    );
    if (nextQ) setCurrentQ(nextQ);
  };

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // dynamic links
  const ytvid = `https://www.youtube.com/embed/${currentQ.answerVideo}`;
  const eatvid = `https://www.youtube.com/embed/${currentQ.answerLink3}`;
  const recvid = `https://www.youtube.com/embed/${currentQ.recoveryvid}`;

  const instaLink = `https://www.instagram.com/${currentQ.instaName}`;
  const instaLink2 = `https://www.instagram.com/${currentQ.instaName2}`;
  const instaLink3 = `https://www.instagram.com/${currentQ.instaName3}`;

  return (
    <div className="container">
      <div className="row">
        {/* questions */}
        {!isResult && (
          <div className="question-wrapper">
            <div className="question-logo">
              <img src={questionLogo} alt="fitrquest logo" />
            </div>

            <div className="textsection">{currentQ.question}</div>

            <div className="contents">
              <button
                className="bg-black text-yellow-500 m-3 p-4 text-lg font-bold rounded-md 
              hover:bg-white 
              hover:outline
             hover:outline-2
             hover:text-black"
                onClick={selectClickA}
              >
                {currentQ.answerA}
              </button>

              <button
                className="bg-black text-yellow-500 m-3 p-4 text-lg font-bold rounded-md 
              hover:bg-white 
              hover:outline
             hover:outline-2
             hover:text-black
             "
                onClick={selectClickB}
              >
                {currentQ.answerB}
              </button>
            </div>
          </div>
        )}

        {/* Results component */}
        {isResult && (
          <>
            {/* Intro */}
            {currentQ.intro && (
              <div className="quest-intro-snippet">{currentQ.intro}</div>
            )}

            {currentQ.content && (
              <div className="quest-intro">{currentQ.content}</div>
            )}

            {/* tabs component  */}
            <div className="tab-wrapper">
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{
                    "& .MuiTab-root": {
                      color: "#292929",
                      fontWeight: 600,
                      textTransform: "none",
                    },
                    "& .Mui-selected": {
                      color: "#E6A22B",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#E6A22B",
                      height: "3px",
                    },
                  }}
                >
                  <Tab label="Training" {...a11yProps(0)} />
                  <Tab label="Nutrition" {...a11yProps(1)} />
                  <Tab label="Recovery" {...a11yProps(2)} />
                  <Tab label="Learn" {...a11yProps(3)} />
                </Tabs>
              </Box>

              <CustomTabPanel value={tabValue} index={0}>
                <div>{currentQ.training}</div>
                <a
                  href={currentQ.trainingLink}
                  className="text-blue-600 underline !mt-6"
                >
                  Training Link
                </a>
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={1}>
                <div>{currentQ.nutrition}</div>
                <a
                  href={currentQ.answerlink1}
                  className="text-blue-600 underline !mt-6"
                >
                  Macro Finder
                </a>
                <br />
                <a
                  href={currentQ.answerLink2}
                  className="text-blue-600 underline !mt-6"
                >
                  Meal Planner
                </a>

                <iframe
                  src={eatvid}
                  className="!mt-10 mb-12 mt-10 w-full aspect-video"
                  allowFullScreen
                  title="Nutrition Help"
                />
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={2}>
                <div>{currentQ.recovery}</div>

                <iframe
                  src={recvid}
                  className="!mt-10 mb-12 mt-10 w-full aspect-video"
                  allowFullScreen
                  title="Recovery Video"
                />
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={3}>
                {currentQ.learn?.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </CustomTabPanel>
            </div>

            {/* influencer section */}
            <p className="quest-rec-heading">Influencer Recommendation</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentQ.instaName && (
                <a
                  href={`https://www.instagram.com/${currentQ.instaName}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <div className="w-full max-w-sm h-auto mx-auto">
                    <p className="w-full">{currentQ.imgFileName}</p>
                    <img
                      className="w-full"
                      src={currentQ.imgFile}
                      alt={currentQ.altTag1}
                    />
                  </div>
                </a>
              )}

              {currentQ.instaName2 && (
                <a
                  href={`https://www.instagram.com/${currentQ.instaName2}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <div className="w-full max-w-sm h-auto mx-auto">
                    <p>{currentQ.imgFileName2}</p>
                    <img
                      className="w-full"
                      src={currentQ.imgFile2}
                      alt={currentQ.altTag2}
                    />
                  </div>
                </a>
              )}

              {currentQ.instaName3 && (
                <a
                  href={`https://www.instagram.com/${currentQ.instaName3}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <div className="w-full max-w-sm h-auto mx-auto">
                    <p>{currentQ.imgFileName3}</p>
                    <img
                      className="w-full"
                      src={currentQ.imgFile3}
                      alt={currentQ.altTag3}
                    />
                  </div>
                </a>
              )}
            </div>

            {/* Helpful Video */}
            {currentQ.answerVideo && (
              <>
                <p className="quest-help-heading mb-10">Helpful Videos</p>
                <div className="mb-12 mt-10 w-full aspect-video">
                  <iframe
                    src={ytvid}
                    title="Helpful training video"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </>
            )}

            <Link to="/" className="restartBtn">
              Restart Quest
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestFinder;
