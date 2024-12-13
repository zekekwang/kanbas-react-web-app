import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as quizzesClient from './client';
import { useNavigate } from 'react-router-dom';


export default function QuizDetails() {
    const { qaid, cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);

    const [quiz, setQuiz] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [attempts, setAttempts] = useState<any[]>([]);
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const currentQuiz = quizzes.find((q: any) => q._id === qid);
            setQuiz(currentQuiz);
            if (qid) {
                const fetchedQuestions = await quizzesClient.getQuestions(qid);
                setQuestions(fetchedQuestions);
            }
            if (qid && currentUser) {
                const fetchedAttempts = await quizzesClient.getAttemptsForUser(qid, currentUser._id);
                setAttempts(fetchedAttempts);
            }
        };
        fetchData();
    }, [qid, quizzes]);

    if (!quiz) {
        return <div>Loading...</div>;
    }

    const formatDate = (date: any) => {
        const d = new Date(date);
        return d.toLocaleDateString();
    };

    const createNewAttempt = async () => {
        if (!qid) 
            return alert('Quiz ID not found');

        const quiz = await quizzesClient.getQuiz(qid);

        const fetchedAttempts = await quizzesClient.getAttemptsForUser(qid, currentUser._id);
        const attemptsMade = fetchedAttempts.length;
        const allowedAttempts = quiz.has_many_attempts === 'yes' ? parseInt(quiz.how_many_attempts, 10) : 1;

        if (attemptsMade >= allowedAttempts) {
            alert('You have reached the maximum number of attempts for this quiz.');
            return;
        }

        const answers = questions.map((question: any) => ({
            question: question._id,
            user_answer: null,
            is_correct: false,
        }));

        const attempt = {
            user: currentUser._id,
            user_firstName: currentUser.firstName,
            user_lastName: currentUser.lastName,
            quiz: qid,
            quiz_name: quiz.name,
            course: quiz.course,
            attempt_time: Date.now(),
            points_earned: 0,
            total_points: quiz.points,
            answers: answers,
        }

        const newAttempt = await quizzesClient.createAttempt(quiz, attempt);
        console.log('newAttemptid', newAttempt._id);
        console.log('qaid', qaid);
        // navigate(`${currentPath.replace(`/${qaid}`, `/View/${newAttempt._id}/${qaid}`)}`);
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/View/${newAttempt._id}/${questions.length > 0 ? questions[0]._id : ''}`);
    }
    // /Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Questions/View/${questions.length > 0 ? questions[0]._id : ''}

    const attemptsMade = attempts.length;
    const allowedAttempts = quiz.has_many_attempts === 'yes' ? parseInt(quiz.how_many_attempts, 10) || 1 : 1;
    const canAttemptQuiz = attemptsMade < allowedAttempts;

    return (
        <div className="quiz-details container mt-4">
            <h2>{quiz.name}</h2>
            {currentUser.role === 'FACULTY' ? (
                <>
                    <p><strong>Quiz Type:</strong> {quiz.quiz_type}</p>
                    <p><strong>Points:</strong> {quiz.points}</p>
                    <p><strong>Assignment Group:</strong> {quiz.assignment_group}</p>
                    <p><strong>Shuffle Answers:</strong> {quiz.shuffle_answer === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Time Limit:</strong> {quiz.time_limit} Minutes</p>
                    <p><strong>Multiple Attempts:</strong> {quiz.has_many_attempts === 'yes' ? 'Yes' : 'No'}</p>
                    {quiz.has_many_attempts === 'yes' && (
                        <p><strong>How Many Attempts:</strong> {quiz.how_many_attempts}</p>
                    )}
                    <p><strong>Show Correct Answers:</strong> {quiz.show_correct_answer === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Access Code:</strong> {quiz.access_code || 'None'}</p>
                    <p><strong>One Question at a Time:</strong> {quiz.one_question_at_a_time === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Webcam Required:</strong> {quiz.webcam_required === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Lock Questions After Answering:</strong> {quiz.lock_questions_after_answering === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Due Date:</strong> {formatDate(quiz.due_date)}</p>
                    <p><strong>Available From:</strong> {formatDate(quiz.available_date)}</p>
                    <p><strong>Until Date:</strong> {formatDate(quiz.until_date)}</p>
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`} className="btn btn-primary mt-3">Edit Quiz</Link>
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Questions/View/${questions.length > 0 ? questions[0]._id : ''}`} className="btn btn-secondary mt-3">Preview Quiz</Link>
                </>
            ) : (
                <>
                    <p><strong>Quiz Type:</strong> {quiz.quiz_type}</p>
                    <p><strong>Points:</strong> {quiz.points}</p>
                    <p><strong>Assignment Group:</strong> {quiz.assignment_group}</p>
                    <p><strong>Shuffle Answers:</strong> {quiz.shuffle_answer === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Time Limit:</strong> {quiz.time_limit} Minutes</p>
                    <p><strong>Multiple Attempts:</strong> {quiz.has_many_attempts === 'yes' ? 'Yes' : 'No'}</p>
                    {quiz.has_many_attempts === 'yes' && (
                        <p><strong>How Many Attempts:</strong> {quiz.how_many_attempts}</p>
                    )}
                    <p><strong>Show Correct Answers:</strong> {quiz.show_correct_answer === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Access Code:</strong> {quiz.access_code || 'None'}</p>
                    <p><strong>One Question at a Time:</strong> {quiz.one_question_at_a_time === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Webcam Required:</strong> {quiz.webcam_required === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Lock Questions After Answering:</strong> {quiz.lock_questions_after_answering === 'yes' ? 'Yes' : 'No'}</p>
                    <p><strong>Due Date:</strong> {formatDate(quiz.due_date)}</p>
                    <p><strong>Available From:</strong> {formatDate(quiz.available_date)}</p>
                    <p><strong>Until Date:</strong> {formatDate(quiz.until_date)}</p>
                    {quiz.has_many_attempts === 'yes' && currentUser.role === 'STUDENT' && (
                        <p><strong>Attempts Taken:</strong> {attemptsMade} / {allowedAttempts}</p>
                    )}
                    {canAttemptQuiz ? (
                        <button onClick={createNewAttempt} className="btn btn-primary mt-3">Start Quiz</button>
                    ) : (
                        <p>You have reached the maximum number of attempts for this quiz.</p>
                    )}
                </>
            )}
        </div>
    );
}