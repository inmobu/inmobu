import React from "react"
import Input, {IInput } from "./core/Input"

const InputEmail = (props: IInput) => (
    <Input
        {...props}
        type="email"
    />
)

export default InputEmail