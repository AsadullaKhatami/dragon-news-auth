import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function SocialLogin() {
    return(
        <div>
            <h2 className="font-bold mb-5">Login with</h2>
            <div className="grid grid-cols-1 gap-2">
                <button className="btn btn-outline text-blue-400 font-normal"><FcGoogle size={24}/> Login with Google</button>
                <button className="btn btn-outline font-normal"><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    )
}

export default SocialLogin;