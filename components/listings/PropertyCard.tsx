import React from "react";
import Carousel from "../../components/ui/Carousel";
import { BiBed, BiBath } from "react-icons/bi";
import { AiFillCar, AiFillEdit, AiFillDelete, AiOutlineWhatsApp, AiOutlineLink } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { GiResize } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Menu } from '@headlessui/react';
import { BsFillShareFill } from "react-icons/bs";
import openModal from "./../ui/openModal"
import closeModal from "./../ui/closeModal"
import Dialog from "./../ui/Dialog";




const PropertyCard = () => {
    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-52 relative">
                    <div className="absolute top-2 right-3 z-10 flex gap-1.5">
                        <button onClick={() => openModal("modalShared")} className="h-8 w-8 bg-white shadow-md rounded-full "><BsFillShareFill className="m-auto" size={"1rem"} /></button>
                        <button className="h-8 w-8 bg-white shadow-md rounded-full "><AiFillEdit className="m-auto" size={"1rem"} /></button>
                        <div className="relative h-full">
                            <Menu>
                                <Menu.Button className={"h-full"}>
                                    <button className="h-8 w-8 bg-white shadow-md rounded-full "><MdOutlineMoreHoriz className="m-auto" size={"1rem"} /></button>

                                </Menu.Button>
                                <Menu.Items>
                                    <div className="absolute mt-2 right-0 bg-white z-20 rounded-md shadow-2xl grid grid-cols-1 gap-0.5 p-2 w-32">
                                        <Menu.Items>
                                            <button className="flex gap-3 items-center rounded-md hover:bg-blue-100 w-full px-1.5 py-1">
                                                <AiFillEdit className="my-auto" size={"1rem"} />
                                                <span className="text-xs">Editar</span>
                                            </button>
                                        </Menu.Items>
                                        <Menu.Items>
                                            <button className="flex gap-3 items-center rounded-md hover:bg-blue-100 w-full px-1.5 py-1">
                                                <AiFillDelete className="my-auto" size={"1rem"} />
                                                <span className="text-xs">Eliminar</span>
                                            </button>
                                        </Menu.Items>
                                        <Menu.Items>
                                            <button className="flex gap-3 items-center rounded-md hover:bg-blue-100 w-full px-1.5 py-1">
                                                <BsFillShareFill className="my-auto" size={"0.75rem"} />
                                                <span className="text-xs">Compartir</span>
                                            </button>
                                        </Menu.Items>

                                    </div>
                                </Menu.Items>
                            </Menu>
                        </div>
                    </div>
                    <Carousel
                        src={[
                            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg",
                            "https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg",
                            "https://images.unsplash.com/photo-1558064340-601a5c6ac442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                            "https://images.unsplash.com/photo-1605229788577-c69bf0cd3714?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                            "https://images.unsplash.com/photo-1600877685303-857fde8d40d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
                            "https://images.unsplash.com/photo-1432297984334-707d34c4163a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        ]}
                    />
                </div>
                <div className="pt-2 pb-8">
                    <h1 className="font-bold text-xl px-5 leading-5 pt-2">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</h1>
                    <h2 className="text-gray-600 text-lg px-5">$16,000 MXN</h2>
                    <div className="flex gap-2  flex-wrap px-5 leading-4">
                        <div className="flex items-center gap-1"><BiBed size={"1rem"} />2 recamaras</div>
                        <div className="flex items-center gap-1"><BiBath size={"1rem"} />2 Baños</div>
                        <div className="flex items-center gap-1"><AiFillCar size={"1rem"} />2 Garajes</div>
                        <div className="flex items-center gap-1"><GiResize size={"1rem"} />55 m2</div>
                    </div>
                </div>
            </div>
            <Dialog id="modalShared" width="20vw">
                <div className="p-5">
                    <div className="flex items-center">
                        <span className="text-lg font-bold">Compartir</span>
                        <button onClick={() => closeModal("modalShared")} className="ml-auto"><BsXLg size={"1rem"} /></button>
                    </div>
                    <div className="flex w-full flex-items pt-3">
                        <div className="mx-auto flex gap-3 py-4">
                            <button className="h-10 w-10 bg-green-400 rounded-full">
                                <AiOutlineWhatsApp className="text-white m-auto" size={"1.5rem"} />
                            </button>
                            <button className="h-10 w-10 bg-blue-800 rounded-full">
                                <FaFacebookF className="text-white m-auto" size={"1.5rem"} />
                            </button>
                            <button className="h-10 w-10 bg-blue-400 rounded-full">
                                <AiOutlineLink className="text-white m-auto" size={"1.5rem"} />
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>


    )
}

export default PropertyCard;