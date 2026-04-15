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
  const [showResults, setShowResults] = useState<boolean>(false);

  /* Initial question */
  useEffect(() => {
    setCurrentQ(Quest[0]);
  }, []);

  /* Detect result state */
  useEffect(() => {
    if (!currentQ) return;

    if (
      ["Bodybuilding", "Powerlifting", "Crossfit/Hyrox"].includes(
        currentQ.question,
      )
    ) {
      setShowResults(true);
    }
  }, [currentQ]);

  if (!currentQ) return null;

  // navigation handler
  const selectClickA = () => {
    if (!currentQ) return;

    const nextQ = Quest.find(
      (q: QuestType) => q.id === currentQ.idNextQuestionA,
    );
    if (nextQ) setCurrentQ(nextQ);
  };

  const selectClickB = () => {
    if (!currentQ) return;

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
        {!showResults && (
          <div className="question-wrapper">
            <div className="question-logo">
              <img src={questionLogo} alt="fitrquest logo" />
            </div>

            <div className="textsection">{currentQ.question}</div>

            <div className="contents">
              <button onClick={selectClickA}>{currentQ.answerA}</button>

              <button onClick={selectClickB}>{currentQ.answerB}</button>
            </div>
          </div>
        )}

        <div className="quest-intro-snippet">{currentQ.intro}</div>
        <div className="quest-intro">{currentQ.content}</div>

        {/* tabs component  */}
        {showResults && (
          <div className="tab-wrapper">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
              >
                <Tab label="Training" {...a11yProps(0)} />
                <Tab label="Nutrition" {...a11yProps(1)} />
                <Tab label="Recovery" {...a11yProps(2)} />
                <Tab label="Learn" {...a11yProps(3)} />
              </Tabs>

              <CustomTabPanel value={tabValue} index={0}>
                <div>{currentQ.training}</div>
                <a href={currentQ.trainingLink}>Training Link</a>
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={1}>
                <div>{currentQ.nutrition}</div>
                <a href={currentQ.answerlink1}>Macro Finder</a>
                <br />
                <a href={currentQ.answerLink2}>Meal Planner</a>

                <iframe src={eatvid} title="Nutrition Help" />
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={2}>
                <div>{currentQ.recovery}</div>

                <iframe src={recvid} title="Recovery Video" />
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={3}>
                {currentQ.learn?.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </CustomTabPanel>
            </Box>
          </div>
        )}

        {/* influencer section */}
        {showResults && (
          <>
            <p className="quest-rec-heading">Influencer Recommendation</p>

            <div className="columns-3">
              <a href={instaLink} target="_blank">
                <p>{currentQ.imgFileName}</p>
                <img src={currentQ.imgFile} alt={currentQ.altTag1} />
              </a>

              <a href={instaLink2} target="_blank">
                <p>{currentQ.imgFileName2}</p>
                <img src={currentQ.imgFile2} alt={currentQ.altTag2} />
              </a>

              <a href={instaLink3} target="_blank">
                <p>{currentQ.imgFileName3}</p>
                <img src={currentQ.imgFile3} alt={currentQ.altTag3} />
              </a>
            </div>

            <p className="quest-help-heading">Helpful Videos</p>

            <iframe src={ytvid} title="Helpful training video" />

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
