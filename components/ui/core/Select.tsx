import React, { useState } from "react"
import { FieldError, Controller } from "react-hook-form";
import SelectComponent from 'react-select';


interface optT {
    value: string,
    label: string
}


interface SelectProps {
    name: string,
    label?: string,
    options: Array<optT>,
    error?: FieldError,
    placeholder?: string,
    requiredField?: boolean,
    value?: any,
    control: any
}



const Select = ({ name, label, options, error, requiredField, control }: SelectProps) => {

    const customStyles = {
        option: (provided: any, state: { isSelected: any; }) => ({
            ...provided,
            padding: 10,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            display: "flex",
            width: "100",
        }),
        singleValue: (provided: any, state: { isDisabled: any; }) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }
    return (
        <>
            <div>
                {label ?
                    <div className="py-2 flex">
                        <label htmlFor={name} className={`font-bold text-sm ${error && "text-red-500"}`}>{label} {requiredField && <span className="text-red-500 pl-1">*</span>}</label>
                    </div>
                    :
                    <div className="pb-4"></div>
                }
                <div className="relative">
                    <div className={`h-10 appearance-none border border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base flex-1 outline-none ${error ? "ring-red-400 ring-2" : "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"}`}>
                        <Controller
                            control={control}
                            name={name}
                            render={({ field: { onChange, onBlur, ref } }) => (

                                <SelectComponent
                                    isSearchable={true}
                                    styles={customStyles}
                                    options={options}
                                    ref={ref}
                                    onChange={(v) => onChange(v?.value)}
                                    onBlur={onBlur}

                                />
                            )}
                        />
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
        </>
    )
}

export default Select;