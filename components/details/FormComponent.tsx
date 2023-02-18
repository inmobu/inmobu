import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import Input from '../../components/ui/core/Input';
import InputEmail from '../../components/ui/InputEmail';
import InputPhone from '../../components/ui/InputPhone';



type IFormInputs = {
    name: string,
    phone: number,
    email: string,
    acceptPolicy: boolean

}

const schema = yup.object({
    name: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    acceptPolicy: yup.boolean().oneOf([true]).required()
})

const FormComponent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        console.log(JSON.stringify(data));
    };

    return (
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
    )
}

export default FormComponent;