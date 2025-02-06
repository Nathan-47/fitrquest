import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


// quest component data
import Quest from "../components/quest";


const QuestFinder = () => {

// Query selectors
const showImg = document.querySelector('.quest-image');
const showVids = document.querySelector('.video1')


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


    // show the hidden image when answers are shown
    console.log(currentQ.question)
    if (currentQ.question === 'Bodybuilding') {
        console.log('update me!')
        showImg.classList.add('show');
        showVids.classList.add('show');
    }

    // Display youtube vid per answer 
    const ytvid = `https://www.youtube.com/embed/${currentQ.answerVideo}`
    console.log(currentQ.answerVideo);


    return (
        <>

        <div className="textsection">{currentQ.question}</div>

        <button className="quiz-button" onClick={selectClickA}> 
        {currentQ.answerA}
        <br />
        <div className="quest-cal2">{currentQ.answerA2}</div>
        <br />
        <div className="quest-cal3">{currentQ.answerA3}</div>
        <br />
        <div className="quest-cal4">{currentQ.answerA4}</div>
        <br />
        <img className="quest-image" src={currentQ.imgFile} alt="bodybulding" />
        <br />
        <div className="quest-cal">{currentQ.answerCalories}</div>
        <br />
        <div className="quest-info">{currentQ.answerInfo}</div>
        <br />

        {/* TODO: For vids add the hidden class on divs instead of CSS */}
        <div className="video1">
            `<iframe id="video-frame" src={ytvid}></iframe>`
            </div>
        </button>


        <button className="quiz-button" onClick={selectClickB}> {currentQ.answerB}
        </button>
        
        <br /><br />


        {/* FIXME: Link back to homepage to test if it works */}
        <Link className="quiz-link" to="/" onClick={() => window.location.reload()}>Restart Quest</Link>

        </>

    )
}

export default QuestFinder;