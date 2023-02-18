import { MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useState } from 'react';
import { Marker } from 'react-map-gl';
import Logo from '../../svg/Icon'
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../src/aws-exports'
Amplify.configure(awsExports);

const MapBase = () => {
    const latitude = 4.6003671;
    const longitude = -74.1099542;
    return (
        <MapView  style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
            initialViewState={{
                latitude: latitude,
                longitude: longitude,
                zoom: 14,
            }}
        >
            <Marker latitude={latitude} longitude={longitude}>
                <Logo height={30}/>
            </Marker>
        </MapView>
    )
}

export default MapBase