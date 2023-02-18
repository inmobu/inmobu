import Select from 'react-select';

const ResultTitle = () => {
    const option = [
        { value: 'chocolate', label: 'PRECIO' },
        { value: 'strawberry', label: 'AZ' },
        { value: 'vanilla', label: 'ZA' }
    ]

    const customStyles = {
        container: () => ({
            zIndex: "20",

        }),
        option: (provided: any, state: { isSelected: any; }) => ({
            ...provided,
            padding: "0.5rem 0.5rem",
            color: "rgb(17 24 39)",
            fontSize: "0.75rem"
        }),
        control: () => ({
            height: "2rem",
            alignItems: "center",
            borderWidth: '1px',
            display: 'flex',
            borderColor: "rgb(156 163 175)",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",

        }),
        singleValue: (provided: any, state: { isDisabled: any; }) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }
    return (
        <div className='mx-8 py-2 pb-1.5 flex gap-1'>
            <div className="py-1">
                <div className="text-xl">Resultados en <span className="font-bold">Bogota</span></div>
                <div className="text-gray-600 font-light text-sm">256 Resultados </div>
            </div>
            <div className="ml-auto flex gap-1.5 items-center">
                <div className="w-38 flex items-center gap-2">
                    <span className="text-xs text-gray-400">ORDENAR POR</span>
                    <Select className="min-w-fit text-sm relative" placeholder={"Tipo Negocio"} styles={customStyles} options={option} />
                </div>
            </div>
        </div>
    )
}

export default ResultTitle;