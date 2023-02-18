import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';

const MapBase = dynamic(() => import("./MapBase"), { suspense: true })
const Map = () => {
    return (
        <Suspense fallback={
            <div className="rounded-2xl w-full h-full bg-gray-200 animate-pulse">
            </ div>}>
            <MapBase />
        </Suspense>

    )
}

export default Map