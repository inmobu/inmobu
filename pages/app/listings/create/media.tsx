import dynamic from 'next/dynamic';
import React, { useState, Suspense, useEffect } from 'react';

import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv5 } from 'uuid';

import * as yup from "yup";


import { BiPhotoAlbum } from "react-icons/bi";

import Amplify, { Storage } from 'aws-amplify';
import awsExports from '../../../../src/aws-exports';
import axios from 'axios';

import { BiHide } from "react-icons/bi";



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

interface pInterface {
    src: File,
    index: number,
    id: string,
    control: string
    // file:File
}

interface SS {
    id: string,
    file: File,
    fileExtension?: string,
    type?: string
}
const putAWSS3 = async ({ id, file, fileExtension, type }: SS) => {
    Amplify.configure(awsExports);
    Amplify.configure({
        Storage: {
            AWSS3: {
                bucket: 'ts-ex', //REQUIRED -  Amazon S3 bucket name
                region: 'us-east-1', //OPTIONAL -  Amazon service region
            }
        }
    });

    const format = []
    Storage.put(id + ".jpg", file, {
        contentType: type
    })
}

const URLCloudFront = "https://dcywqbnohc0ln.cloudfront.net/public/"

const Media = () => {

    const [p, setP] = useState<Array<pInterface>>([])


    const onChange = (e: React.FormEvent<HTMLInputElement>) => {


        const files: FileList | null = e.currentTarget?.files


        Object.values(files || {}).map(async (v, i) => {


            const id = uuidv5()

            await putAWSS3({ id, file: v, type: v.type, fileExtension: ".jpg" })
            const { data } = await axios({
                url: `http://localhost:3000/api/imageRealStateControl?img=${URLCloudFront + id}.jpg`,
                method: "GET"
            })
            console.log(data.predictions.class)
            setP(current => [...current, { src: v, index: i, id, control:data.predictions.class}])

        })


        //   

    }


    return (

        <Board>
            <>
                <Navbar />

                <div className="px-8 pt-4 w-full">
                    <div className="border-b border-gray-300 pb-2">
                        <h1 className="font-bold text-2xl">Apartamento en Venta Santa Matilde, Bogotá</h1>
                        <p>Carrera 32 B 9A 6 SUR APT 501 - Remanso, Bogotá</p>
                    </div>
                    <div className="w-full grid grid-cols-4 grid-2 gap-2">
                        {p?.map((v, i) => {

                            return <div className="w-full h-52 relative overflow-hidden">
                                {
                                    v.control !== "real_state" ? <>
                                        <div className="w-full h-full absolute bg-black z-10 opacity-50 flex items-center">
                                        </div>
                                        <div className="w-full h-full absolute z-10  flex items-center">
                                            <div className="text-white m-auto">
                                                <div><BiHide className="m-auto" size={"2rem"} />
                                                    <div className="text-sm text-center font-black">Contenido bloqueado</div>
                                                    <div className="text-xs px-3 text-center">Esta foto podria mostar contenido que no cumple con nuestras politicas, términos y condiciones</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={URL.createObjectURL(v.src)} className="h-full w-full  object-cover blur-lg" />
                                    </>
                                        : <img src={URL.createObjectURL(v.src)} className="h-full w-full object-cover" />
                                }

                            </div>
                        })}
                    </div>
                    <div className="w-full my-4 border-gray-400 border rounded-md border-dashed flex items-center" style={{ height: "60vh" }}>
                        <button className="m-auto grid gap-1.5">
                            <BiPhotoAlbum className="text-gray-200 mx-auto" size={"5rem"} />
                            <span>Arrastra y suelta fotos aquí para cargar</span>
                            <div className="p-2 bg-blue-600 rounded-md text-white">Añadir fotografias</div>
                            <input type="file" name="file" multiple onChange={onChange} />
                        </button>
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

export default Media;