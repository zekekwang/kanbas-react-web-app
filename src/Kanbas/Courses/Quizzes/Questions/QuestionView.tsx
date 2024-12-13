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

    const { cid, qid, atid, qaid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [questionType, setQuestionType] = useState<any>("multiple choice");
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const question = questions.find((question: any) => question._id === qaid);
    const questionTypes = ["multiple choice", "fill in the blank", "true or false"];

    const [description, setDescription] = useState(question && question.description);
    const [points, setPoints] = useState(question && question.points);
    const [possibleAnswers, setPossibleAnswers] = useState<string[]>(question && question.possible_answers);
    const [correctAnswer, setCorrectAnswer] = useState<any>();
    const [userAnswer, setUserAnswer] = useState<any>();


    const fetchQuestions = async () => {
        if (!qid) return;
        const questions = await quizzesClient.getQuestions(qid);
        dispatch(setQuestions(questions));
    };
    
    useEffect(() => {
        fetchQuestions();
    }, [qid]);


    const setQuestion = async () => {
        if (!question) return;
        setQuestionType(question.type);
        setDescription(question.description);
        setPossibleAnswers(question.possible_answers);
        setPoints(question.points);
        // setCorrectAnswer(question.correct_answer);
        if (!qid || !atid || !qaid) return;
        const attempt = await quizzesClient.getAttempt(qid, atid);

        const answer = attempt.answers.find((a: any) => a.question === qaid);
        setUserAnswer(answer.user_answer);
    }; 
    
    useEffect(() => {
        setQuestion()
    }, [question]);


    const updateAnswers = async (user_answer: string) => {

        if (!qid || !atid || !qaid) return;
        const attempt = await quizzesClient.getAttempt(qid, atid);

        const answer = attempt.answers.find((a: any) => a.question === qaid);
        
        answer.user_answer = user_answer;

        const updatedAttempt = {
            _id: attempt._id,
            user: attempt.user,
            user_firstName: attempt.user_firstName,
            user_lastName: attempt.user_lastName,
            quiz: attempt.quiz,
            quiz_name: attempt.quiz_name,
            attempt_time: attempt.attempt_time,
            points_earned: attempt.points_earned,
            total_points: attempt.total_points,
            answers: attempt.answers,
        }

        await quizzesClient.updateAttempt(qid, updatedAttempt);
    }

    const saveAnswer = async () => {
        updateAnswers(userAnswer);
    }


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



    const submitQuiz = async () => {

        if (!qid || !atid) return;

        const attempt = await quizzesClient.getAttempt(qid, atid);
        const answers = attempt.answers;
        let points_earned = 0;


        for (let i = 0; i < questions.length; i++) {
            console.log("question type: " + questions[i].type);
            if (questions[i].type === "multiple choice" || questions[i].type === "true or false") {
                if (answers[i].user_answer === questions[i].correct_answer) {
                    console.log("answer: " + answers[i].user_answer + " correct: " + questions[i].correct_answer);
                    answers[i].is_correct = true;
                    points_earned += questions[i].points;
                }
            } else {
                if (questions[i].possible_answers.includes(answers[i].user_answer)) {
                    answers[i].is_correct = true;
                    points_earned += questions[i].points;
                }
            }
        }

        const updatedAttempt = {
            _id: attempt._id,
            user: attempt.user,
            quiz: attempt.quiz,
            course: attempt.course,
            attempt_time: attempt.attempt_time,
            points_earned: points_earned,
            total_points: attempt.total_points,
            answers: answers,
        }

        await quizzesClient.updateAttempt(qid, updatedAttempt);
        navigate(`${currentPath.replace(`Quizzes/${qid}/View/${atid}/${qaid}`, "Grades")}`);
    }


    if (!question || !questions || questions.length === 0) {
        return <div>Loading...</div>;
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
                                                        onChange={(e) => setUserAnswer(e.target.value)} checked={userAnswer === choice} />
                                                    <label htmlFor={`choice-${index}`} className="ms-4">{choice}</label><hr />
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
                                            <input type="text" className="form-control ms-2 mt-3 w-50" value={userAnswer}
                                                onChange={(e) => setUserAnswer(e.target.value)} />
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
                                                    checked={userAnswer === "true"} onChange={(value) => setUserAnswer("true")} />
                                                <label className="ms-2" htmlFor="true">True</label>
                                            </div>

                                            <div className="d-flex align-items-center mt-4 border-bottom">
                                                <input id="false" type="radio" name="true-or-false" value="false"
                                                    checked={userAnswer === "false"} onChange={(value) => setUserAnswer("false")} />
                                                <label className="ms-2" htmlFor="false">False</label>
                                            </div>

                                        </div>

                                    </>
                                }

                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            {questions.findIndex((q: any) => q._id === question._id) !== 0 &&
                                <button type="button" className="btn btn-secondary ms-5" onClick={goToPreviousQuestion}>Previous</button>
                            }

                            <button type="button" className="btn btn-secondary mx-auto" onClick={saveAnswer}>Save Answer</button>

                            {questions.findIndex((q: any) => q._id === question._id) + 1 !== questions.length &&
                                <button type="button" className="btn btn-secondary float-end" onClick={goToNextQuestion}>Next</button>
                            }
                        </div>

                    </div>
                </form>

                <div>
                    <QuestionsNavigation questions={questions} />
                </div>

            </div>
            <hr />
            <button className="btn btn-danger float-end" onClick={submitQuiz}>Submit Quiz</button>
            {currentUser.role === "FACULTY" &&
                <button className="btn btn-secondary float-end me-2" onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`)}
                >Keep Editing This Quiz</button>}
        </div>
    );
}