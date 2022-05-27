import React from "react";
import { FieldError } from "react-hook-form";

export interface IInput {
    name: string,
    label?: string,
    register: any,
    error?: FieldError,
    type?: "date" | "email" | "time" | "submit" | "password" | "tel" | "number",
    placeholder?:string,
    requiredField?: boolean,
    value?:any,
}


const Input = ({ register, label, requiredField, error, type, name, placeholder }: IInput) => (
    <div>
        {label ?
            <div className="py-2">
                <label htmlFor={name} className={`font-bold text-sm ${error && "text-red-500"}`}>{label}</label>
                {requiredField && <p className="text-red-500 pl-1">*</p>}
            </div>
            :
            <div className="pb-4"></div>
        }
        <div className="relative">
            <div>
                <input
                    name
                    type={type}
                    {...register(name)}
                    placeholder={placeholder}
                    className={`h-10 px-3 appearance-none border border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base flex-1 outline-none ${error ? "ring-red-400 ring-2" : "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"}`}
                />
            </div>
            <div className="px-3 absolute top-0 right-0 my-auto h-full flex items-center">
                {
                    error && type !== "date" && type !== "time" &&
                    <svg
                        className="h-6 w-6 text-red-500 p-1"

                        fill="currentColor"
                        viewBox="0 0 1792 1792">
                        <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z">
                        </path>
                    </svg>
                }
            </div>
        </div>
        <div>
            {
                error &&
                <p className="text-sm text-red-500 py-1">
                    {error.message}
                </p>
            }
        </div>
    </div>
)

export default Input