import type { NextPage, GetServerSideProps } from 'next'
import { useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../svg/LogoInmobu';


// import Logo from '../../svg/Logo';
// import useJwtVerify from  '../../hooks/query/useJwtVerify';
// import { useSession, getCsrfToken, getSession } from "next-auth/client";
// import useBussinessAccountUsers from '../../hooks/mutation/useBusinessAccountUsers';
// import { useIsFetching } from 'react-query';
// import BackgroundFetchingIndicator from '../../componets/global/BackgroundFetchingIndicator';



interface LandingProps {
    locale: string,
    providers: any,
    csrfToken: string
}
type Inputs = {
    acceptPolicy: boolean,
};

const schema = yup.object({
    acceptPolicy: yup.boolean().oneOf([true]).required()
})


const Landing: NextPage<LandingProps> = ({ locale, csrfToken}) => {
    const router = useRouter();

    const [loading, setLoading] = useState<number>(0);

    const { invite } = router.query
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });




    const onSubmit: SubmitHandler<Inputs> = async () => {
      
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
                    <div className="lg:flex lg:gap-10">
                        <div className="space-y-8">
                            <div>
                                <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-600 text-left lg:w-4/5 leading-8">Bienvenido a inmobu</h2>
                                <div className="pt-4 text-gray-600">
                                    <div className="text-gray-800 leading-5">
                                        Inmobu representa una nueva manera de optimizar tus equipos de ventas inmobiliarias de manera más organizada y lo mejor gratis
                                    </div>
                                </div>
                            </div>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
                                <div>
                                    <button
                                        type="submit"
                                        className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        </span>
                                        Crea una cuenta →
                                    </button>
                                </div>
                            </form>
                            <div className={errors.acceptPolicy ? "form-checkbox ml-2 block text-sm text-gray-900 bg-red-100 p-2 rounded-lg" : "form-checkbox ml-2 block text-sm text-gray-900 p-2"}>
                                <div className="flex">
                                    <input
                                        id="acceptPolicy"
                                        {...register("acceptPolicy")}
                                        type="checkbox"
                                        className="form-checkbox h-6 w-6 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Estoy de acuerdo con las <a className="text-blue-600 hover:underline">Condiciones de servicio al cliente, la Política de privacidad y la Política de cookies. </a> 
                                    </label>
                                </div>
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
                            </div>
                       

                        </div>
                        <div className="hidden lg:flex items-center">
                            <Image
                                className="object-cover"
                                src="/images/7566.jpg"
                                alt="Picture of the author"
                                width={700}
                                height={500}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

// export const getServerSideProps: GetServerSideProps = async ({ req, locale, resolvedUrl }) => {
//     const NEXT_LOCALE: string = req.cookies["NEXT_LOCALE"]
//     const i18nConf = await serverSideTranslations(locale!)
//     const csrfToken = await getCsrfToken({ req })
//     const session = await getSession({ req })
//     if(!session){
//         return {
//             redirect: {
//                 destination:`/${NEXT_LOCALE || locale}/401`,
//                 permanent: false
//             }
//         }
//     }
//         if (NEXT_LOCALE !== locale && NEXT_LOCALE) {
//         return {
//             redirect: {
//                 destination: `/${NEXT_LOCALE || locale}/${resolvedUrl}`,
//                 permanent: false
//             }
//         }
//     }
//     return {
//         props: {
//             locale,
//             csrfToken,
//             ...i18nConf,
//         },
//     }
// }

export default Landing
