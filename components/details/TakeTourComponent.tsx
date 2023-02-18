import Select from 'react-select';
import { add, Day } from 'date-fns';


const options = [
    { value: 'chocolate', label: '06:00 am' },
    { value: 'strawberry', label: '06:30 am' },
    { value: 'vanilla', label: '07:00 am' },
    { value: 'chocolate', label: '03:00 pm' },
    { value: 'strawberry', label: '03:30 pm' },
    { value: 'vanilla', label: '04:00 pm' },
    { value: 'chocolate', label: '03:00 pm' },
    { value: 'strawberry', label: '03:30 pm' },
    { value: 'vanilla', label: '04:00 pm' }
]

const weekDays = ['DOM',"LUN","MAR","MIE","JUE","VIE","SAB"]
const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']



const TakeTourComponent = () => {
    const t: Date = add(new Date(Date.now()),{ days: 1})
    const week: Array<Date> = Array.from({ length: 10 }, (v, k) => {
        return add(t, { days: k })
    })

  
    return (
        <div>
            <div className="py-2">
                <h4 className="font-bold">Tipo de visita</h4>
                <div className="flex gap-2 pr-5 py-2">
                    <button className="w-1/2 p-1.5 border border-gray-600 rounded-md">Presencial</button>
                    <button className="w-1/2 p-1.5 border border-gray-600 rounded-md">Videollamada</button>
                </div>
            </div>
            <div>
                <h4 className="font-bold">Selecciona una fecha</h4>
                <div className="w-full h-28 flex gap-1.5 overflow-x-auto my-3 py-2">
                    {
                        week.map((v, i) => {
                            return (
                                <button key={i} className="border border-gray-600 rounded-md w-20 h-full flex items-center">
                                    <div className="text-center w-20">
                                        <p className="text-sm">{weekDays[v.getDay()]}</p>
                                        <p className="w-full font-bold text-2xl capitalize no-wrap whitespace-nowrap overflow-hidden px-1">{v.getDate()}</p>
                                        <p className="w-full text-sm capitalize text-ellipsis no-wrap whitespace-nowrap overflow-hidden px-1">{months[v.getMonth()-1]}</p>
                                    </div>
                                </button>
                            )
                        })
                    }


                </div>
            </div>

            <div className="pr-5">
                <Select value={options[0]} options={options} />
            </div>
            <div className="pr-5 py-4 w-full">
                <button className="bg-blue-600 text-white p-3 w-full rounded-md my-2">Solicitar Visita</button>
            </div>
        </div>

    )
}

export default TakeTourComponent