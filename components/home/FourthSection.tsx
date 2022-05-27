const FourthSection = () => {
    return (
        <div className="w-full h-auto bg-green-100">
            <section className="lg:pt-20 lg:px-24 h-full flex items-center py-12">

                <div className="block lg:flex items-center">
                    <div className="hidden lg:block" >
                        <img src="/mls.webp" />
                    </div>
                    <div className="px-5 w-full lg:w-4/6 md:pr-10 lg:pr-0">
                        <p className="text-green-500 font-black py-2">MLS - (Multiple Listing Service)</p>

                        <h1 className="font-bold text-4xl lg:text-5xl text-gray-600 leading-8">Conectate con la comunidad de la industria inmobiliaria y de bienes raíces</h1>
                        <p className="mt-4 text-xl lg:text-2xl leading-6 lg:leading-8">
                            Trabaje en colaboración con corredores, agencias y agentes inmobiliarios a través de <a className="font-bold cursive">Inmobu MLS</a>,una base de datos y estandar de datos abiertos para compatir información de los listados de propiedades y bienes raíces con el objetivo de facilitar la comercialización de las propiedades, aumentar la red de ventas y coordinar el reparto de comisiones entre agentes y/o agencias vendedoras.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FourthSection;