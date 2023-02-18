import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { useForm, SubmitHandler } from "react-hook-form";
import Input from '../../../../components/ui/core/Input'
import Select from '../../../../components/ui/core/Select'

import Loading from '../../../../components/app/Loading';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';




const Board = dynamic(() => import("../../../../components/app/Board"), { suspense: true })
const Navbar = dynamic(() => import("../../../../components/app/Navbar"), { ssr: false })

const Map = dynamic(() => import("../../../../components/listings/Map"), { ssr: false })

const schema = yup.object({
    address: yup.string().required(),
    city: yup.string().required()

})

type Inputs = {
    address: string,
    city: string,
    neighborhood: string,
    unit: string,
};

const PropertyLocation = () => {

    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ({ address, city }) => {
        console.log(address, city)

    };

    const options = [
        { value: "bogota", label: "Bogotá" },
        { value: "medellin", label: "Medellín" }
    ]

    const options_t = [
        { value: "bogota", label: "Apartamento" },
        { value: "medellin", label: "Oficina" }
    ]

    return (

        <Board>
            <>
                <Navbar />

                <div className="px-8 pt-4 w-full">
                    <div className="border-b border-gray-300 pb-2">
                        <h1 className="font-bold text-2xl">Apartamento en Venta Santa Matilde, Bogotá</h1>
                        <p>Carrera 32 B 9A 6 SUR APT 501 - Remanso, Bogotá</p>
                    </div>
                    <p className="py-3">¿Es la ubicación exacta del inmueble ?</p>
                    <div className="w-full py-4" style={{ height: "60vh" }}>
                        <Map />
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" className="px-2 py-2 bg-blue-600 text-white rounded-md w-32">Si, es correcta</button>
                        <button type="submit" className="px-2 py-2 border border-blue-600 text-blue-600 rounded-md w-auto">No, deseo cambiarla</button>
                    </div>

                </div>
            </>
        </Board>

    )
}

export default PropertyLocation;