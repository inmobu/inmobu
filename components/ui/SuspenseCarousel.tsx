import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SuspenseCarousel = () => {
    return (
        <div className="w-full h-full bg-gray-300 animate-pulse flex items-center" style={{height:"35vh"}}>
            <AiOutlineLoading3Quarters className="animate-spin m-auto" size={"3rem"} />
        </div>
    )
}

export default SuspenseCarousel;