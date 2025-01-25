import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


// component
import Quest from "../components/quest";



const QuestFinder = () => {

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
                navigate(`/result/${currentQ.questResultA}`)
            }
    }

    const selectClickB = () => {
        console.log('b clicked')
        const nextQ = Quest.find(question => question.id === currentQ.idNextQuestionB)
        if (nextQ) {
            setCurrentQ(nextQ)
        } else {
            navigate(`/result/${currentQ.questResultB}`)
        }
    }



    return (
        <>        
        
        <p>{currentQ.question}</p>

        <button className="quiz-button" onClick={selectClickA}> {currentQ.answerA}
        </button>

        <button className="quiz-button" onClick={selectClickB}> {currentQ.answerB}
        </button>
        
        <br /><br />


        {/* TODO: Link back to homepage to test if it works */}

        <Link className="quiz-link" to="/" onClick={() => window.location.reload()}>Restart Quest</Link>

        </>

    )
}

export default QuestFinder;