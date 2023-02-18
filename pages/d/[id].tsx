import type { NextPage } from 'next';
import React, { useState, Suspense } from 'react'
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import Image, { ImageLoaderProps } from 'next/image'
import { useRouter } from 'next/router'

import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import Carousel from '../../components/ui/Carousel';
import Gallery from '../../components/ui/Gallery';
import ContactSideForm from '../../components/details/ContactSideForm';
import ContactSideInformation from '../../components/details/ContactSideInformation';
import FormComponent from "../../components/details/FormComponent";
import TakeTourComponent from "../../components/details/TakeTourComponent";

import { BiBed, BiBath } from "react-icons/bi";
import { AiFillCar, AiOutlineCalendar, AiOutlineWhatsApp } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import dynamic from 'next/dynamic';





const Map = dynamic(() => import("../../components/details/Map"), {ssr:false})


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            title: "Apartamento en Venta Ciudad de Mexico ",
            slug: "apartamento-en-venta-ciudad-de-mexico"
        },
    }
}

const Home: NextPage = () => {

    const router = useRouter()
    const { pid } = router.query

    const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
        return `https://thumbs.dreamstime.com/z/real-estate-logo-design-simple-172869139.jpg`
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-72 lg:hidden" style={{ height: "35vh" }}>

                <Carousel
                    lightbox
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
            <div className="py-12 hidden lg:block">
                <h1 className="font-bold text-2xl px-24 leading-6">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</h1>
                <h2 className="text-gray-600 text-xl px-24">$16,000 MXN</h2>
            </div>
            <div className="hidden lg:block w-full h-76 px-24">
                <Gallery
                    i18n={"Todas las fotos"}
                    src={["https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg",
                        "https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg",
                        "https://images.unsplash.com/photo-1558064340-601a5c6ac442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                        "https://images.unsplash.com/photo-1605229788577-c69bf0cd3714?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
                        "https://images.unsplash.com/photo-1600877685303-857fde8d40d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
                        "https://images.unsplash.com/photo-1432297984334-707d34c4163a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    ]} />
            </div>
            <div className="py-2 lg:hidden">
                <h1 className="font-bold text-2xl px-5 leading-6 pt-2">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</h1>
                <h2 className="text-gray-600 text-xl px-5">$16,000 MXN</h2>
            </div>
            <div className="w-full lg:flex lg:py-12">
                <div className="w-full lg:w-8/12">
                    <div className="flex gap-2 lg:gap-4 flex-wrap px-5 leading-4 text-lg lg:px-24">
                        <div className="flex items-center gap-1"><BiBed size={25} />2 recamaras</div>
                        <div className="flex items-center gap-1"><BiBath size={25} />2 Baños</div>
                        <div className="flex items-center gap-1"><AiFillCar size={25} />2 Garajes</div>
                        <div className="flex items-center gap-1"><GiResize size={25} />55 m2</div>
                        <button onClick={() => router.push("#takeTour")} className="flex items-center gap-1 underline font-bold"><AiOutlineCalendar size={25} />Agendar Visita</button>
                    </div>
                    <div className="px-5 flex gap-2 my-4 text-lg lg:hidden h-10">
                        
                        <button onClick={()=> router.push("#contactAgent")} className="border-black border rounded-md w-7/12 h-full"><p>Contactar al agente</p></button>
                        <button onClick={()=> router.push("https://wa.me/573195891876")} className="bg-green-500 rounded-md text-white w-5/12 flex h-full">
                            <div className="flex items-center m-auto">
                                <AiOutlineWhatsApp className='m-auto' size={22} />
                                <p className="p-2 m-auto">WhastApp</p>
                            </div>
                        </button>
                    </div>
                    <div className="ml-5 flex text-lg overflow-x-auto lg:py-6 lg:pl-20">
                        <button onClick={() => router.push("#map")} className="text-blue-600 font-bold border-b-2 border-blue-600 pb-3 pr-4 lg:pr-6">Mapa</button>
                        <button onClick={() => router.push("#description")} className="border-b border-gray-400 pb-3 pr-4 lg:pr-6">Descripción</button >
                        <button onClick={() => router.push("#fact&Features")} className="border-b border-gray-400 pb-3 pr-4 lg:pr-6">Carácteristicas</button >
                        <button onClick={() => router.push("#contactAgent")} className="border-b border-gray-400 pb-3 pr-4 lg:pr-6">Contactar</button >

                    </div>
                    <div id="map" className="lg:px-20 lg:ml-5 px-5 py-4  w-full h-72 lg:h-96 rounded-lg">
                            <Map />
                    </div>
                    <div id="takeTour" className="ml-5 lg:hidden py-4">
                        <h3 className="font-bold text-lg">Programa una visita</h3>
                        <a className="pr-5">Connect with a local buyer’s agent who advertises with Zillow.</a>
                        <TakeTourComponent />
                    </div>
                    <div id="description" className="lg:px-20 lg:ml-5 px-5 ">
                        <h3 className="font-bold text-lg">Descripción</h3>
                        <p className="text-lg leading-5 py-3">Departamentos en ¡¡¡Venta y Renta!!! de ocupación inmediata a un minuto del Centro Comercial Santa Fe con acceso directo a Santa Fe. 372 departamentos de 1,2,3 recámaras con terrazas privadas. Rango mas elevado de cajones de estacionamiento de la zona. 13 amenidades que potencializan tu estilo de vida.Las mejores vistas a Santa Fe y Vistahermosa. Concepto "sharing".</p>
                    </div>
                    <div id="fact&Features" className="lg:px-20 lg:ml-4 px-5 py-4">
                        <h3 className="font-bold text-lg">Carácteristicas</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 " >
                            <div className="py-3 px-2">
                                <h3 className="font-bold text-lg py-1.5">Title Explain</h3>
                                <div className="text-lg leading-5 grid grid-cols-1 ">
                                    <ul className="list-disc grid grid-cols-1 px-5 gap-3">
                                        <li>Tipo de Propiedad</li>
                                        <li>Tipo de Propiedad</li>
                                        <li>Tipo de Propiedad</li>
                                        <li>Tipo de Propiedad</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 px-2">
                                <h3 className="font-bold text-lg py-1.5">Title Explain</h3>
                                <div className="text-lg leading-5 grid grid-cols-1">
                                    <ul className="list-disc grid grid-cols-1 px-5 gap-3">
                                        <li>Tipo de Propiedad</li>
                                        <li>Tipo de Propiedad</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contactAgent" className="lg:px-20 px-5 lg:hidden py-10 border border-gray-300">
                        <ContactSideInformation />
                    </div>
                    <div className="lg:px-20 px-5 lg:hidden py-10 border border-gray-300">
                        <h3 className="font-bold text-lg">Contactar al vendedor</h3>
                        <a>Connect with a local buyer’s agent who advertises with Zillow.</a>
                        <FormComponent />
                    </div>


                </div>
                <div className="hidden lg:block w-4/12 h-full relative">
                    <div className="sticky pr-24">
                        <ContactSideInformation />
                        {/* <ContactSideForm /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home


