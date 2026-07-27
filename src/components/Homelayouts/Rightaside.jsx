import React from "react";
import SocialLogin from "./SocialLogin";
import Findus from "./Findus";
import Qzone from "./Qzone";

function Rightaside() {
    return(
        <div className="space-y-10">
            <SocialLogin></SocialLogin>
            <Findus></Findus>
            <Qzone></Qzone>
        </div>
    )
}

export default Rightaside;