import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { deleteQuiz } from "./reducer";
import { useDispatch } from "react-redux";
import * as quizzesClient from "./client";
import * as questionsClient from "./Questions/client";

export default function QuizControlButtons({quizID} : {quizID: string}) {

  const dispatch = useDispatch();

  const deleteCurrentQuiz = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this quiz?");
    if (isConfirmed) {
      const questions = await quizzesClient.getQuestions(quizID);
      for (let i=0; i < questions.length; i++) {
        await questionsClient.deleteQuestion(questions[i]._id);
      }
      await quizzesClient.deleteQuiz(quizID);
      dispatch(deleteQuiz(quizID));
    }
  }

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={deleteCurrentQuiz}/>
      <GreenCheckmark quizID={quizID} />
      <IoEllipsisVertical className="fs-4" />
    </div>
    );
}