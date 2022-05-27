import LogoInmobu from "../../svg/LogoInmobu";
import { RiMenu3Line, RiMenu2Line } from "react-icons/ri"

const Navbar = () => {
    return (
        <nav className="w-full h-16 border-b border-gray-200">
            <div className="hidden lg:flex items-center px-24 h-full">
                <div><LogoInmobu height={40} /></div>
                <div className="ml-auto">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Crea una cuenta GRATIS</button>
                </div>
                <div className="pl-4">
                    <button className="px-4 py-2 rounded-md hover:bg-gray-200 border border-blue-600 text-blue-600">Iniciar sesión</button>
                </div>
                {/* <div className="pl-4">
                    <button className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                        <RiMenu3Line size={20} />
                    </button>
                </div> */}
            </div>
            <div className="w-full flex lg:hidden items-center h-full px-5">
                <button> <RiMenu2Line size={20} /></button>
                <div className="w-full h-full items-center flex  text-center">
                    <button className="m-auto"><LogoInmobu height={40} /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;