import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { RiProhibitedLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import * as quizzesClient from "./client";
import { updateQuiz } from "./reducer";
import { useEffect, useState } from "react";

export default function GreenCheckmark({quizID} : {quizID: string}) {

  const [publishStatus, setPublishStatusState] = useState("unpublished");

  const fetchPublishStatus = async () => {
    const quiz = await quizzesClient.getQuiz(quizID);
    setPublishStatusState(quiz.publish_status);
  }; useEffect(() => {
    fetchPublishStatus();
  }, [quizID]);

  const setPublishStatus = async () => {
    const quiz = await quizzesClient.getQuiz(quizID);

    const isConfirmed = window.confirm("Are you sure you want to change the publish status of the quiz?");
    if (isConfirmed) {
      if (quiz.publish_status === "unpublished"){
        await quizzesClient.setPublishStatus(quiz._id, "published");
        setPublishStatusState("published");
      } else {
        await quizzesClient.setPublishStatus(quiz._id, "unpublished");
        setPublishStatusState("unpublished");
      }
    }
  };

  return (
    <>
      {publishStatus === "published" ? 
        <span className="me-1 position-relative">
        <FaCheckCircle style={{ top: "2px" }}
          onClick={setPublishStatus} className="text-success me-1 position-absolute fs-5" />
        <FaCircle className="text-white me-1 fs-6" />
      </span>
       : 
        <span className="me-4 position-relative">
          <RiProhibitedLine style={{ top: "2px" }} 
          onClick={setPublishStatus} className="text-danger me-1 position-absolute fs-5" />
        </span>
      }
    </>
  );
}