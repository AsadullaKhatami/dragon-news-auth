import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Findus (){
    return(
        <div>
            <h2 className="font-bold mb-5">Find Us On</h2>
            <div>
                <button className="btn bg-base-100 w-full justify-start join-item font-normal"><FaFacebook size={24}/> Facebook</button>
                <button className="btn bg-base-100 w-full justify-start join-item font-normal"><FaTwitterSquare size={24}/> Twitter</button>
                <button className="btn bg-base-100 w-full justify-start join-item font-normal"><FaInstagramSquare size={24}/> Instragram</button>
            </div>
        </div>
    )
}

export default Findus;