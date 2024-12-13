import { useLocation, useNavigate, useParams } from "react-router";
import QuestionsNavigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as quizzesClient from "../client";
import { setQuestions } from "./reducer";

export default function QuestionAttempt() {

    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { qid, atid, qaid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [ questionType, setQuestionType ] = useState<any>("multiple choice");
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const question = questions.find((question: any) => question._id === qaid);
    const questionTypes = ["multiple choice", "fill in the blank", "true or false"];

    const [description, setDescription] = useState(question && question.description);
    const [points, setPoints] = useState(question && question.points);
    const [possibleAnswers, setPossibleAnswers] = useState<string[]>(question && question.possible_answers);
    const [userAnswer, setUserAnswer] = useState<any>();
    const [userPoint, setUserPoint] = useState<any>();
    
    const fetchQuestions = async () => {
        if (!qid) return;
        const questions = await quizzesClient.getQuestions(qid);
        dispatch(setQuestions(questions));
    }; useEffect(() => {
        fetchQuestions();
    }, [qid]);

    const setQuestion = async () => {
        if (!question) return;
        setQuestionType(question.type);
        setDescription(question.description);
        setPossibleAnswers(question.possible_answers);
        setPoints(question.points);
        if(!qid || !atid || !qaid) return;
        const attempt = await quizzesClient.getAttempt(qid, atid);
        const answer = attempt.answers.find((a:any) => a.question === qaid);
        setUserAnswer(answer.user_answer);
        if(answer.is_correct === true) {
            setUserPoint(question.points);
        } else {
            setUserPoint(0);
        }
    }; useEffect(() => {
        setQuestion()
    }, [question]);

    const goToNextQuestion = () => {
        let index = questions.findIndex((q: any) => q._id === question._id);
        if (index < questions.length - 1) {
            index += 1;
        }

        navigate(`${currentPath.replace(`/${qaid}`, `/${questions[index]._id}`)}`);
    }

    const goToPreviousQuestion = () => {
        let index = questions.findIndex((q: any) => q._id === question._id);
        if (index > 0) {
            index -= 1;
        }
        navigate(`${currentPath.replace(`/${qaid}`, `/${questions[index]._id}`)}`);
    }

    return (

        <div id="wd-questions-view">

            <div className="d-flex justify-content-between">
                <form className="flex-grow-1 d-flex justify-content-center">
                <div className="position-relative">

                <label className="bg-danger bg-opacity-10 text-danger ms-5 mt-4 
                d-flex justify-content-center align-items-center rounded py-3">
                    <strong>Note: You are viewing an attempted quiz. Editing is disabled.</strong></label>

                <div className="card ms-5 mb-4 mt-5">
                <div className="card-header fw-bold">
                Question {questions.findIndex((q: any) => q._id === question._id) + 1}
                <span className="float-end">{userPoint} / {points} Points</span>
                </div>
                
                <div className="card-body">
                <div className="form-group row mb-1 mt-5 border-bottom">
                            <div>
                            <div dangerouslySetInnerHTML={{ __html: description }}></div><br /><br />
                            </div>
                </div>

                {question && questionType === "multiple choice" &&
                <>
                
                <div className="form-group row mb-2">
                <label htmlFor="wd-description" className="col-form-label"><strong>Choices</strong> &nbsp;
                (Please select <strong>one</strong> that best describes the answer)</label>
                    {possibleAnswers && possibleAnswers.map((choice: string, index: number) => (
                        <>
                        {choice === question.correct_answer && choice === userAnswer ?
                        <div className="d-flex align-items-center mt-1 border-bottom">
                        <input type="radio" name="multiple-choice" value={choice} checked={userAnswer === choice}/>
                        <label htmlFor={`choice-${index}`} className= "ms-4">{choice} <span className="text-success ms-2"> 
                            <strong>Your Answer is Correct</strong></span></label><hr />
                        </div> : 
                        
                        choice === question.correct_answer ? <div className="d-flex align-items-center mt-1 border-bottom">
                        <input type="radio" name="multiple-choice" value={choice} checked={userAnswer === choice}/>
                        <label htmlFor={`choice-${index}`} className= "ms-4">{choice} <span className="text-success ms-2"> 
                            <strong>Correct Answer</strong></span></label><hr />
                        </div> : 
                        
                        choice === userAnswer ? <div className="d-flex align-items-center mt-1 border-bottom">
                        <input type="radio" name="multiple-choice" value={choice} checked={userAnswer === choice}/>
                        <label htmlFor={`choice-${index}`} className= "ms-4">{choice} <span className="text-danger ms-2"> 
                        <strong>Your Answer</strong></span></label><hr />
                        </div> :


                        <div className="d-flex align-items-center mt-1 border-bottom">
                        <input type="radio" name="multiple-choice" value={choice} checked={userAnswer === choice}/>
                        <label htmlFor={`choice-${index}`} className= "ms-4">{choice} <span className="text-success ms-2"> 
                        </span></label><hr />
                        </div>
                        }
                        </>
                    ))}
                </div>
                
                </>
                }

                {question && questionType === "fill in the blank" &&
                <>
                
                <div className="form-group row mb-2">
                <label htmlFor="wd-description" className="col-form-label"><strong>Your Answer</strong> &nbsp;
                (Please enter the correct answer in the blank)</label>
                {question.possible_answers.includes(userAnswer)  ?
                <>
                <label className="ms-2" >{userAnswer} <span className="text-success ms-2">
                <strong>Your Answer is Correct</strong></span></label>
                
                </>
                :
                <>
                <label className="text-danger mt-2"><strong>Your Answer: {userAnswer}</strong></label>
                {question.possible_answers.map((answer: any) => 
                        (<label className="text-success mt-2"><strong>Acceptable Answer: {answer}</strong></label>))} 
                </>
                }
                </div>
                
                </>
                }

                
                {question && questionType === "true or false" &&
                <>
                <div className="form-group row mb-2">

                    <label htmlFor="wd-description" className="col-form-label "><strong>True or False</strong>&nbsp;
                    (Please select <strong>one</strong> that best describes the answer)</label>
                    
                    <div className="d-flex align-items-center mt-4 border-bottom">
                        <input id="true" type="radio" name="true-or-false" value="true" 
                        checked={userAnswer === "true"}/>
                        <label className="ms-2" htmlFor="true">True
                        {question.correct_answer === userAnswer && question.correct_answer === "true" ? 
                        <>
                        <span className="text-success ms-2"> <strong>Your Answer is Correct</strong></span>
                        </>: question.correct_answer === "true" ?
                        <>
                        <span className="text-success ms-2"> <strong>Correct Answer</strong></span> 
                        </>: userAnswer === "true" && <span className="text-danger ms-2"> <strong>Your Answer</strong></span> 
                        }
                        </label>
                    </div>

                    <div className="d-flex align-items-center mt-4 border-bottom">
                        <input id="false" type="radio" name="true-or-false" value="false" 
                        checked={userAnswer === "false"}/>
                        <label className="ms-2" htmlFor="false">False
                        {question.correct_answer === userAnswer && question.correct_answer === "false" ? 
                        <>
                        <span className="text-success ms-2"> <strong>Your Answer is Correct</strong></span>
                        </>: question.correct_answer === "false" ?
                        <>
                        <span className="text-success ms-2"> <strong>Correct Answer</strong></span> 
                        </>: userAnswer === "false" && <span className="text-danger ms-2"> <strong>Your Answer</strong></span> 
                        }
                        </label>
                    </div>
                
                </div>
                
                </>
                }
                
                </div>
                </div>

                    {questions.findIndex((q: any) => q._id === question._id) !== 0 &&
                    <button className="btn btn-secondary ms-5" onClick={goToPreviousQuestion}>Previous</button>
                    }

                    {questions.findIndex((q: any) => q._id === question._id) + 1 !== questions.length &&
                    <button className="btn btn-secondary float-end" onClick={goToNextQuestion}>Next</button>
                    }

                </div>
                </form>                
                
                <div>
                    <QuestionsNavigation questions={questions}/>
                </div>
                
            </div>
        </div>
    );
}