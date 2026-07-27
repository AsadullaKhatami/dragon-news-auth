import React from "react";
import swimming from "../../assets/swimming.png";
import classimg from "../../assets/class.png";
import playground from "../../assets/playground.png";

function Qzone(){
    return(
        <div className="bg-base-300 p-3">
            <h2 className="font-bold">Q-Zone</h2>
            <div className="flex flex-col justify-center items-center gap-5">
                <img src={swimming} alt="" />
                <img src={classimg} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    )
}

export default Qzone;