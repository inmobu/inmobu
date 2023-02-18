import { BsArrowUpRight, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";





const ContactSideInformation = () => {
    return (
        <div className="lg:border lg:border-gray-500 rounded-md">
            <div className='lg:p-5 flex'>
                <div className="leading-5">
                    <h3 className="font-bold ">Inmobiliaria Ejemplo</h3>
                    <button className="border-b border-gray-900  flex gap-1 items-center " >
                        <p>Visitar el sitio web</p>
                        <BsArrowUpRight size={10} />
                    </button>
                    <div className="py-2">
                        <button className="flex gap-1 items-center">
                            <BsFillTelephoneFill size={13} />
                            <p>+52 1 33 4770 0657</p>
                        </button>
                        <button className="flex gap-1 items-center">
                            <AiOutlineMail size={13} />
                            <p>support@inmobu.com</p>
                        </button>
                    </div>
                    <div className="flex gap-2 lg:pt-4">
                        <button className="border border-gray-600 rounded-md lg:py-1.5 py-2 px-3 flex gap-1.5 items-center">
                        <BsFillTelephoneFill className="text-gray-900" size={15} />
                           <p>Llamar</p> 
                        </button>
                        <button className="bg-green-500  rounded-md py-2 px-3 lg:py-1.5 text-white flex gap-1.5 items-center">
                            <AiOutlineWhatsApp size={17} />
                            <p>Whatsapp</p>
                        </button>

                    </div>

                </div>

                <div className="ml-auto">
                    <div className="h-20 w-20 ml-auto rounded-md border border-gray-300 ">
                        <img
                            className="object-cover rounded-md h-20 w-20"
                            src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactSideInformation;