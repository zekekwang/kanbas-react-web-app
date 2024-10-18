// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// export default function KanbasNavigation() {
//     return (
//         <div id="wd-kanbas-navigation" style={{ width: 120 }}
//             className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
//             <a id="wd-neu-link" target="_blank"
//                 href="https://www.northeastern.edu/"
//                 className="list-group-item bg-black border-0 text-center">
//                 <img src="/images/NEU.png" width="75px" /></a>
//             <Link to="/Kanbas/Account" id="wd-account-link"
//                 className="list-group-item text-center border-0 bg-black text-white">
//                 <FaRegCircleUser className="fs-1 text text-white" /><br />
//                 Account </Link>
//             <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
//                 className="list-group-item text-center border-0
//                    bg-white text-danger">
//                 <AiOutlineDashboard className="fs-1 text-danger" /><br />
//                 Dashboard </Link>
//             <Link to="/Kanbas/Dashboard" id="wd-course-link"
//                 className="list-group-item text-white
//                    bg-black text-center border-0">
//                 <LiaBookSolid className="fs-1 text-danger" /><br />
//                 Courses </Link>
//             {/* complete styling the rest of the links */}
//             <Link to="/Kanbas/Calendar" id="wd-calendar-link"
//                 className="list-group-item text-white
//                      bg-black text-center border-0">
//                 <IoCalendarOutline className="fs-1 text-danger" /><br />
//                 Calendar </Link>
//             <Link to="/Kanbas/Inbox" id="wd-inbox-link"
//                 className="list-group-item text-white
//                      bg-black text-center border-0">
//                 <FaInbox className="fs-1 text-danger" /><br />
//                 Inbox </Link>
//             <Link to="/Kanbas/Labs" id="wd-labs-link"
//                 className="list-group-item text-white
//                      bg-black text-center border-0">
//                 <LiaCogSolid className="fs-1 text-danger" /><br />
//                 Labs </Link>
//         </div>
//     );
// }
// import React from 'react';
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { Link, useLocation } from "react-router-dom";


// export default function KanbasNavigation() {
//     const location = useLocation();

//     const getLinkClass = (path: string) => {
//         return location.pathname === path
//             ? "list-group-item text-center border-0 bg-white text-danger"
//             : "list-group-item text-center border-0 bg-black text-white";
//     };

//     return (
//         <div id="wd-kanbas-navigation" style={{ width: 120 }}
//             className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
//             <a id="wd-neu-link" target="_blank"
//                 href="https://www.northeastern.edu/"
//                 className="list-group-item bg-black border-0 text-center">
//                 <img src="/images/NEU.png" width="75px" /></a>
//             <Link to="/Kanbas/Account" id="wd-account-link"
//                 className={getLinkClass("/Kanbas/Account")}>
//                 <FaRegCircleUser className="fs-1 text-danger" /><br />
//                 Account </Link>
//             <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
//                 className={getLinkClass("/Kanbas/Dashboard")}>
//                 <AiOutlineDashboard className="fs-1 text-danger" /><br />
//                 Dashboard </Link>
//             <Link to="/Kanbas/Dashboard" id="wd-course-link"
//                 className={getLinkClass("/Kanbas/Courses")}>
//                 <LiaBookSolid className="fs-1 text-danger" /><br />
//                 Courses </Link>
//             <Link to="/Kanbas/Calendar" id="wd-calendar-link"
//                 className={getLinkClass("/Kanbas/Calendar")}>
//                 <IoCalendarOutline className="fs-1 text-danger" /><br />
//                 Calendar </Link>
//             <Link to="/Kanbas/Inbox" id="wd-inbox-link"
//                 className={getLinkClass("/Kanbas/Inbox")}>
//                 <FaInbox className="fs-1 text-danger" /><br />
//                 Inbox </Link>
//             <Link to="/Labs" id="wd-labs-link"
//                 className={getLinkClass("/Kanbas/Labs")}>
//                 <LiaCogSolid className="fs-1 text-danger" /><br />
//                 Labs </Link>
//         </div>
//     );
// }


import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <div id="wd-kanbas-navigation" style={{width: 120}}
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>
      <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
);}
