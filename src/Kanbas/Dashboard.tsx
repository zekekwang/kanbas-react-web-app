// import { Link } from "react-router-dom";
// import * as db from "./Database";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";


// export default function Dashboard({ courses, course, setCourse, addNewCourse,
//   deleteCourse, updateCourse }: {
//   courses: any[]; course: any; setCourse: (course: any) => void;
//   addNewCourse: () => void; deleteCourse: (course: any) => void;
//   updateCourse: () => void; })
// {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h5>New Course
//         <button className="btn btn-primary float-end"
//           id="wd-add-new-course-click"
//           onClick={addNewCourse} > Add </button>
//         <button className="btn btn-warning float-end me-2"
//           onClick={updateCourse} id="wd-update-course-click">
//           Update
//         </button>
//       </h5><hr /><br />
//       <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//       <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />

//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses
//               .filter((course) =>
//                 enrollments.some(
//                   (enrollment) =>
//                     enrollment.user === currentUser._id &&
//                     enrollment.course === course._id
//                    ))          
//           .map((course) => (
//             <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//               <div className="card rounded-3 overflow-hidden">
//                 <Link to={`/Kanbas/Courses/${course._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//                   <img src={course.imageURL} width="100%" height={160} alt={course.name} />
//                   <div className="card-body">
//                     <h5 className="wd-dashboard-course-title card-title">
//                       {course.name}
//                     </h5>
//                     <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                       {course.description}
//                     </p>
//                     <button className="btn btn-primary"> Go </button>
//                     <button onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(course._id);
//                     }} className="btn btn-danger float-end"
//                       id="wd-delete-course-click">
//                       Delete
//                     </button>
//                     <button id="wd-edit-course-click"
//                       onClick={(event) => {
//                         event.preventDefault();
//                         setCourse(course);
//                       }}
//                       className="btn btn-warning me-2 float-end" >
//                       Edit
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import ProtectedContent from "./Account/ProtectedContent";
import { enrollCourse, unenrollCourse } from "./enrollmentreducer";

type EnrollmentStatus = { [key: string]: boolean };

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const [showEnrollments, setShowEnrollments] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<EnrollmentStatus>({});

  useEffect(() => {
    if (currentUser && currentUser._id) {
      const storedStatus = JSON.parse(
        localStorage.getItem(`enrollmentStatus-${currentUser._id}`) || "{}"
      );
      setEnrollmentStatus(storedStatus);
    }
  }, [currentUser]);

  const toggleEnrollments = () => {
    setShowEnrollments((prev) => !prev);
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    setEnrollmentStatus((prev) => {
      const updatedStatus = { ...prev, [courseId]: true };
      localStorage.setItem(
        `enrollmentStatus-${currentUser._id}`,
        JSON.stringify(updatedStatus)
      );
      return updatedStatus;
    });
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    setEnrollmentStatus((prev) => {
      const updatedStatus = { ...prev, [courseId]: false };
      localStorage.setItem(
        `enrollmentStatus-${currentUser._id}`,
        JSON.stringify(updatedStatus)
      );
      return updatedStatus;
    });
  };

  // Navigate to course and check enrollment status
  const handleGo = (courseId: string) => {
    if (currentUser.role === "STUDENT") {
      if (enrollmentStatus[courseId]) {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
      } else {
        alert("You must enroll in this course to access it.");
      }
    } else {
      // For other roles, navigate directly to the course
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>

        {currentUser.role === "STUDENT" && (
          <button
            className="btn btn-info float-end"
            onClick={toggleEnrollments}
          >
            {showEnrollments
              ? "View All Courses"
              : "View Enrolled Courses"}
          </button>
        )}
      </div>
      <hr />

      <ProtectedContent>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </ProtectedContent>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) =>
              showEnrollments ? enrollmentStatus[course._id] : true
            )
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
                <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
                  <img
                    src={course.imageURL}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>

                    {/* "Go" button for all roles */}
                    <button
                      onClick={() => handleGo(course._id)}
                      className="btn btn-primary"
                    >
                      Go
                    </button>

                    {currentUser.role === "STUDENT" && (
                      enrollmentStatus[course._id] ? (
                        <button
                          onClick={() => handleUnenroll(course._id)}
                          className="btn btn-danger float-end"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEnroll(course._id)}
                          className="btn btn-success float-end"
                        >
                          Enroll
                        </button>
                      )
                    )}

                    <ProtectedContent>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </ProtectedContent>

                    <ProtectedContent>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </ProtectedContent>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}