import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import React, { useState } from 'react'
import Head from 'next/head'

import Image, { ImageLoaderProps } from 'next/image'

import Navbar from '../../components/Layout/Navbar';
import Carousel from '../../components/ui/Carousel';
import Gallery from '../../components/ui/Gallery';

import { useRouter } from 'next/router'


import { BiBed, BiBath } from "react-icons/bi";
import { AiFillCar, AiOutlineCalendar, AiOutlineWhatsApp } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import { BsArrowUpRight, BsFillTelephoneFill } from "react-icons/bs";
import { Tab, Box, Tabs, } from '@mui/material';
import Typography from '@mui/material/Typography';

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import Input from '../../components/ui/core/Input';
import InputEmail from '../../components/ui/InputEmail';
import InputPhone from '../../components/ui/InputPhone';

import { styled } from '@mui/material/styles';

import NoSsr from '@mui/base/NoSsr';



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

type IFormInputs = {
    name: string,
    phone: number,
    email: string,
    acceptPolicy: boolean

}


const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#1890ff',
    },
});

interface StyledTabProps {
    label: string;
}
const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontWeight: 600,
        color: 'rgba(0, 0, 0, 0.85)',

        '&.Mui-selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
        },
    }),
);

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const schema = yup.object({
    name: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    acceptPolicy: yup.boolean().oneOf([true]).required()
})





// export async function getServerSideProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }


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

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        console.log(JSON.stringify(data));
    };






    return (
        <div>
            <Navbar />
            <div className="w-full h-72 lg:hidden" style={{ height: "35vh" }}>
                <Carousel
                    lightbox
                    controls
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
            <div className="py-4 lg:hidden">
                <h1 className="font-bold text-2xl px-5 leading-6">Departamento en Renta Jardines Residencial, Juárez, Chihuahua</h1>
                <h2 className="text-gray-600 text-xl px-5">$16,000 MXN</h2>
            </div>
            <div className="w-full lg:flex lg:py-12">
                <div className="w-full lg:w-8/12">
                    <div className="flex gap-2 lg:gap-4 flex-wrap px-5 leading-4 text-lg lg:px-24">
                        <div className="flex items-center gap-1"><BiBed size={25} />2 recamaras</div>
                        <div className="flex items-center gap-1"><BiBath size={25} />2 Baños</div>
                        <div className="flex items-center gap-1"><AiFillCar size={25} />2 Garajes</div>
                        <div className="flex items-center gap-1"><GiResize size={25} />55 m2</div>
                        <div className="flex items-center gap-1 underline font-bold"><AiOutlineCalendar size={25} />Agendar Visita</div>
                    </div>
                </div>
                <div className="hidden lg:block w-4/12">
                    <div className="sticky pr-24">
                        <div className="border border-gray-500 rounded-md">
                            <div className='p-5 flex'>
                                <div className="leading-5">
                                    <h3 className="font-bold ">Inmobiliaria Ejemplo</h3>
                                    <button className="flex gap-1 items-center">
                                        <BsFillTelephoneFill size={13} />
                                        <p>+52 1 33 4770 0657</p>
                                    </button>
                                    <button className="underline flex gap-1 items-center " >
                                        <p>Visitar el sitio web</p>
                                        <BsArrowUpRight size={10} />
                                    </button>
                                </div>

                                <div className="ml-auto">
                                    <div className="h-20 w-20 ml-auto rounded-md border border-gray-300 ">
                                        <Image
                                            loader={myLoader}
                                            height={200}
                                            width={200}
                                            className="object-cover rounded-md"
                                            layout="responsive"
                                            src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg" />

                                    </div>
                                </div>
                            </div>
                            <div className="flex px-5 gap-2 pb-4">
                                <button className="border-black border rounded-md w-7/12 h-12"><p>Contactar al agente</p></button>
                                <button className="bg-green-500 rounded-md text-white w-5/12 flex items-center">
                                    <div className="flex items-center m-auto ">
                                        <AiOutlineWhatsApp size={25} />
                                        <p className="p-2">WhastApp</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <NoSsr>
                            <div className="border border-gray-500 rounded-md mt-8">
                                <div className="px-5 py-2 ">
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ bgcolor: '#fff' }}>
                                            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                                                <AntTab label="Contactar un agente" />
                                                <AntTab label="Resevar una cita" />
                                            </AntTabs>
                                        </Box>
                                    </Box>
                                    <TabPanel value={value} index={0}>
                                        <form className="py-2" onSubmit={handleSubmit(onSubmit)}>
                                            <Input label="Nombre" name="name" register={register} error={errors.name} />
                                            <InputEmail label="Email" name="email" register={register} error={errors.email} />
                                            <InputPhone label="Telefono" name="phone" register={register} error={errors.phone} />
                                            <div className="flex">
                                                <input
                                                    type="checkbox"
                                                    {...register("acceptPolicy")}
                                                    className="h-8 w-8 text-blue-500 focus:ring-blue-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="acceptPolicy" className={errors.acceptPolicy ? "form-checkbox ml-2 block text-sm text-gray-900 bg-red-100 p-2 rounded-lg" : "form-checkbox ml-2 block text-sm text-gray-900 p-2"}>
                                                    <div className="text-xs"> It’s okay to send me emails about Inmobu and  you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.</div>
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

                                            <button className="bg-blue-600 text-white p-3 w-full rounded-md my-2"> Enviar</button>
                                        </form>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        Item Two
                                    </TabPanel>
                                </div>

                            </div>
                        </NoSsr>


                    </div>
                </div>

            </div>
            <div className="px-5 flex gap-2 py-4 text-lg lg:hidden">
                <button className="border-black border rounded-md w-7/12 h-12"><p>Contactar al agente</p></button>
                <button className="bg-green-500 rounded-md text-white w-5/12 flex items-center">
                    <div className="flex items-center m-auto ">
                        <AiOutlineWhatsApp size={25} />
                        <p className="p-2">WhastApp</p>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default Home


