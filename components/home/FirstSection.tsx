import Image, { ImageLoaderProps } from 'next/image';

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return src
}



const FirstSection = () => {
  return (
    <div className="w-full h-screen relative ">
      <div className='absolute w-full h-full z-0 hidden lg:block'>
        <Image layout="fill" loader={() => myLoader({src:"http://localhost:3000/main.webp", width: 400, quality:10})} src={"http://localhost:3000/main.webp"}/>
      </div>
      <div className='absolute w-full h-full z-0 lg:hidden'>
        <Image layout="fill" loader={() => myLoader({src:"http://localhost:3000/main-mobile.webp", width: 400, quality:10})} src={"http://localhost:3000/main-mobile.webp"}/>
      </div>
      <section className="absolute lg:px-24 h-full flex items-center z-20" >
        <div className="flex lg:flex-wrap items-center">
          <div className="px-5 w-full lg:w-full md:w-1/2 md:pr-10 lg:pr-0">
            <h1 className="font-bold text-4xl lg:text-6xl lg:px-24 text-gray-600 leading-8 text-blue-900 text-center">Conéctate con la comunidad inmobiliaria</h1>
            <h1 className="font-bold text-2xl lg:text-4xl lg:px-24 text-gray-600 leading-6 py-4 lg:leading-8 text-blue-900 text-center">y transforma la manera en que trabajas</h1>

            <p className="mt-4 text-xl lg:text-2xl leading-6 lg:leading-8 text-blue-800 text-center ">
              CRM & MLS inmobiliario gratis, sin contratos ni costos ocultos y cuentas inlimitadas
            </p>
            <form className=" py-12">
              <div className="mb-4 grid text-center w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Ingresa tu correo electronico'
                  className="w-full mx-auto lg:w-96 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="grid lg:flex gap-2 w-full">
              <button className="mx-auto my-3 flex gap-1 bg-blue-600 border-0 py-3 px-4 focus:outline-none hover:bg-blue-800 rounded text-lg">
                <p className="text-white font-bold ">Comienza ahora</p>
                <p className="text-blue-100">- Es gratis</p>
              </button>
              
              {/* <button className="flex gap-1 border border-blue-600  py-3 px-4 focus:outline-none hover:bg-gray-100 rounded text-lg">
                <p className=" font-bold text-blue-800 ">Habla con un agente</p>
              </button> */}
            </div>
            <div className="text-xs text-gray-500 mt-3 text-center lg:w-96 mx-auto">Al hacer click en el boton de arriba o diligenciar el campo, usted acepta nuestros <a className="underline text-blue-400">Términos de servicio</a> y <a className="underline text-blue-400">Política de privacidad</a>.</div>

            </form>



          </div>
          {/* <div className="hidden lg:block">
            <h1>J</h1>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default FirstSection;