import React from "react"
import Input, {IInput } from "./core/Input"

const InputPhone = (props:IInput) => (
    <Input
        {...props}
        type="number"
    />
)

export default InputPhone