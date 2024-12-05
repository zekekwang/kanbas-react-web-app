// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// export default function AccountNavigation() {
//   const location = useLocation();

//   const getLinkClass = (path: string) => {
//     return location.pathname === path
//       ? "list-group-item bg-white text-danger border-top border-bottom border-end"
//       : "list-group-item bg-white text-red border-0";
//   };
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to={`/Kanbas/Account/Signin`} className={getLinkClass("/Kanbas/Account/Signin")}> Signin </Link><br />
//       <Link to={`/Kanbas/Account/Signup`}  className={getLinkClass("/Kanbas/Account/Signup")}> Signup </Link><br />
//       <Link to={`/Kanbas/Account/Profile`} className={getLinkClass("/Kanbas/Account/Profile")}> Profile </Link><br />
//     </div>
// );}


import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { pathname } = useLocation();

//   const links = currentUser 
//     ? [{ label: "Profile", path: "/Kanbas/Account/Profile" }] 
//     : [
//         { label: "Signin", path: "/Kanbas/Account/Signin" },
//         { label: "Signup", path: "/Kanbas/Account/Signup" }
//       ];

//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       {links.map((link) => ( 
//         <Link
//           key={link.path}
//           to={link.path}
//           className={`list-group-item border-0 ${pathname === link.path ? "active text-black bg-white" : "text-danger"}`}
//         >
//           {link.label}
//         </Link>
//       ))}
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  //if currentUser is not null, display Profile, else display Signin and Signup
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  // // useState to keep track of the active link
  //  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const [activeLink, setActiveLink] = useState<string>("");

  // Function to handle link clicks
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName); // set the active link
  };

  const { pathname } = useLocation();

  // Set the initial active link based on the current pathname
  useEffect(() => {
    const currentPath = links.find((link) => pathname.includes(link)) || (pathname.includes("Users") ? "Users" : "");
    if (currentPath) {
      setActiveLink(currentPath);
    }
  }, [pathname, links]);


  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {/* Dynamically rendering the links */}
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${activeLink === link ? "active" : "text-danger"} border border-0`}
          onClick={() => handleLinkClick(link)}
        >
          {link}
        </Link>
      ))}

      {/* Add Users link if the current user is an ADMIN */}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${activeLink === "Users" ? "active" : "text-danger"} border border-0`}
          onClick={() => handleLinkClick("Users")}
        >
          Users
        </Link>
      )}
    </div>
  );
}
