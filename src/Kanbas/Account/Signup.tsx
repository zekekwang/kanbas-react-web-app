import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input id="wd-username" placeholder="username" 
                     className="form-control mb-2" />
            <input placeholder="password" type="password" id="wd-password" className="form-control mb-2" /> 
            <input placeholder="verify password" type="password" className="form-control mb-2"/><br />
            <Link id="wd-signup-btn" to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Sign up </Link><br />
            <Link id="wd-signin-link" to="/Kanbas/Account/Signin" >Sign in</Link>
        </div>
    );
}
