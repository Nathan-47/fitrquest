import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import questionLogo from '../images/fitrquest_logo.svg';


// quest component data
import Quest from "../data/quest";



const QuestFinder = () => {

//useRef selectors
const showImgRef = useRef(null);
const showVidsRef = useRef(null);
const showLinkRef = useRef(null);
const showtabRef = useRef(null);
const showRec = document.querySelector('.quest-rec-heading');
const showRecContent = document.querySelector('.quest-rec-content');
const showHelpVid = document.querySelector('.quest-help-heading');
const showRestartBtn = document.querySelector('.restartBtn');


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
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


    const [value, setValue] = React.useState(0);

    const handleChange = (_event, newValue) => {
      setValue(newValue);
    };

// tabs function component



// navigate via user interactions with the questions
    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState('')

    useEffect(() => {
        setCurrentQ(Quest[0])
    }, [])

    
    // Question handlers
    const selectClickA = () => {
        console.log('a clicked')
        const nextQ = Quest.find(question => question.id === currentQ.idNextQuestionA)
        if (nextQ) {
                setCurrentQ(nextQ)
        } else {
            // FIXME: I dont know if this is needed?
            navigate(`/result/${currentQ.questResultA}`)
        }
    }

    const selectClickB = () => {
        console.log('b clicked')
        const nextQ = Quest.find(question => question.id === currentQ.idNextQuestionB)
        if (nextQ) {
            setCurrentQ(nextQ)
        } else {
            // FIXME: I dont know if this is needed?
            navigate(`/result/${currentQ.questResultB}`)
        }
    }


    // show the hidden elents when user given results
    console.log(currentQ.question)
    if (['Bodybuilding', 'Powerlifting', 'Crossfit/Hyrox'].includes(currentQ.question)) {
        console.log('update me!')
        showImgRef.current?.classList.add('show');
        showVidsRef.current?.classList.add('show');
        showLinkRef.current?.classList.add('show');
        showtabRef.current?.classList.add('show');
        showRec.classList.add('show');
        showRecContent.classList.add('show');
        showHelpVid.classList.add('show');
        showRestartBtn.classList.add('show');
    }

    // Display youtube videos 
    const ytvid = `https://www.youtube.com/embed/${currentQ.answerVideo}`;
    const eatvid = `https://www.youtube.com/embed/${currentQ.answerLink3}`;
    const recvid = `https://www.youtube.com/embed/${currentQ.recoveryvid}`;
    console.log(currentQ.answerLink3);

    // Display macro calculator link
    const macLink = `${currentQ.answerlink1}`;
    const macLink2 = `${currentQ.answerLink2}`;
    const recLink = `${currentQ.recoveryLink}`;
    const trainLink = `${currentQ.trainingLink}`;
    console.log(currentQ.trainLink)


    return (
        <>

        <div className="container">
            <div className="row">
              <div className="question-wrapper">
              <div className="question-logo"><img src={questionLogo} alt="fitrquest logo"/></div>
              <div className="textsection">{currentQ.question}</div>

              <div className="grid grid-cols-2 grid-rows-1 gap-2">
                <button className="quiz-button" onClick={selectClickA}> 
                    {currentQ.answerA}
                </button>
                <button className="quiz-button" onClick={selectClickB}> 
                  {currentQ.answerB}
                </button>
              </div>
              </div>

                <div className="quest-intro-snippet">{currentQ.intro}</div>
                <div className="quest-intro">{currentQ.content}</div>
                
          {/* Tabs */}
                <div className="tab-wrapper" ref={showtabRef}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 0}}>
                            <Tabs value={value} onChange={handleChange}
                             aria-label="Quest paths">
                                <Tab label="Training" {...a11yProps(0)} />
                                <Tab label="Nutrition" {...a11yProps(1)} />
                                <Tab label="Recovery" {...a11yProps(2)} />
                                <Tab label="Learn" {...a11yProps(3)} />
                            </Tabs>
                        </Box>

        <CustomTabPanel value={value} index={0}>
        <div className="quest-cal1">{currentQ.training}</div>
        <br />
            <a className="quest-link" href={trainLink} ref={showLinkRef}>[1] WOD Workouts - Find various beginner friendly workouts to modify at your pace</a>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
        <div className="quest-cal3">{currentQ.nutrition}</div>     
        <br />      
        <a className="quest-link" href={macLink} ref={showLinkRef}>[1] Macro Finder - Calculate what your macros should be determined by your given calories.</a>
        <br />
        <a className="quest-link" href={macLink2} ref={showLinkRef}>[2] Meal Planner - Struggling to plan meals? Have no fear, plan all your meals here. All meals macro nutrient friendly and easy to make.</a>
        <br />
        <a className="quest-link" href={eatvid} ref={showLinkRef}>[3] Beginners guide to using MyFitnessPal to help track calories</a>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
        <div className="quest-cal4">{currentQ.recovery}</div>
        <br />
        <a className="ques-cal4" href={recLink}>Top 14 Tips for muscle recovery</a>
        <br />
        <div className="video" ref={showVidsRef}>
            `<iframe id="video-frame" src={recvid}></iframe>`
        </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <div className="quest-cal1">
            {/* Allows for a line break from the received JSON data*/}
            {currentQ.learn?.split('\n').map((line, index) => (
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
      
      <p className="quest-rec-content">Here are amazing influencers that will assist you on your quest. Click on all below or type their name into various social media apps to engage and watch all their content.</p>

      <div class="columns-3">
        {/* TODO:Add template literal for image alt tag */}
        <p className="influencer-names" ref={showImgRef}>{currentQ.imgFileName}</p>
      <img id="quest-image" className="col-4" ref={showImgRef} src={currentQ.imgFile} />

      <p className="influencer-names" ref={showImgRef}>{currentQ.imgFileName2}</p>
      <img class="col-4" ref={showImgRef} src={currentQ.imgFile2}  />

      <p className="influencer-names" ref={showImgRef}>{currentQ.imgFileName3}</p>
      <img className="col-4" ref={showImgRef} src={currentQ.imgFile3}  />
      </div>

        {/* <img className="quest-image" ref={showImgRef} src={currentQ.imgFile} alt="bodybulding" /> */}

        <p className="quest-help-heading">Helpful Videos</p>
        {/* TODO: For vids add the hidden class on divs instead of CSS */}
        <div className="video1" ref={showVidsRef}>
            `<iframe id="video-frame" src={ytvid}></iframe>`
        </div>



        {/* FIXME: Link back to quest page once created */}
      <Link to="/" onClick={() => window.location.reload()} className="restartBtn"aria-label="Restart Quest"> Restart Quest</Link>
            </div>
        </div>

        </>
    )
}

export default QuestFinder;





