import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as courseClient from "../client";
import { useSelector } from "react-redux";

export default function GradeTable() {

    const { cid } = useParams();
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();
    const [attempts, setAttempts] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchAttempts = async () => {

        if (!cid) return;
        const attempts = await courseClient.findAttemptsForCourse(cid);
        if (currentUser.role === "FACULTY") {
            setAttempts(attempts);
        } else {
            setAttempts(attempts.filter((attempt: any) => attempt.user === currentUser._id));
        }
    }; useEffect(() => {
        fetchAttempts();
    }, [cid]);

  return (
    <div id="wd-score">
      <table className="table table-striped">
        <thead>
          <tr>{currentUser.role === "FACULTY" && <th>Name</th>}<th>Item</th><th>Score</th><th>Attempt Date</th></tr>
        </thead>
        <tbody>
        {attempts.map((attempt: any) => 
          <tr key={attempt._id}>
          
          {currentUser.role === "FACULTY" &&
          <td className="wd-full-name text-nowrap">
          <Link to={`/Kanbas/Account/Users/${attempt.user}`} className="text-decoration-none text-danger">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{attempt.user_firstName}</span>{" "}
                <span className="wd-last-name">{attempt.user_lastName}</span>
          </Link></td>
          }

            <td className="wd-full-name text-nowrap">
          <Link to={`${currentPath.replace("/Grades", `/Quizzes/${attempt.quiz}/Questions/Attempt/${attempt._id}/${attempt.answers[0].question}`)}`}
          className="text-decoration-none text-danger">
            <span className="wd-first-name">{attempt.quiz_name}</span></Link></td>
          <td className="wd-section">{attempt.points_earned} / {attempt.total_points}</td>
          <td className="wd-role">{attempt.attempt_time}</td></tr>
        )}
        </tbody>
      </table>
    </div>
    );
}