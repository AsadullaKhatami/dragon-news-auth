import React, { use } from "react";
import { Link } from "react-router";
import { UserContext } from "../provider/AuthProvidr";

function Login(){
    const {signin, setUser} = use(UserContext);
    const handelSignin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log({email, password})
        signin(email, password).then((userCredential) => {
            // Signed in 
            setUser({ email, password });
            console.log(userCredential)
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return(
        <div className="flex flex-col justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-center text-2xl font-semibold text-accent pt-10">Login Your Account</h2>
                <form onSubmit={handelSignin} className="card-body">
                    <fieldset className="fieldset bg-base-100 rounded-box w-xs p-4">
                        <label className="label font-semibold">Email Address</label>
                        <input name="email" type="email" className="input" placeholder="Email" />

                        <label className="label font-semibold">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />

                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center pt-5">
                            Don't Have an Account? <Link className="text-secondary" to='/auth/register'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login;
