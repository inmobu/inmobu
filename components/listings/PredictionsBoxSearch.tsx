import PredictionSearch from './PredictionSearch'

const PredictionsBoxSearch = () => {
    return (
        <div
            className="absolute top-0  left-0 mt-8 bg-white whitespace-normal z-20 rounded-md shadow-2xl grid grid-cols-1 gap-2 p-4 w-80 divide-gray-300 divide-y">
                <PredictionSearch/>
                <PredictionSearch/>
                <PredictionSearch/>
                <PredictionSearch/>
        </div>
    )
}

export default PredictionsBoxSearch;