import Image, { ImageLoaderProps } from 'next/image';

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return src
}



const SecondSectionD = () => {
    return (
        <div className="w-full h-screen bg-white">
            <section className="lg:pt-10 lg:px-24 h-full flex items-center">
                <div className="block lg:flex items-center">

                    <div className="px-5 w-full lg:w-3/5 md:w-1/2 md:pr-10 lg:pr-0">
                        <p className="text-blue-500 font-black py-2">MarketPlace Inmobiliario</p>
                        <h1 className="font-bold text-4xl lg:text-5xl w-4/5 text-gray-600 leading-8">Aumenta las conversiones de </h1>
                        <h1 className="font-semibold text-4xl lg:text-5xl w-4/5 text-gray-600 leading-8">tus campañas</h1>
                        <p className="mt-4 text-xl lg:text-2xl leading-6 lg:leading-8">
                           Aumenta la conversión de tus campañas en Facebook, Google y Tiktok, plataformas Online Adversing con la optimización de sus herramientas y el trabajo en colaboración.
                        </p>

                    </div>
                    <div className="hidden lg:block">
                        <img className="object-contain" src="http://localhost:3000/marketplace.webp" />
                    </div>
                    <div className="lg:hidden py-4">
                        <img className="object-contain" src="http://localhost:3000/socialnetwork.webp" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default SecondSectionD;