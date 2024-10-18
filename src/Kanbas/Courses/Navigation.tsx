// import { Link } from "react-router-dom";
// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
//         className="list-group-item active border border-0"> Home </Link><br />
//       <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"> Modules </Link><br />
//       <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"> Piazza </Link><br />
//       <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"> Zoom </Link><br />
//       <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
//         className="list-group-item text-danger border border-0"> Assignments </Link><br />
//       <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"> Quizzes </Link><br />
//       <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
//         className="list-group-item text-danger border border-0" > People </Link><br />
//     </div>
// );}

// import React from 'react';
// import { Link, useLocation } from "react-router-dom";

// export default function CoursesNavigation() {
//   const location = useLocation();

//   const getLinkClass = (path: string) => {
//     return location.pathname === path
//       ? "list-group-item bg-white text-danger border-top border-bottom border-end"
//       : "list-group-item bg-white text-red border-0";
//   };

//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
//         className={getLinkClass("/Kanbas/Courses/1234/Home")}> Home </Link><br />
//       <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
//         className={getLinkClass("/Kanbas/Courses/1234/Modules")}> Modules </Link><br />
//       <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className={getLinkClass("/Kanbas/Courses/1234/Piazza")}> Piazza </Link><br />
//       <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className={getLinkClass("/Kanbas/Courses/1234/Zoom")}> Zoom </Link><br />
//       <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
//         className={getLinkClass("/Kanbas/Courses/1234/Assignments")}> Assignments </Link><br />
//       <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
//         className={getLinkClass("/Kanbas/Courses/1234/Quizzes")}> Quizzes </Link><br />
//       <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
//         className={getLinkClass("/Kanbas/Courses/1234/People")}> People </Link><br />
//     </div>
//   );
// }

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