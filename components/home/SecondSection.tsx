import Image, { ImageLoaderProps } from 'next/image';

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return src
}



const SecondSection = () => {
    return (
        <div className="w-full h-screen bg-blue-50">
            <section className="lg:pt-10 lg:px-24 h-full flex items-center">
                <div className="lg:flex items-center">
                    <div className="hidden lg:block">
                        <img src="/opportunities.webp" />
                    </div>
                    <div className="px-5 w-full lg:w-3/5 md:w-1/2 md:pr-10 lg:pr-0">
                        <p className="text-blue-500 font-black py-2">CRM - (Customer Relationship Management)</p>
                        <h1 className="font-bold text-4xl lg:text-5xl w-4/5 text-gray-600 leading-8">Optimiza la relación </h1>
                        <h1 className="font-semibold text-4xl lg:text-5xl w-4/5 text-gray-600 leading-8">con tus clientes</h1>
                        <p className="mt-4 text-xl lg:text-2xl leading-6 lg:leading-8">
                            Lleva el seguimiento de tus propectos, cierra oportunidades, mantente conectado con tus clientes, centraliza tu trabajo y aumenta la productividad de tu organización con nuestro CRM en la sube y adaptado a la industria inmobiliaria y de bienes raíces.
                        </p>

                    </div>
                    <div className="lg:hidden py-8">
                        <img src="/opportunities.webp" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SecondSection;