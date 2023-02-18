import type { NextPage, GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../../svg/LogoInmobu';
import dynamic from 'next/dynamic';



const PIN = dynamic(()=> import('../../components/getStarted/PIN'), { ssr: false} )

interface ConfirmeemailProps {
    locale: string,
    providers: any,
    csrfToken: string
}

const Confirmeemail: NextPage<ConfirmeemailProps> = ({ csrfToken }) => {


    const [email, setEmail] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<number>(0);
    const [errorCodeValid, setErrorCodeValid] = useState<boolean>(false);


    return (
        <>
            <div className="h-screen w-screen py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 mx-auto">
                    <div>
                        <div className="w-full flex items-center">
                            <div className="w-full"><div className="mx-auto w-max"><Logo height={50} /></div></div>
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">Ingresa el código de verificación</h2>
                        <p className="ext-sm text-gray-600">
                            <a href="#" className="font-medium">
                                Recibiste un número de 4 digitos a tu dirección de correo electrónico si no lo has recibido revisa la bandeja de correos no desados (spam)
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="">
                          <PIN/>
                        </div>
                        {
                            errorCodeValid &&
                            <div className="flex items-center bg-red-100 py-3 px-2 rounded" role="alert">
                                <div>
                                    <div className="bg-red-600 rounded-full h-4 w-4 flex items-center mx-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512.001 512.001"
                                            className="h-2 text-white m-auto"
                                            fill="currentColor"
                                        >
                                            <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-red-600 text-sm">
                                    La cuenta de correo electrónico <a className="font-bold">L</a> se encuentra registrada
                                </div>
                            </div>
                        }
                        <div className="space-y-2">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-600 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Continuar
                            </button>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Reenviar código
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Confirmeemail
