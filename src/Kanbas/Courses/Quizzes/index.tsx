import { BsGripVertical } from 'react-icons/bs'
import { GoTriangleDown } from "react-icons/go";
import { PiNotePencil } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import QuizzesControlButtons from '../Quizzes/QuizzesControlButtons';
import QuizControlButtons from '../Quizzes/QuizControlButtons';
import QuizControls from './QuizControls';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizzes } from './reducer';
import * as coursesClient from "../client";
import { useEffect, useState } from 'react';

export default function Quizzes() {

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
      if (currentUser.role === "STUDENT") {
        const publishedQuizzes = await coursesClient.findPublishedQuizzesForCourse(cid as string);
        console.log(publishedQuizzes);
        dispatch(setQuizzes(publishedQuizzes));
      } else {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
      }
    };
    useEffect(() => {
      fetchQuizzes();
    }, [cid, currentUser]);

    const formatDate = (date: any) => {
      date = new Date(date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const compareDate = (availableFrom: Date, due: Date) => {
      
      const today = new Date();
      const available_date = new Date(availableFrom);
      const due_date = new Date(due);
      
      if (today < available_date) {
        return(<><strong>Not available until</strong> {formatDate(availableFrom)}</>
        );
      } else if (today > due_date) {
        return(<strong>Closed</strong>);
      } else {
        return <strong>Available</strong>;
      }
    };

    return (
      <div id="wd-assignments">
        {currentUser.role === "FACULTY" &&
        <><br /><QuizControls /><br /></>}
        <ul id="wd-assignments" className="list-group rounded-0 mt-5 ms-4 me-3">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="fs-3" />
          <GoTriangleDown className="me-1 fs-4"/>
          <strong>QUIZZES</strong> {currentUser.role === "FACULTY" &&
          <><QuizzesControlButtons /></>}</div>
          {quizzes.map((quiz: any) => (
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-assignments list-group-item ps-1 fs-5 border-gray">
                <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-2"/>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}>
                  <PiNotePencil className="fs-2"/>
                </Link>
                <div className="mt-2 mb-2 flex-grow-1">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} className="text-black text-decoration-none">
                <ul><strong>{quiz.name}</strong></ul></Link>
                <ul className="wd-assignment-description"> {compareDate(quiz.available_date, quiz.due_date)} | <strong> Due</strong>
                &nbsp;{formatDate(quiz.due_date)} | {quiz.points} pts | {quiz.num_of_questions} Questions</ul>
                </div>
                {currentUser.role === "FACULTY" &&
                <><br /><QuizControlButtons quizID={quiz._id}
                /><br /></>}
                </div></li>
            </ul>
          ))}
        </ul>
      </div>
  );
}