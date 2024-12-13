
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import PeopleTable from "./People/Table";
// import { courses } from "../Database";
import Questions from "./Quizzes/Questions";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/Editor";
import QuestionEditor from "./Quizzes/Questions/Editor";
import QuestionView from "./Quizzes/Questions/QuestionView";
import QuizDetails from "./Quizzes/QuizDetails";
import GradeTable from "./Grades/Table";
import QuestionAttempt from "./Quizzes/Questions/QuestionAttempt";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/Edit/Questions" element={<Questions />} />
                        {/* <Route path="Quizzes/:qid/Questions/:qaid/Edit" element={<QuestionEditor />} />QuestionView */}
                        <Route path="Quizzes/:qid/Questions/View" element={<QuestionView />} />
                        {/* <Route path="Quizzes/:qid/Edit/Questions/View/:qaid" element={<QuestionView />} /> */}
                        <Route path="Quizzes/:qid/Edit/Questions/View/:qaid" element={<QuestionView />} />
                        <Route path="Quizzes/:qid/Edit/Questions/:qaid" element={<QuestionEditor />} />
                        <Route path="Quizzes/:qid/Edit" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid/Questions/Attempt/:atid/:qaid" element={<QuestionAttempt />}/>
                        <Route path="Quizzes/:qid/View/:atid/:qaid" element={<QuestionView />}/>
                        <Route path="Grades" element={<GradeTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
