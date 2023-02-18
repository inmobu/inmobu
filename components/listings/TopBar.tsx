import Select from 'react-select';
import { Menu } from '@headlessui/react';
import CurrencyInput from 'react-currency-input-field';

import Search from './Search'


import { BsHouseDoorFill, BsFillLightbulbFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineClose, AiFillBell, AiOutlineUnorderedList } from "react-icons/ai";
import { MdSpaceDashboard, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoRemoveOutline, IoAddOutline } from "react-icons/io5";

const TopBar = () => {
    const options = [
        { value: 'chocolate', label: 'Venta' },
        { value: 'strawberry', label: 'Arriendo' },
        { value: 'vanilla', label: 'Alquiler' }
    ]



    return (
        <div className="py-2 flex w-full">
            <div className="flex px-8 w-full gap-1.5 ">
                <div className="flex gap-1.5 whitespace-nowrap overflow-y-visible w-full h-8">
                    <Search/>
                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="flex items-center h-full top-0 left 0 border-gray-400 border px-2 rounded-md text-sm">
                                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2 my-auto"></div>
                                   <span>Venta</span> 
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div className="absolute mt-2 bg-white z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-56">
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Venta</label>
                                        </div>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Arriendo</label>
                                        </div>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Alquiler</label>
                                        </div>
                                    </Menu.Items>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="h-full top-0 left 0 border-gray-400 border px-2 rounded-md text-sm">
                                    Usado
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div className="absolute mt-2 bg-white z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-56">
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Nuevo</label>
                                        </div>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Usado</label>
                                        </div>
                                    </Menu.Items>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="h-full top-0 left 0 border-gray-400 border px-2 rounded-md text-sm">
                                    Tipo de Propiedad
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div className="absolute mt-2 bg-white z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-56">
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Apartamentos</label>
                                        </div>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Casas</label>
                                        </div>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Oficinas</label>
                                        </div>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <div className="flex gap-3 items-center">
                                            <input className="h-4 w-4" type="radio" id="huey" name="drone" value="huey" />
                                            <label>Fincas</label>
                                        </div>
                                    </Menu.Items>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>

                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="h-full top-0 left 0 border-gray-400 border px-2 rounded-md text-sm">
                                    Baños y Habitaciones
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div
                                    className="absolute mt-2 bg-white z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-60 divide-gray-300 divide-y">
                                    <div className="flex py-2">
                                        <span className="text-bold">Habitaciones</span>
                                        <div className="ml-auto flex gap-2 items-center">
                                            <button className="h-6 w-6 rounded-full border-gray-300 border text-gray-400 hover:border-gray-400 hover:text-gray-900" >
                                                <IoRemoveOutline className="m-auto" size={"1.2rem"} />
                                            </button>
                                            <span className="text-xl">1</span>
                                            <button className="h-6 w-6 rounded-full border-gray-300 border text-gray-400 hover:border-gray-400 hover:text-gray-900" >
                                                <IoAddOutline className="m-auto" size={"1.2rem"} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex py-2">
                                        <span className="text-bold">Baños</span>
                                        <div className="ml-auto flex gap-2 items-center">
                                            <button className="h-6 w-6 rounded-full border-gray-300 border text-gray-400 hover:border-gray-400 hover:text-gray-900" >
                                                <IoRemoveOutline className="m-auto" size={"1.2rem"} />
                                            </button>
                                            <span className="text-xl">1</span>
                                            <button className="h-6 w-6 rounded-full border-gray-300 border text-gray-400 hover:border-gray-400 hover:text-gray-900" >
                                                <IoAddOutline className="m-auto" size={"1.2rem"} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="h-full top-0 left 0 border-gray-400 border px-2 rounded-md text-sm">
                                    Precio
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div
                                    className="absolute mt-2 bg-white whitespace-normal right-0 z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-80 divide-gray-300 divide-y">
                                    <div className="grid gap-2">
                                        <div>Rango de precios</div>
                                        <div className="flex gap-1.5 items-center w-full">
                                            <div className="p-2 border border-gray-400 rounded-md w-full gap-0">
                                                <span className="text-xs">Desde (COP)</span>
                                                <CurrencyInput intlConfig={{ locale: 'es-CO', currency: 'COP' }}
                                                    className="w-full outline-none h-6 m-0 focus:border focus:boder-red-200"
                                                    placeholder='$400,000,000'
                                                    style={{ padding: "0", outline: 0, border: 0 }} />
                                            </div>
                                            <span>-</span>
                                            <div className="p-2 border border-gray-400 rounded-md w-full gap-2">
                                                <span className="text-xs">Hasta (COP)</span>
                                                <CurrencyInput intlConfig={{ locale: 'es-CO', currency: 'COP' }}
                                                    className="w-full outline-none h-6 m-0 focus:border-0"
                                                    placeholder='$400,000,000'
                                                    style={{ padding: "0", outline: 0, border: 0 }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="h-full top-0 border-gray-400 border px-2 rounded-md text-sm">
                                    Más opciones
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div
                                    className="absolute mt-2  right-0 bg-white z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-96">
                                    <div className="grid divide-gray-300 divide-y">
                                        <div className="grid gap-1.5  w-full py-4">
                                            <span className="w-2/6 text-sm">Palabras claves</span>
                                            <div className="border border-gray-300 rounded-md flex items-center">
                                                <input
                                                    className="px-2 w-full outline-none h-6 m-0 focus:border-0 h-8 "
                                                    placeholder='Palabras clave'
                                                    style={{ height: "2rem", outline: 0, border: 0 }} />
                                                <div className="px-2"><AiOutlineClose size={"1rem"} /></div>
                                            </div>
                                            <div className="flex flex-wrap gap-x-2 gap-y-1.5 py-1">
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                                <button className="rounded-md py-1 px-2 rounded-xl border border-gray-300 text-xs flex gap-1 items-center">
                                                    <p>Gimnacio</p>
                                                    <AiOutlineClose size={"0.5rem"} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className="flex gap-1.5 items-center w-full py-4">
                                            <span className="w-2/6 text-sm">Administración</span>
                                            <div className="ml-auto w-4/6  flex gap-2">
                                                <div className="border border-gray-300 rounded-md  py-0.5 px-1.5">
                                                    <CurrencyInput intlConfig={{ locale: 'es-CO', currency: 'COP' }}
                                                        className="w-full outline-none h-6 m-0 focus:border-0"
                                                        placeholder='$600,000'
                                                        style={{ height: "1.75rem", padding: "0", outline: 0, border: 0 }} />
                                                </div>
                                                <div className="border border-gray-300 rounded-md  py-0.5 px-1.5">
                                                    <CurrencyInput intlConfig={{ locale: 'es-CO', currency: 'COP' }}
                                                        className="w-full outline-none h-6 m-0 focus:border-0"
                                                        placeholder='$600,000'
                                                        style={{ height: "1.75rem", padding: "0", outline: 0, border: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-center w-full py-4">
                                            <span className="w-2/6 text-sm">Antiguedad</span>
                                            <div className="ml-auto w-4/6  flex gap-2">
                                                <div className="border border-gray-300 rounded-md py-0.5 px-1.5">
                                                    <input
                                                        className="w-full outline-none h-6 m-0 focus:border-0 h-8"
                                                        placeholder='10'
                                                        style={{ height: "1.75rem", padding: "0", outline: 0, border: 0 }} />
                                                </div>
                                                <div className="border border-gray-300 rounded-md py-0.5 px-1.5">
                                                    <input
                                                        className="w-full outline-none h-6 m-0 focus:border-0 h-8"
                                                        placeholder='10'
                                                        style={{ height: "1.75rem", padding: "0", outline: 0, border: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-center w-full py-4">
                                            <span className="w-2/6 text-sm">Parqueaderos</span>
                                            <div className="ml-auto w-4/6 flex gap-2 h-10">
                                                <Select className="w-full" options={options} />

                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-center w-full py-4">
                                            <span className="w-2/6 text-sm">Dias en Inmobu</span>
                                            <div className="ml-auto w-4/6 flex gap-2 h-10">
                                                <Select className="w-full" options={options} />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
                <div className="ml-auto flex gap-1.5">
                    <div className="relative h-full">
                        <Menu>
                            <Menu.Button className={"h-full"}>
                                <button className="border border-blue-500 h-full text-blue-600 px-3 flex items-center gap-1 rounded-md hover:bg-blue-100">
                                    <MdSpaceDashboard className="m-auto" size={"1rem"} />
                                    <span className="text-sm">Cuadricula</span>
                                    <MdOutlineKeyboardArrowDown className="m-auto" size={"1rem"} />
                                </button>
                            </Menu.Button>
                            <Menu.Items>
                                <div className="absolute mt-2 bg-white z-30 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-2 w-32">
                                    <Menu.Items>
                                        <button className=" py-1.5 w-full flex gap-1 hover:bg-gray-200 rounded-md px-1.5">
                                            <AiOutlineUnorderedList className="my-auto" size={"1rem"} />
                                            <span className="text-sm">Lista</span>
                                        </button>
                                    </Menu.Items>
                                    <Menu.Items>
                                        <button className=" py-1.5 w-full flex gap-1 hover:bg-gray-200 rounded-md px-1.5">
                                            <FaMapMarkerAlt className="my-auto" size={"1rem"} />
                                            <span className="text-sm">Mapa</span>
                                        </button>
                                    </Menu.Items>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>

                    {/* <button className=" py-1.5 px-3 flex gap-1 hover:bg-gray-200 rounded-md">
                            <AiOutlineUnorderedList className="m-auto" size={"1rem"} />
                            <span className="text-sm">Lista</span>
                        </button> */}
                    {/* <button className=" py-1.5 px-3 flex gap-1 hover:bg-gray-200 rounded-md">
                        <FaMapMarkerAlt className="m-auto" size={"1rem"} />
                        <span className="text-sm">Mapa</span>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default TopBar;