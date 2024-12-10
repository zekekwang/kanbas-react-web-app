import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { deleteQuiz } from "./reducer";
import { useDispatch } from "react-redux";
import * as quizzesClient from "./client";
import * as questionsClient from "./Questions/client";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useParams } from "react-router-dom";



export default function QuizControlButtons({ quizID }: { quizID: string }) {

  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid } = useParams<{ cid: string }>();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const deleteCurrentQuiz = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this quiz?");
    if (isConfirmed) {
      const questions = await quizzesClient.getQuestions(quizID);
      for (let i = 0; i < questions.length; i++) {
        await questionsClient.deleteQuestion(questions[i]._id);
      }
      await quizzesClient.deleteQuiz(quizID);
      dispatch(deleteQuiz(quizID));
    }
  }

  const editQuiz = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizID}`);
  };

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={deleteCurrentQuiz} />
      <GreenCheckmark quizID={quizID} />
      <IoEllipsisVertical className="fs-4" onClick={toggleMenu} />
      {showMenu && (
        <div className="position-absolute bg-white border rounded shadow p-2" style={{ right: 0 }}>
          <button className="btn btn-link text-dark" onClick={editQuiz}>Edit</button>
          <button className="btn btn-link text-dark" onClick={deleteCurrentQuiz}>Delete</button>
          <GreenCheckmark quizID={quizID} />
        </div>
      )}
    </div>
  );
}


