import React from "react";
import "../App.css";
function Latestnews() {

    return(
        <div className="md:flex w-11/12 mx-auto gap-3 bg-base-300 p-3">
            <p className="bg-secondary p-1 px-5 text-white text-center">latest</p>
            <div className="overflow-hidden">
                <div className="marquee-track">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, exercitationem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, exercitationem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, exercitationem?</p>
                </div>
            </div>
        </div>
    )
}

export default Latestnews;