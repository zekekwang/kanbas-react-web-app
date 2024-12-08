import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import * as quizzesClient from "../client";
import * as questionsClient from "./client";
import QuestionsNavigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "./reducer";

export default function QuestionEditor() {

    const location = useLocation();
    const currentPath = location.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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

    const updateQuiz = async (questions: any[]) => {

        if (!qid || !question) return;

        const quiz = await quizzesClient.getQuiz(qid);

        let sum = 0
        for (let i=0; i < questions.length; i++) {
            sum += questions[i].points;
        }

        const currentQuiz = {
            _id: qid,
            name: quiz.name,
            instruction: quiz.instruction,
            course: quiz.course,
            num_of_questions: questions.length,
            points: sum,
            shuffle_answer: quiz.shuffle_answer,
            has_time_limit: quiz.has_time_limit,
            time_limit: quiz.time_limit,
            has_many_attempts: quiz.has_many_attempts,
            how_many_attempts: quiz.how_many_attempts,
            show_correct_answer: quiz.show_correct_answer,
            show_answer_date: quiz.show_answer_date,
            access_code_required: quiz.access_code_required,
            access_code: quiz.access_code,
            one_question_at_a_time: quiz.one_question_at_a_time,
            webcam_required: quiz.webcam_required,
            lock_questions_after_answering: quiz.lock_questions_after_answering,
            due_date: quiz.due_date,
            available_date: quiz.available_date,
            until_date: quiz.until_date,
          };
          await quizzesClient.updateQuiz(currentQuiz);
    }

    const fetchQuestions = async () => {
        if (!qid) return;
        const questions = await quizzesClient.getQuestions(qid);
        dispatch(setQuestions(questions));
        await updateQuiz(questions);
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

    const addNewQuestion = async () => {

        if (!qid) return;

        const quiz = await quizzesClient.getQuiz(qid);

        const newQuestion = {
            type: "multiple choice",
            description: "New description",
            points: 1,
            possible_answers: [],
            correct_answer: null,
        }
        const createdQuestion = await quizzesClient.createQuestion(quiz, newQuestion);
        fetchQuestions();

        navigate(`${currentPath.replace(`/${qaid}`, `/${createdQuestion._id}`)}`);
    }

    const deleteAQuestion = async () => {
        
        if (!qaid || !qid) return;

        const currentQuestionIndex = questions.findIndex((q: any) => q._id === qaid);
        await questionsClient.deleteQuestion(qaid);
        fetchQuestions();

        let nextQuestion = null;
        if (currentQuestionIndex >= 0) {
            nextQuestion = questions[currentQuestionIndex + 1] || questions[currentQuestionIndex - 1];
        }
    
        if (nextQuestion) {
            navigate(`${currentPath.replace(`/${qaid}`, `/${nextQuestion._id}`)}`);
        } else {
            navigate(`${currentPath.replace(`/${qaid}`, "")}`);
        }
    }

    const updateAQuestion = async () => {
        const currentQuestion = {
            _id: qaid,
            type: questionType,
            quiz: qid,
            description: description,
            points: points,
            possible_answers: possibleAnswers,
            correct_answer: correctAnswer,
        }
        await questionsClient.updateQuestion(currentQuestion);
        fetchQuestions();
    }

    const addNewAnswer = () => {
        setPossibleAnswers([...possibleAnswers, ""]);
    };
    
    return(
        <div className="wd-quizzes-editor">
            {currentUser.role === "FACULTY" && 
            <>
            <div id="wd-css-navigating-with-tabs" className="ms-5 mt-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link to={`${currentPath.replace(`/Questions/${qaid}`, "")}`} className="nav-link text-danger"> Details </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={`${currentPath}`} className="nav-link active"> Questions </Link>
                    </li>
                </ul>
            </div>
            <br />
            
            <div className="d-flex justify-content-between">

            {question && questionType === "multiple choice" && 
                <>
                <form>

                    <div className="form-group row ms-5 mb-4 mt-2">
                    <div className="d-flex align-items-center">
                        <label htmlFor="wd-name" className="col-form-label"><strong>Question Type</strong></label>
                        <select className="form-select ms-2 w-25" id="wd-question-type" value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}>
                            {questionTypes.map((type) => (
                                question.type === type ? <option selected value={type}>{type}</option> :
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                        <label htmlFor="wd-question-point" className="col-form-label ms-4"><strong>Points</strong></label>
                        <input id="wd-points" className="form-control ms-2 w-25" value={points}
                        onChange={(e)=>{setPoints(e.target.value)}}/>
                    </div>
                    </div>

                    <div className="form-group row ms-5 mb-4 mt-2">
                        <label htmlFor="wd-description" className="col-form-label">
                        <strong>Description</strong>
                        </label>
                        <div>
                        <ReactQuill value={description} id="wd-description" className="form-control ms-2 w-75"
                        onChange={(value) => setDescription(value)}/>
                        </div>
                    </div>

                <div className="form-group row ms-5 mb-4 mt-2">
                    <label htmlFor="wd-description" className="col-form-label"><strong>Choices</strong></label>
                    {possibleAnswers && possibleAnswers.map((choice: string, index: number) => (
                        <div className="d-flex align-items-center mt-4">
                            <input type="radio" name="multiple-choice" value={choice} checked={correctAnswer === choice} 
                            onChange={(e) => setCorrectAnswer(e.target.value)}/>
                            <label htmlFor={`choice-${index}`} className="col-form-label ms-4"><strong>Possible Choice</strong></label>
                            <input id={`choice-${index}`} className="form-control ms-2 w-25" value={choice} 
                            onChange={(e) => {
                                const updatedAnswers = [...possibleAnswers];
                                updatedAnswers[index] = e.target.value;
                                setPossibleAnswers(updatedAnswers);
                            }}/>
                            <a className="btn text-danger"
                            onClick={() => {
                                const updatedAnswers = possibleAnswers.filter((_:string, i: number) => i !== index);
                                setPossibleAnswers(updatedAnswers);
                                if (correctAnswer === choice) {
                                    setCorrectAnswer("");
                                }
                            }}>Remove</a>
                        </div>
                    ))}

                    <div>
                    <a className="btn btn-link text-danger mt-4"
                    onClick={addNewAnswer}>+ Add Another Choice</a>
                    </div>

                    <div>
                        <br /><br />
                        <a className="btn btn-secondary me-3">Cancel</a>
                        <a className="btn btn-warning me-3" onClick={updateAQuestion}>Update Question</a>
                        <a className="btn btn-danger" onClick={deleteAQuestion}>Remove Question</a>
                    </div>
                 
                </div>
                </form>
                
                </>
                
                }

                {question && questionType === "true or false" && 

                <>
                <form>
                <div className="form-group row ms-5 mb-4 mt-2">
                <div className="d-flex align-items-center">
                    <label htmlFor="wd-name" className="col-form-label"><strong>Question Type</strong></label>
                    <select className="form-select ms-2 w-25" id="wd-question-type" value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}>
                        {questionTypes.map((type) => (
                            question.type === type ? <option selected value={type}>{type}</option> :
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <label htmlFor="wd-question-point" className="col-form-label ms-4"><strong>Points</strong></label>
                    <input id="wd-points" className="form-control ms-2 w-25" value={points} 
                    onChange={(e)=>{setPoints(e.target.value)}}/>
                </div>
                </div>

                <div className="form-group row ms-5 mb-4 mt-2">
                    <label htmlFor="wd-description" className="col-form-label">
                    <strong>Description</strong>
                    </label>
                    <div>
                    <ReactQuill value={description} id="wd-description" className="form-control ms-2 w-75"
                    onChange={(value) => setDescription(value)}/>
                    </div>
                </div>

                <div className="form-group row ms-5 mb-4 mt-2">

                    <label htmlFor="wd-description" className="col-form-label"><strong>Answers</strong></label>
                    
                    <div className="d-flex align-items-center mt-4">
                        <input id="true" type="radio" name="true-or-false" value="true" checked={correctAnswer === "true"} 
                        onChange={(e) => setCorrectAnswer(e.target.value)}/>
                        <label className="ms-2" htmlFor="true">True</label>
                    </div>

                    <div className="d-flex align-items-center mt-4">
                        <input id="false" type="radio" name="true-or-false" value="false" checked={correctAnswer === "false"}
                        onChange={(e) => setCorrectAnswer(e.target.value)}/>
                        <label className="ms-2" htmlFor="false">False</label>
                    </div>

                    <div>
                        <br /><br />
                        <a className="btn btn-secondary me-3">Cancel</a>
                        <a className="btn btn-warning me-3" onClick={updateAQuestion}>Update Question</a>
                        <a className="btn btn-danger" onClick={deleteAQuestion}>Remove Question</a>
                    </div>

                </div>
                </form>
                </>
                }

                {question && questionType === "fill in the blank" && 
                <>
                <form>
                <div className="form-group row ms-5 mb-4 mt-2">
                    <div className="d-flex align-items-center">
                        <label htmlFor="wd-name" className="col-form-label"><strong>Question Type</strong></label>
                        <select className="form-select ms-2 w-25" id="wd-question-type" value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}>
                            {questionTypes.map((type) => (
                                question.type === type ? <option selected value={type}>{type}</option> :
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                        <label htmlFor="wd-question-point" className="col-form-label ms-4"><strong>Points</strong></label>
                        <input id="wd-points" className="form-control ms-2 w-25" value={points}
                        onChange={(e)=>{setPoints(e.target.value)}}/>
                    </div>
                    </div>

                    <div className="form-group row ms-5 mb-4 mt-2">
                        <label htmlFor="wd-description" className="col-form-label">
                        <strong>Description</strong>
                        </label>
                        <div>
                        <ReactQuill value={description} id="wd-description" className="form-control ms-2 w-75"
                        onChange={(value) => setDescription(value)}/>
                        </div>
                </div>
                    
                 <div className="form-group row ms-5 mb-4 mt-2">
                 <label htmlFor="wd-description" className="col-form-label"><strong>Answers</strong></label>
                 {possibleAnswers.map((choice: string, index: number) => (
                    <div className="d-flex align-items-center mt-4" key={index}>
                         <label htmlFor="wd-question-point" className="col-form-label ms-4"><strong>Possible Answer</strong></label>
                        <input id={`choice-${index}`} className="form-control ms-2 w-25" 
                            value={choice} 
                            onChange={(e) => {
                                const updatedAnswers = [...possibleAnswers];
                                updatedAnswers[index] = e.target.value;
                                setPossibleAnswers(updatedAnswers);
                            }}
                        />
                        <a className="btn text-danger"
                            onClick={() => {
                                const updatedAnswers = possibleAnswers.filter((_:string, i: number) => i !== index);
                                setPossibleAnswers(updatedAnswers);
                            }}
                        >
                            Remove
                        </a>
                    </div>
                ))}
                 
                 <div>
                    <a className="btn btn-link text-danger mt-4" onClick={addNewAnswer}>+ Add Another Choice</a>
                </div>
                </div>

                <div>
                    <br /><br />
                    <a className="btn btn-secondary me-3">Cancel</a>
                    <a className="btn btn-warning me-3" onClick={updateAQuestion}>Update Question</a>
                    <a className="btn btn-danger" onClick={deleteAQuestion}>Remove Question</a>

                 </div>
                </form>
                </>
                }

            <div >
                <QuestionsNavigation questions={questions}/>
            </div>

            </div>
            <hr />
            <Link to={`${currentPath.replace(`/${qaid}`, `/View/${qaid}`)}`} className="btn btn-primary float-end ms-3"> 
            Preview Quiz</Link>
            <button className="btn btn-danger float-end" onClick={addNewQuestion} >Add A Question</button>
            </>
            
            }

        </div>
    );
}