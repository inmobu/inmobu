import Logo from '../svg/Logo';
import { BiChevronDown } from 'react-icons/bi';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaRegBuilding } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="lg:hidden w-full h-16 shadow px-5  bg-white">
        <div className="h-full flex items-center">
          <div>
            <Logo height={47.5} />
          </div>
          <div className="flex items-center ml-auto">
            <button><CgMenuRightAlt size={"1.5rem"} /> </button>
          </div>
        </div>
      </nav>
      <nav className="hidden lg:block w-full h-20 shadow px-5 lg:px-10 fixed bg-white z-10">
        <div className="h-full flex items-center">
          <div>
            <Logo height={47.5} />
          </div>
          <div className="ml-auto h-full flex items-center gap-2">

            <div className="flex items-center  menuItem h-full">
              <div className=" hover:bg-gray-100 cursor-pointer rounded-md py-2 px-3 flex items-center"
              ><p>Soluciones</p> <BiChevronDown size={"1.5rem"} /></div>
              <div className="hidden absolute dropdown-content shadow-md w-full top-20 left-0 py-8 bg-white border-t border-gray-300">
                <div className="w-1/2 px-16">
                  <div className="hover:bg-blue-50 p-5 rounded-lg">
                    <a className="" href="#">
                      <div className="flex items-center gap-3">
                        <MdSpaceDashboard className="text-indigo-600" size={"2.5rem"} />
                        <div>
                          <p className="font-bold text-xl leading-4 text-gray-800">CRM</p>
                          <p>Customer Relationship Management</p>
                        </div>

                      </div>
                      <div className="py-3">
                        <p>Lleva el seguimiento de tus propectos, cierra oportunidades, mantente conectado con tus clientes, centraliza tu trabajo y aumenta la productividad de tu organización con nuestro CRM en la sube y adaptado a la industria inmobiliaria y de bienes raíces.</p>
                        <div className="py-4">
                          <a className="px-3 py-1 border border-black hover:bg-black hover:text-white">Más información</a>
                        </div>
                      </div>
                    </a>
                  </div>


                </div>
                <div className="w-1/2 px-16">
                  <div className="hover:bg-blue-50 p-5 rounded-lg">
                    <a href="">
                      <div className="flex items-center gap-3">
                        <FaRegBuilding className="text-indigo-600" size={"2.5rem"} />
                        <div>
                          <p className="font-bold text-xl leading-4 text-gray-800">MLS</p>
                          <p>Multiple Listing Service</p>
                        </div>
                      </div>
                      <div className="py-3">
                        <p>Trabaje en colaboración con corredores, agencias y agentes inmobiliarios a través de Inmobu MLS,una base de datos y estandar de datos abiertos para compatir información de los listados de propiedades y bienes raíces con el objetivo de facilitar la comercialización de las propiedades, aumentar la red de ventas y coordinar el reparto de comisiones entre agentes y/o agencias vendedoras.</p>
                        <div className="py-4">
                          <a className="px-3 py-1 border border-black hover:bg-black hover:text-white">Más información</a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
            <a href={"/?key=1"} className="h-full flex items-center">
              <p className="cursor-pointer rounded-md py-2 px-3 hover:bg-gray-100 ">Habla con un agente</p>
            </a>

            <button className="bg-blue-600 hover:bg-blue-800 cursor-pointer rounded-md py-2 px-3 text-white">
              Crear una cuenta <a className="font-bold">GRATIS</a>
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-gray-100 cursor-pointer rounded-md py-2 px-3 text-white">
              Inicia sesión
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar