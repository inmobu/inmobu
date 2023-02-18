import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const PredictionSearch = () => {
    return (
        <a href={"?search=J"} className="flex items-center px-2 rounded-md hover:bg-blue-100 py-1.5">
            <FaMapMarkerAlt className="pr-3" size={"1.5rem"} />
            <div className="grid">
                <span className="font-bold text-md text-left">Santa Barbara</span>
                <span className="text-xs text-left">Bogotá D.C</span>
            </div>
        </a>
    )
}

export default React.memo(PredictionSearch) ;