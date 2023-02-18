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

const Dashboard = () => {

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

    const options_d = [
        { value: "a", label: "Apartamento" },
        { value: "bogota", label: "Casa" },
        { value: "Oficina", label: "Casa" },
        { value: "medellin", label: "Oficina" },
        { value: "x", label: "Lote" }
    ]

    return (

        <Board>
            <>
                <Navbar />

                <div className="px-8 pt-4 w-4/6">
                    <h1>Nueva Propiedad</h1>
                    <div className="flex gap-3 py-3">
                        <div className="flex gap-1.5 items-center">
                            <input type="checkbox" />
                            <label>Venta</label>
                        </div>
                        <div className="flex gap-1.5 items-center">
                            <input type="checkbox" />
                            <label>Arriendo</label>
                        </div>
                        <div className="flex gap-1.5 items-center">
                            <input type="checkbox" />
                            <label>Proyecto Nuevo</label>
                        </div>
                    </div>
                    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-2">
                            <Select requiredField control={control} label="Tipo de Propiedad" name="city" options={options_d} error={errors.city} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Select requiredField control={control} label="Ciudad" name="city" options={options} error={errors.city} />
                            <Input register={register} label="Barrio" name="address" error={errors.address} readonly />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Input register={register} label="Dirección" name="neighborhood" error={errors.neighborhood} readonly value={"Ciudad Montes"} />
                            <div className="grid grid-cols-2 gap-2">
                                <Select requiredField control={control} label="Unidad" name="city" options={options_t} error={errors.city} />
                                <Input className="mt-auto" register={register} label="" name="neighborhood" error={errors.neighborhood} readonly />

                            </div>
                        </div>

                        <button type="submit" className="px-2 py-2 bg-blue-600 text-white rounded-md w-32">Siguiente</button>
                    </form>
                </div>
            </>
        </Board>

    )
}

export default Dashboard;