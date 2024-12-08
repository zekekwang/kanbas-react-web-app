// import { FaUserCircle } from "react-icons/fa";
// export default function PeopleTable() {
//   return (
//     <div id="wd-people-table">
//       <table className="table table-striped">
//         <thead>
//           <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
//         </thead>
//         <tbody>
//           <tr><td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Tony</span>{" "}
//               <span className="wd-last-name">Stark</span></td>
//             <td className="wd-login-id">001234561S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-01</td>
//             <td className="wd-total-activity">10:21:32</td> </tr>
//           {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
//             <tr><td className="wd-full-name text-nowrap">
//                 <FaUserCircle className="me-2 fs-1 text-secondary" />
//                 <span className="wd-first-name">Bruce</span>{" "}
//                 <span className="wd-last-name">Wayne</span></td>
//                 <td className="wd-login-id">001234562W</td>
//                 <td className="wd-section">S102</td>
//                 <td className="wd-role">STUDENT</td>
//                 <td className="wd-last-activity">2020-10-02</td>
//                 <td className="wd-total-activity">11:22:33</td> </tr>
//             <tr><td className="wd-full-name text-nowrap">
//                 <FaUserCircle className="me-2 fs-1 text-secondary" />
//                 <span className="wd-first-name">Steve</span>{" "}
//                 <span className="wd-last-name">Rogers</span></td>
//                 <td className="wd-login-id">001234563R</td>
//                 <td className="wd-section">S103</td>
//                 <td className="wd-role">STUDENT</td>
//                 <td className="wd-last-activity">2020-10-03</td>
//                 <td className="wd-total-activity">12:23:34</td> </tr>
//             <tr><td className="wd-full-name text-nowrap">
//                 <FaUserCircle className="me-2 fs-1 text-secondary" />
//                 <span className="wd-first-name">Natasha</span>{" "}
//                 <span className="wd-last-name">Romanoff</span></td>
//                 <td className="wd-login-id">001234564R</td>
//                 <td className="wd-section">S104</td>
//                 <td className="wd-role">STUDENT</td>
//                 <td className="wd-last-activity">2020-10-04</td>
//                 <td className="wd-total-activity">13:24:35</td> </tr>
//         </tbody>
//       </table>
//     </div> );}


// import { FaUserCircle } from "react-icons/fa";
// // import { useParams } from "react-router-dom";
// import { useNavigate, useParams } from "react-router";
// import * as client from "../../Account/client";
// import PeopleDetails from "./Details";
// // import * as db from "../../Database";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { findUsersForCourse } from "../../Courses/client";

// interface PeopleTableProps {
//     users?: any[];
// }


// export default function PeopleTable({ users }: PeopleTableProps) {
//     // const { cid } = useParams();
//     // const { users, enrollments } = db;
//     const { cid } = useParams<{ cid: string }>(); // get the course id from the URL
//     const [stateUsers, setStateUsers] = useState<any[]>(users || []);

//     useEffect(() => {
//         if (!users && cid) {
//             const fetchUsersForCourse = async () => {
//                 try {
//                     console.log("Fetching users for course:", cid);
//                     const enrolledUsers = await findUsersForCourse(cid);
//                     setStateUsers(enrolledUsers);
//                     console.log("Fetched users for course:", enrolledUsers);
//                 } catch (error) {
//                     console.error("Failed to fetch users for course:", error);
//                 }
//             };
//             fetchUsersForCourse();
//         }
//         setStateUsers(users || []);
//     }, [users, cid]);

//     return (
//         <div id="wd-people-table">
//             <PeopleDetails />
//             <table className="table table-striped">
//                 <thead>
//                     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
//                 </thead>
//                 <tbody>
//                     {users
//                         // .filter((usr) => 
//                         //     enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
//                         // )
//                         .map((user: any) => (
//                             <tr key={user._id}>
//                                 <td className="wd-full-name text-nowrap">
//                                     <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
//                                         <FaUserCircle className="me-2 fs-1 text-secondary" />
//                                         <span className="wd-first-name">{user.firstName}</span>{" "}
//                                         <span className="wd-last-name">{user.lastName}</span>
//                                     </Link>
//                                 </td>

//                                 <td className="wd-login-id">{user.loginId}</td>
//                                 <td className="wd-section">{user.section}</td>
//                                 <td className="wd-role">{user.role}</td>
//                                 <td className="wd-last-activity">{user.lastActivity}</td>
//                                 <td className="wd-total-activity">{user.totalActivity}</td>
//                             </tr>
//                         ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


// src/Kanbas/Courses/People/Table.tsx
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import * as db from "../../Database";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";
import { findUsersForCourse } from "../../Courses/client";

interface PeopleTableProps {
  users?: any[]; 
}

export default function PeopleTable({ users }: PeopleTableProps) {
  const { cid } = useParams<{ cid: string }>(); // get the course id from the URL
  const [stateUsers, setStateUsers] = useState<any[]>(users || []);

  useEffect(() => {
    // if the users are not passed as props, fetch them from the database
    if (!users && cid) {
      const fetchUsersForCourse = async () => {
        try {
          const enrolledUsers = await findUsersForCourse(cid);
          setStateUsers(enrolledUsers);
        } catch (error) {
          console.error("Failed to fetch users for course:", error);
        }
      };
      fetchUsersForCourse();
    }
    setStateUsers(users || []);
  }, [users, cid]);

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
        {stateUsers && stateUsers
          .map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div> );}