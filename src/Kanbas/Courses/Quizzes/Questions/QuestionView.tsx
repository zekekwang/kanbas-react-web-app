import { useLocation, useNavigate, useParams } from "react-router";
import QuestionsNavigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as quizzesClient from "../client";
import { setQuestions } from "./reducer";

export default function QuestionView() {

    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { qid, qaid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [ questionType, setQuestionType ] = useState<any>("multiple choice");
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const question = questions.find((question: any) => question._id === qaid);
    const questionTypes = ["multiple choice", "fill in the blank", "true or false"];

    const [description, setDescription] = useState(question && question.description);
    const [points, setPoints] = useState(question && question.points);
    const [possibleAnswers, setPossibleAnswers] = useState<string[]>(question && question.possible_answers);
    const [correctAnswer, setCorrectAnswer] = useState<any>();

    const fetchQuestions = async () => {
        if (!qid) return;
        const questions = await quizzesClient.getQuestions(qid);
        dispatch(setQuestions(questions));
    }; useEffect(() => {
        fetchQuestions();
    }, [qid]);

    const setQuestion = () => {
        if (!question) return;
        setQuestionType(question.type);
        setDescription(question.description);
        setPossibleAnswers(question.possible_answers);
        setPoints(question.points);
        setCorrectAnswer(question.correct_answer);
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

                {currentUser.role === "FACULTY" && 
                <label className="bg-danger bg-opacity-10 text-danger ms-5 mt-4 
                d-flex justify-content-center align-items-center rounded py-3">
                    <strong>Note: This is a preview of the published version of the quiz</strong></label>
                }

                <div className="card ms-5 mb-4 mt-5">
                <div className="card-header fw-bold">
                Question {questions.findIndex((q: any) => q._id === question._id) + 1}
                <span className="float-end">{points} Points</span>
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
                        <div className="d-flex align-items-center mt-1 border-bottom">
                            <input type="radio" name="multiple-choice" value={choice}
                            onChange={(e) => setCorrectAnswer(e.target.value)}/>
                            <label htmlFor={`choice-${index}`} className= "ms-4">{choice}</label><hr />
                        </div>
                    ))}
                </div>
                
                </>
                }

                {question && questionType === "fill in the blank" &&
                <>
                
                <div className="form-group row mb-2">
                <label htmlFor="wd-description" className="col-form-label"><strong>Your Answer</strong> &nbsp;
                (Please enter the correct answer in the blank)</label>
                    <input type="text" className="form-control ms-2 mt-3 w-50" />
                </div>
                
                </>
                }

                
                {question && questionType === "true or false" &&
                <>
                <div className="form-group row mb-2">

                    <label htmlFor="wd-description" className="col-form-label "><strong>True or False</strong>&nbsp;
                    (Please select <strong>one</strong> that best describes the answer)</label>
                    
                    <div className="d-flex align-items-center mt-4 border-bottom">
                        <input id="true" type="radio" name="true-or-false" value="true"/>
                        <label className="ms-2" htmlFor="true">True</label>
                    </div>

                    <div className="d-flex align-items-center mt-4 border-bottom">
                        <input id="false" type="radio" name="true-or-false" value="false"/>
                        <label className="ms-2" htmlFor="false">False</label>
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
            <hr />
            <button className="btn btn-danger float-end">Submit Quiz</button>
        </div>
    );
}