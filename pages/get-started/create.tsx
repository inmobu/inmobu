import type { NextPage, GetServerSideProps } from 'next';
import React, { useState } from 'react'
import { useRouter } from 'next/router';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../svg/LogoInmobu';
import { getCsrfToken, getSession } from 'next-auth/react';
// import { getCookie, setCookies } from 'cookies-next';
// import BackgroundFetchingIndicator from '../../componets/global/BackgroundFetchingIndicator';


// import useEmailExist from '../../hooks/mutation/useEmailExist';
// import useTwilioSendEmail from '../../hooks/mutation/useTwilioSendEmail';
// import useJwtSign from '../../hooks/query/useJwtSign';
// import useJwtVerify from '../../hooks/query/useJwtVerify';

// import { useIsFetching } from 'react-query';





interface CreateProps {
    locale: string,
    providers: any,
    csrfToken: string
}
type Inputs = {
    name: string,
    email: string,
    acceptPolicy: boolean
};
const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    /* acceptPolicy: yup.boolean().oneOf([true]).required()&AA&A */
})



const Create: NextPage<CreateProps> = ({ locale, csrfToken }) => {
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ({ name, email }) => {
       
    };

    const t = (s : string) => {
        return s
    }


    return (
        <>
            
            <div className="h-screen w-screen py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 mx-auto">
                    <div>
                        <div className="w-full flex items-center">
                            <div className="w-full"><div className="mx-auto w-max"><Logo height={50} /></div></div>
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-blue-600">{t("join_community_on")}</h2>
                        <div className="pt-4 text-gray-600">
                            <div className="text-gray-800 leading-5 lg:w-4/5">
                                {t("join_community_description")}
                            </div>
                        </div>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
                        <div>
                            <label htmlFor="email-address" className="py">
                                {t("name")}
                            </label>
                            <input
                                type="text"
                                {...register("name")}
                                required
                                className={errors.name ? "mt-4 appearance-none relative block w-full px-3 py-2 border-2 border-red-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" : "mt-4 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
                                placeholder={t("name_placeholder")}
                            />
                            {
                                errors.name &&
                                <div className="text-red-500 text-sm">{t("field_required")}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="email-address" className="">
                                {t("email")}
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                required
                                className={errors.email ? "mt-4 appearance-none relative block w-full px-3 py-2 border-2 border-red-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" : "mt-4 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
                                placeholder={t("email_placeholder")}
                            />
                            {
                                errors.email &&
                                <div className="text-red-500 text-sm">{t("field_required")}</div>
                            }

                        </div>
                        <div className="flex">
                            <input
                                type="checkbox"
                                {...register("acceptPolicy")}
                                className="h-8 w-8 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="acceptPolicy" className={errors.acceptPolicy ? "form-checkbox ml-2 block text-sm text-gray-900 bg-red-100 p-2 rounded-lg" : "form-checkbox ml-2 block text-sm text-gray-900 p-2"}>
                                <div> It’s okay to send me emails about Inmobu and  you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.</div>
                                {
                                    errors.acceptPolicy &&
                                    <div className="flex items-center py-2 gap-2" role="alert">
                                        <div>
                                            <div className="bg-red-600 rounded-full h-4 w-4 flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.001 512.001"
                                                    className="h-2 w-2 text-white m-auto"
                                                    fill="currentColor"
                                                >
                                                    <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-red-600 text-sm">
                                            {errors.acceptPolicy?.message}
                                        </div>
                                    </div>
                                }

                            </label>
                        </div>

                   
                        <div>

                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                {t("next")}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>

    )
}



export default Create
