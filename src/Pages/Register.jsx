import React, { use } from "react";
import { Link } from "react-router";
import { UserContext } from "../provider/AuthProvidr";

function Register(){
    const {singup, setUser} = use(UserContext)
    const handelSignup = (e) => {
        e.preventDefault();
        let target = e.target;
        let name = target.name.value;
        let photourl = target.photourl.value;
        let email = target.email.value;
        let password = target.password.value;
        // console.log({name, photourl, email, password});
        singup(email, password).then((userCredential) => {
            // Signed up 
            setUser({ name, photourl, email, password });
            console.log(userCredential);
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
                <h2 className="text-center text-2xl font-semibold text-accent pt-10">Register Your Account</h2>
                <form onSubmit={handelSignup} className="card-body">
                    <fieldset className="fieldset bg-base-100 rounded-box w-xs p-4">
                        {/* name */}
                        <label className="label font-semibold">Your Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" required/>

                        {/* photo url */}
                        <label className="label font-semibold">Photo URL</label>
                        <input name="photourl" type="text" className="input" placeholder="Photo URL" required/>

                        {/* email */}
                        <label className="label font-semibold">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required/>

                        {/* password */}
                        <label className="label font-semibold">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required/>

                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <p className="text-center pt-5">
                            Allready Have an Account? <Link className="text-secondary" to='/auth/login'>Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register;