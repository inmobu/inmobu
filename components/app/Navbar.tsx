import { MdExitToApp, MdOutlineContactPhone } from "react-icons/md";

import { GrUpdate } from "react-icons/gr";
import { BiBell } from "react-icons/bi";
import { Menu } from '@headlessui/react';
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSetting, AiOutlineUnorderedList } from "react-icons/ai";


import { VscAccount } from "react-icons/vsc";


const Navbar = () => {
    return (
        <div className="mx-8 h-16 border-b border-gray-300 flex items-center">
            <div>
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Propiedades</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Nueva propiedad</span>
                        </div>
                    </li>
                </ol>
            </div>
            <div className="ml-auto flex gap-2 flex items-center">
                <button className="py-2 px-4 bg-blue-600  shadow-md text-white font-medium rounded-lg flex items-center gap-2">
                    <div className="m-auto" >+</div>
                    <span className="text-sm font-bold">Nueva propiedad</span>
                </button>
                <button className="px-3 rounded h-14 hover:bg-gray-100 rounded-md">
                    <GrUpdate size={"1rem"} />
                </button>
                <div className="relative h-full">
                    <Menu>
                        <Menu.Button className={"h-full"}>
                            <button className="px-3 rounded h-14 hover:bg-gray-100 rounded-md ">
                                <div className="relative">
                                    <BiBell size={"1.25rem"} />
                                    <div className="h-4 w-4 bg-red-500 rounded-full absolute -top-2 -right-2 flex items-center">
                                        <span style={{ fontSize: "0.6rem" }} className="text-xs text-white text-center m-auto font">22</span>
                                    </div>
                                </div>
                            </button>
                        </Menu.Button>
                        <Menu.Items>
                            <div className="absolute mt-2 bg-white z-20 rounded-lg shadow-2xl grid grid-cols-1 p-4 w-96 right-0 h-96 overflow-y-scroll">
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><FaRegCalendarAlt size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva visita programada </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><MdOutlineContactPhone size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva solicitud de contacto </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><FaRegCalendarAlt size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva visita programada </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><MdOutlineContactPhone size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva solicitud de contacto </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><FaRegCalendarAlt size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva visita programada </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><MdOutlineContactPhone size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva solicitud de contacto </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><MdOutlineContactPhone size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva solicitud de contacto </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><MdOutlineContactPhone size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva solicitud de contacto </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <div className="text-gray-300"><MdOutlineContactPhone size={"1.5rem"} /></div>
                                        <div className="border-l border-gray-300 pl-2">
                                            <p className="text-xs text-left"><span className="font-bold">Nueva solicitud de contacto </span><span className="">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</span></p>
                                            <p className="text-xs text-left text-blue-500">Hace 2 dias</p>
                                        </div>
                                    </button>
                                </Menu.Items>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
                <div className="relative h-full">
                    <Menu>
                        <Menu.Button className={"h-full"}>
                            <button className="text-sm font-medium text-gray-700 flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg">
                                <img className="h-10 w-10  rounded-full object-fit border border-gray-300" src="https://thumbs.dreamstime.com/z/real-estate-logo-design-simple-172869139.jpg" />
                                <div style={{ maxWidth: "8rem" }} className="whitespace-nowrap overflow-hidden text-ellipsis">
                                    Inmobiliaria Ejemplo
                                </div>
                                <IoMdArrowDropdown className="m-auto" size={"1rem"} />
                            </button>
                        </Menu.Button>
                        <Menu.Items>
                            <div className="absolute mt-2 bg-white z-20 rounded-lg shadow-2xl grid grid-cols-1 p-4 w-56">
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <VscAccount size={"1rem"} />
                                        <p>Mi Cuenta</p>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <AiOutlineSetting size={"1rem"} />
                                        <p>Configuración</p>
                                    </button>
                                </Menu.Items>
                                <Menu.Items>
                                    <button className="flex gap-3 items-center hover:bg-blue-100 py-2 px-1.5 rounded-md w-full">
                                        <MdExitToApp size={"1rem"} />
                                        <p>Cerrar Sesión</p>
                                    </button>
                                </Menu.Items>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar