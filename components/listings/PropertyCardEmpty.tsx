const PropertyCardEmpty = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-52 bg-gray-200">
            </div>
            <div className="pt-4 pb-8">
                <div className="h-6 bg-gray-200 mx-5"></div>
                <div className="h-6 bg-gray-200 mx-5 mt-1.5 w-1/2"></div>
                <div className="w-full grid px-5 mt-2 grid-cols-3 gap-2">
                    <div className="h-4 bg-gray-200"></div>
                    <div className="h-4 bg-gray-200"></div>
                    <div className="h-4 bg-gray-200"></div>
                </div>
                <div className="w-full grid px-5 mt-2 flex gap-2">
                    <div className="h-4 bg-gray-200 w-3/6"></div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCardEmpty;