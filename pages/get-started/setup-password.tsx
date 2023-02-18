import type { NextPage, GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../svg/LogoInmobu';





interface ConfirmeemailProps {
    locale: string,
    providers: any,
    csrfToken: string
}
type Inputs = {
    password: string,
};

const SetupPaswword: NextPage<ConfirmeemailProps> = ({ locale, csrfToken }) => {
    const router = useRouter();
    const { token } = router.query;
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [password, setPassword] = useState<string | undefined>();
    const [loading, setLoading] = useState<number>(0);
    const schemaPassword = yup.object({
        password: yup.string().oneOf([password]).required()
    })
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: yupResolver(schemaPassword)
    });

    const ramdom = Math.floor(Math.random() * (15))
   

    const color = [
        "bg-gray-800",
        "bg-red-800",
        "bg-yellow-600",
        "bg-green-500",
        "bg-green-900",
        "bg-blue-700",
        "bg-blue-800",
        "bg-indigo-600",
        "bg-indigo-700",
        "bg-indigo-800",
        "bg-purple-500",
        "bg-purple-900",
        "bg-pink-500",
        "bg-pink-700",
        "bg-pink-800",
    ]


    const onSubmit: SubmitHandler<Inputs> = async ({ password }) => {

        // const { jwt } = await  addJwtJoin.mutateAsync({
        //     businessAccountID: payload?.businessAccountID,
        //     csrfToken
        // })

        reset()
    };
 

    return (
        <>
            <div className="h-screen w-screen py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 mx-auto">
                    <div>
                        <div className="w-full flex items-center">
                            <div className="w-full"><div className="mx-auto w-max"><Logo height={50} /></div></div>
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-blue-600">Crea una contraseña</h2>
                        <div className="pt-4 text-gray-600">
                            <div className="text-gray-800 leading-5 lg:w-4/5">
                                Para aprovechar Inmobu al máximo, añade a tus compañeros y compañeras de trabajo con los que suelas hablar más.
                            </div>
                        </div>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <input
                                        id="email-address"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="password"
                                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                            setPassword(e.currentTarget.value)
                                        }}
                                        required
                                        className="text-base appearance-none relative block w-full px-3 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                    />
                                    <button
                                        onClick={() => { setShowPassword(showPassword ? false : true) }}
                                        className="absolute top-0 right-0 h-10 flex items-center px-3 z-10">
                                        {/* <VisiblePassowrd height={18} className={showPassword ? "text-blue-600" : "text-gray-400 hover:text-gray-600"} /> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="py-2">
                                    Confirmar contraseña
                                </label>
                                <input
                                    id="email-address"
                                    type="password"
                                    autoComplete="email"
                                    {...register("password", { maxLength: 6 })}
                                    required
                                    className="text-base appearance-none relative block w-full px-3 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"

                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>

    )
}



export default SetupPaswword
