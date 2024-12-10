// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import ProtectedContent from "./Account/ProtectedContent";
// import { enrollCourse, unenrollCourse } from "./enrollmentreducer";

// import * as enrollmentsClient from "./client";
// import * as coursesClient from "./client";

// type EnrollmentStatus = { [key: string]: boolean };

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrolling,
//   setEnrolling,
//   updateEnrollment,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
//   enrolling: boolean;
//   setEnrolling: (enrolling: boolean) => void;
//   updateEnrollment: (courseId: string, enrolled: boolean) => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize useNavigate

//   const [showEnrollments, setShowEnrollments] = useState(false);
//   const [enrollmentStatus, setEnrollmentStatus] = useState<EnrollmentStatus>({});

//   useEffect(() => {
//     if (currentUser && currentUser._id) {
//       const storedStatus = JSON.parse(
//         localStorage.getItem(`enrollmentStatus-${currentUser._id}`) || "{}"
//       );
//       setEnrollmentStatus(storedStatus);
//     }
//   }, [currentUser]);

//   // const toggleEnrollments = () => {
//   //   setShowEnrollments((prev) => !prev);
//   // };

//   // const handleEnroll = (courseId: string) => {

//   //   dispatch(enrollCourse({ userId: currentUser._id, courseId }));
//   //   setEnrollmentStatus((prev) => {
//   //     const updatedStatus = { ...prev, [courseId]: true };
//   //     localStorage.setItem(
//   //       `enrollmentStatus-${currentUser._id}`,
//   //       JSON.stringify(updatedStatus)
//   //     );
//   //     return updatedStatus;
//   //   });
//   // };



//   // const handleUnenroll = (courseId: string) => {

//   //   dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
//   //   setEnrollmentStatus((prev) => {
//   //     const updatedStatus = { ...prev, [courseId]: false };
//   //     localStorage.setItem(
//   //       `enrollmentStatus-${currentUser._id}`,
//   //       JSON.stringify(updatedStatus)
//   //     );
//   //     return updatedStatus;
//   //   });
//   // };

//   // Navigate to course and check enrollment status
//   const handleGo = (courseId: string) => {
//     if (currentUser.role === "STUDENT") {
//       if (enrollmentStatus[courseId]) {
//         navigate(`/Kanbas/Courses/${courseId}/Home`);
//       } else {
//         alert("You must enroll in this course to access it.");
//       }
//     } else {
//       // For other roles, navigate directly to the course
//       navigate(`/Kanbas/Courses/${courseId}/Home`);
//     }
//   };

//   return (
//     <div id="wd-dashboard">
//       {/* <div className="d-flex justify-content-between align-items-center"> */}
//         <h1 id="wd-dashboard-title">Dashboard
//           <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
//             {enrolling ? "My Courses" : "All Courses"}
//           </button>
//         </h1>
//       <hr />

//       {/* <ProtectedContent> */}
//       {currentUser && currentUser.role === "FACULTY" && (
//         <>
//           <h5>New Course
//               <button className="btn btn-primary float-end"
//                       id="wd-add-new-course-click"
//                       onClick={addNewCourse} > 
//                 Add 
//               </button>

//               <button className="btn btn-warning float-end me-2"
//                       onClick={updateCourse} 
//                       id="wd-update-course-click">
//                 Update
//               </button>
//           </h5>
//         <br />
//         <input
//           value={course.name}
//           className="form-control mb-2"
//           onChange={(e) => setCourse({ ...course, name: e.target.value })}
//         />
//         <textarea
//           value={course.description}
//           className="form-control"
//           onChange={(e) =>
//             setCourse({ ...course, description: e.target.value })
//           }
//         />
//         <hr />
//         </>
//       )}
//       {/* </ProtectedContent> */}

//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses
//             // .filter((course) =>
//             //   showEnrollments ? enrollmentStatus[course._id] : true
//             // )
//             .map((course) => (
//               <div
//                 className="wd-dashboard-course col"
//                 style={{ width: "300px" }}
//                 key={course._id}
//               >
//                 <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
//                   <img
//                     // src = {public/images/promethues.jpg
//                     src = {`/images/promethues.jpg`}
//                     width="100%"
//                     height={160}
//                     alt={course.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="wd-dashboard-course-title card-title">
//                       {enrolling && (
//                         <button onClick={(event) => {
//                           event.preventDefault();
//                           updateEnrollment(course._id, !course.enrolled);
//                         }}
//                           className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
//                           {course.enrolled ? "Unenroll" : "Enroll"}
//                         </button>
//                       )}
//                       {course.name}
//                     </h5>
//                     <p
//                       className="wd-dashboard-course-title card-text overflow-y-hidden"
//                       style={{ maxHeight: 100 }}
//                     >
//                       {course.description}
//                     </p>

//                     {/* "Go" button for all roles */}
//                     <button
//                       onClick={() => handleGo(course._id)}
//                       className="btn btn-primary"
//                     >
//                       Go
//                     </button>

//                     {currentUser && currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
//                         <>
//                           <button onClick={(event) => {
//                                     event.preventDefault();
//                                     deleteCourse(course._id);
//                                   }} className="btn btn-danger float-end"
//                                   id="wd-delete-course-click">
//                                   Delete
//                           </button>

//                           <button id="wd-edit-course-click"
//                             onClick={(event) => {
//                               event.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning me-2 float-end" >
//                             Edit
//                           </button>
//                         </>
//                       )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// define the Course interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  enrolled?: boolean;
}

export default function Dashboard(
  { mycourses,
    allCourses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    fetchCourses,
    enrolling,
    setEnrolling,
    updateEnrollment
  }: {
    mycourses: any[];
    allCourses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    fetchCourses: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void
  }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);

  const filteredCourses =
    currentUser.role === "STUDENT" // check if the user is a student
      ? showAllCourses
        ? allCourses // show all courses
        : mycourses  // show only the enrolled courses
      : mycourses; // show courses for non-students

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />

      {currentUser && currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} >
              Add
            </button>

            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click">
              Update
            </button>
          </h5><br />

          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />

          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published" className="mb-0">
          Published Courses ({allCourses.length})
        </h2>
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course: Course) => {
            return (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src="/images/promethues.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {enrolling && (currentUser.role === "STUDENT" || currentUser.role === "ADMIN" ||
                          currentUser.role === "FACULTY"
                        ) && (
                            <button onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                              className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                            </button>
                          )}
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>

                      {currentUser && (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
                        <>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>

                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}