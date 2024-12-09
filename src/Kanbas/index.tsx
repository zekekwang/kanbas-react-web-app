// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// // import * as db from "./Database";
// import { useState } from "react";
// import ProtectedRoute from "./Account/ProtectedRoute";
// import Session from "./Account/Session";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import * as courseClient from "./Courses/client";
// import * as userClient from "./Account/client";


// import "./styles.css";

// export interface Course {
//     _id: string;
//     name: string;
//     number: string;
//     startDate: string;
//     endDate: string;
//     description: string;
//     image: string;

// }



// export default function Kanbas() {
//     const [courses, setCourses] = useState<any[]>([]);
//     const { currentUser } = useSelector((state: any) => state.accountReducer);

//     const [enrolling, setEnrolling] = useState<boolean>(false);

//     const findCoursesForUser = async () => {
//       try {
//         const courses = await userClient.findCoursesForUser(currentUser._id);
//         setCourses(courses);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const updateEnrollment = async (courseId: string, enrolled: boolean) => {
//         if (enrolled) {
//           await userClient.enrollIntoCourse(currentUser._id, courseId);
//         } else {
//           await userClient.unenrollFromCourse(currentUser._id, courseId);
//         }
//         setCourses(
//           courses.map((course) => {
//             if (course._id === courseId) {
//               return { ...course, enrolled: enrolled };
//             } else {
//               return course;
//             }
//           })
//         );
//       };

//     const fetchCourses = async () => {
//       try {
//         const allCourses = await courseClient.fetchAllCourses();
//         const enrolledCourses = await userClient.findCoursesForUser(
//           currentUser._id
//         );
//         const courses = allCourses.map((course: any) => {
//           if (enrolledCourses.find((c: any) => c._id === course._id)) {
//             return { ...course, enrolled: true };
//           } else {
//             return course;
//           }
//         });
//         setCourses(courses);
//       } catch (error) {
//         console.error(error);
//       }
//     };   


//     // const fetchCourses = async () => {
//     //   try {
//     //     const courses = await courseClient.fetchAllCourses();
//     //     setCourses(courses);
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     // };


//     const [course, setCourse] = useState<any>({
//         _id: "1234", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//     });
//     const addNewCourse = async () => {
//         const newCourse = await courseClient.createCourse(course);
//         // const newCourse = await userClient.createCourse(course);
//         // setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
//         setCourses([...courses, newCourse]);
//     };

//     const deleteCourse = async (courseId: string) => {
//         const status = await courseClient.deleteCourse(courseId);
//         setCourses(courses.filter((course) => course._id !== courseId));
//       };

//     const updateCourse = async () => {
//         await courseClient.updateCourse(course);
//         setCourses(
//             courses.map((c) => {
//                 if (c._id === course._id) {
//                     return course;
//                 } else {
//                     return c;
//                 }
//             })
//         );
//     };

//     useEffect(() => {
//         if (enrolling) {
//           fetchCourses();
//         } else {
//           findCoursesForUser();
//         }
//       }, [currentUser, enrolling]);

//     return (
//         <Session>
//             <div id="wd-kanbas">
//                 <KanbasNavigation />

//                 <div className="wd-main-content-offset p-3">
//                     <Routes>
//                         <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
//                         <Route path="/Account/*" element={<Account />} />
//                         <Route path="/Dashboard" element={
//                             <ProtectedRoute>
//                                 <Dashboard
//                                     courses={courses}
//                                     course={course}
//                                     setCourse={setCourse}
//                                     addNewCourse={addNewCourse}
//                                     deleteCourse={deleteCourse}
//                                     updateCourse={updateCourse} 
//                                     enrolling={enrolling} setEnrolling={setEnrolling}
//                                     updateEnrollment={updateEnrollment}
//                                     /></ProtectedRoute>
//                         } />
//                         <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
//                         <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                         <Route path="/Inbox" element={<h1>Inbox</h1>} />
//                     </Routes>
//                 </div>
//             </div>
//         </Session>
//     );
// }


import { Routes, Route, Navigate, useParams } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
// import * as db from "./Database";
import { useState, useEffect } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  // const [users, setUsers] = useState<any[]>([]);

  const [mycourses, setCourses] = useState<any[]>([]);

  const [allCourses, setAllCourses] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [enrolling, setEnrolling] = useState<boolean>(false);

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      mycourses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };


  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchCourses = async () => {
  //     try {
  //       const mycourses = await userClient.findMyCourses();
  //       setCourses(mycourses);

  //       const courses = await courseClient.fetchAllCourses();
  //       setCourses(courses);
  //       // setAllCourses(courses);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...mycourses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    try {
      const status = await courseClient.deleteCourse(courseId);
      if (status >= 200 && status < 300) {
        // after deleting the course, update the state
        setCourses(mycourses.filter((course) => course._id !== courseId));
      } else {
        // if the status code is not 204, log an error and alert the user
        console.error("Failed to delete course on server. Status:", status);
        alert("Failed to delete course. Please try again.");
      }
    } catch (error) {
      // catch any errors that occur during the deletion process
      console.error("Error occurred while deleting course:", error);
      alert("An error occurred while deleting the course. Please try again.");
    }
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      mycourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  // Wrapper component to extract the `cid` parameter and pass it to `ProtectedRoute`
  const CourseRoute = () => {
    const { cid } = useParams(); // Extract `cid` parameter
    return (
      <ProtectedRoute courseId={cid} mycourses={mycourses}>
        <Courses courses={mycourses} />
      </ProtectedRoute>
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />

            <Route path="/Dashboard" element={
              // <ProtectedRoute>
              <Dashboard
                mycourses={mycourses}
                allCourses={allCourses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                fetchCourses={fetchCourses}
                enrolling={enrolling}
                setEnrolling={setEnrolling}
                updateEnrollment={updateEnrollment}
              />
              // </ProtectedRoute>
            } />

            {/* Use CourseRoute here */}
            <Route path="/Courses/:cid/*" element={<CourseRoute />} />

            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>

      </div>
    </Session>
  );
}