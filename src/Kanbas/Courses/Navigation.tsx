import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";

export default function CoursesNavigation() {

    const { pathname } = useLocation();

    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    const course = courses.find((course) => course._id === cid);

        return (
            <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                {links.map((link) => (
                    <Link 
                        key={link}
                        to={`/Kanbas/Courses/${cid}/${link}`} 
                        id={`wd-course-${link}-link`}
                        className={`list-group-item border border-0
                            ${pathname.includes(link) ? "active text-dark" : "text-danger"}`}>
                        {link}
                    </Link>
                ))}
        </div> 
    );
}