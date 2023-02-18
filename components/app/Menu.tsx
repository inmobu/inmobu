import Tooltip from '../ui/Tooltip';

import Icon from '../../svg/Icon';
import { MdDashboard } from "react-icons/md";
import { BsHouseDoorFill, BsFillLightbulbFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiStackFill, RiContactsFill } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";


const Menu = () => {
    return(
        <div className="h-full bg-white-800 p-3 shadow-xl bg-gray-50" style={{ width: "4.5rem" }}>
        <div className="w-full"><Icon className="h-8 m-auto" /></div>
        <div className="flex flex-col py-8 text-gray-300 gap-6">
            <div className="m-auto"><Tooltip tooltipContent={<a>Dashboard</a>} placement="right"><MdDashboard size={"1.5rem"} /></Tooltip></div>
            <div className="m-auto"><Tooltip tooltipContent={<a>Listado de Propiedades</a>} placement="right"><BsHouseDoorFill size={"1.5rem"} /></Tooltip></div>
            <div className="m-auto"><Tooltip tooltipContent={<a>Tareas</a>} placement="right"><RiStackFill size={"1.5rem"} /></Tooltip></div>
            <div className="m-auto"><Tooltip tooltipContent={<a>Oportunidades</a>} placement="right"><BsFillLightbulbFill size={"1.5rem"} /></Tooltip></div>
            <div className="m-auto"><Tooltip tooltipContent={<a>Contactos</a>} placement="right"><RiContactsFill size={"1.5rem"} /></Tooltip></div>
            <div className="m-auto"><Tooltip tooltipContent={<a>Calendario</a>} placement="right"><FaRegCalendarAlt size={"1.5rem"} /></Tooltip></div>
            <div className="m-auto"><Tooltip tooltipContent={<a>Inmobu Academy</a>} placement="right"><HiAcademicCap size={"1.5rem"} /></Tooltip></div>
        </div>
    </div>
    )
}

export default Menu