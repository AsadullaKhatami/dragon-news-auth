import React from "react";
import { Link } from "react-router";

function Login(){
    return(
        <div className="flex flex-col justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-center text-2xl font-semibold text-accent pt-10">Login Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset bg-base-100 rounded-box w-xs p-4">
                        <label className="label font-semibold">Email Address</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center pt-5">
                            Don't Have an Account? <Link className="text-secondary" to='/auth/register'>Register</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Login;
