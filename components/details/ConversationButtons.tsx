import {  AiOutlineWhatsApp } from "react-icons/ai";


const ConversationButtons = () => {
    return (
        <div className="flex lg:px-5 gap-2 lg:pb-4 pt-4 ">
            <button className="border-black border rounded-md w-7/12 h-12"><p>Contactar al agente</p></button>
            <button className="bg-green-500 rounded-md text-white w-5/12 flex items-center">
                <div className="flex items-center m-auto ">
                    <AiOutlineWhatsApp size={25} />
                    <p className="p-2">WhastApp</p>
                </div>
            </button>
        </div>
    )
}