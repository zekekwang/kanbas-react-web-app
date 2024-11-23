import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function QuizModuleObject() {
  return (
    <div id="wd-quiz-module-object">
      <h3>Quiz Module Object</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-quiz" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/quiz`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-quiz-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/quiz/name`}>
        Get Module Name
      </a><hr/>
    </div>
);}
