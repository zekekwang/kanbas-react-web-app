// import React from "react";
// import { Link } from "react-router-dom";
// export default function Signup() {
//     return (
//         <div id="wd-signup-screen">
//             <h3>Sign up</h3>
//             <input id="wd-username" placeholder="username" 
//                      className="form-control mb-2" />
//             <input placeholder="password" type="password" id="wd-password" className="form-control mb-2" /> 
//             <input placeholder="verify password" type="password" className="form-control mb-2"/><br />
//             <Link id="wd-signup-btn" to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Sign up </Link><br />
//             <Link id="wd-signin-link" to="/Kanbas/Account/Signin" >Sign in</Link>
//         </div>
//     );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="wd-username form-control mb-2" placeholder="username" />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"
             className="wd-password form-control mb-2" placeholder="password" />
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
      <Link to="/Kanbas/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
);}
