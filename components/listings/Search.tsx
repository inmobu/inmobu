import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import PredictionsBoxSearch from './PredictionsBoxSearch';

const Search = () => {
    const [currentWidth, setWidth] = useState<String>("w-24")
    const [showPredictionsBoxSearch, setShowPredictionsBoxSearch] = useState<boolean>(false)

    const focus = () => {
        setWidth("w-80")
        setShowPredictionsBoxSearch(true)
    }
    const blur = () => {
        setWidth("w-24")
        setShowPredictionsBoxSearch(false)
    }
    return (
        <div className={`relative w-full ease-in-out delay-150  border-gray-400 border rounded-md px-2 py-0.5 flex items-center gap-1.5 transition-all ${currentWidth}`}>
            <AiOutlineSearch className="m-auto" size={"1rem"} />
            <input onFocus={focus} onBlur={blur} className="w-full outline-none h-full bg-transparent text-sm placeholder:text-gray-800" placeholder="Buscar" />
            {showPredictionsBoxSearch ?  <PredictionsBoxSearch/> : null }
        </div>
    )
}

export default Search