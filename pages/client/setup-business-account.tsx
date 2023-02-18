import type { NextPage, GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../svg/LogoInmobu';



interface BusinessAccountProps {
    locale: string,
    providers: any,
    csrfToken: string
}
type Inputs = {
    name: string,
};

const schema = yup.object({
    name: yup.string().required()
})

const BusinessAccount: NextPage<BusinessAccountProps> = ({ locale,csrfToken }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const router = useRouter();





    
    const onSubmit: SubmitHandler<Inputs> = async ({ name }) => {

    };

    return (
        <>
            <div className="h-screen w-screen py-6 px-4 sm:px-6 lg:px-8 flex">
                <div className="w-full space-y-8 mx-auto max-w-screen-md">
                    <div>
                        <div className="w-full flex items-center">
                            <div className="w-full"><div className="mx-auto w-max"><Logo height={50} /></div></div>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-600 text-left lg:w-4/5 leading-8">¿Como se llama su empresa, equipo o proyecto?</h2>
                                <div className="text-gray-800 leading-5 pt-4">
                                    Inmobu representa una nueva manera de optimizar tus equipos de ventas inmobiliarias de manera más organizada y lo mejor gratis
                                </div>
                            </div>



                            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
                                <div className="">
                                    <input
                                        id="email-address"
                                        type="text"
                                        {...register("name")}
                                        required
                                        className="lg:w-3/5 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Empresa S.A, Marketing 123, Proyecto ejemplo"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        </span>
                                        Siguiente →
                                    </button>
                                    <button
                                        type="submit"
                                        className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        </span>
                                        Omitir este paso
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}




export default BusinessAccount
