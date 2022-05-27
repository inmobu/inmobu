import React from "react"

interface ImageProps {
    className: string,
    src: string,
    alt?: string,
}

const Image = ({className,src, alt}: ImageProps) => {
    if(src){
        return(
            <img className={className} alt={alt} src={src}/> 
        )
    }
    else {
        return ( <div className={className}><div className="w-full h-full bg-gray-400"></div></div>)
    }
   

}

export default Image