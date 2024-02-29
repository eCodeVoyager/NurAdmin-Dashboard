import { VectorMap } from '@react-jvectormap/core'
import { usAea } from '@react-jvectormap/unitedstates'
import './MapOne.css'
import React from 'react'

const MapOne = () => {
    const labelRender = (code) => {
        return code.split('-')[1]; // Custom rendering of the country label
    };
    return (
        <div>
            <h4 className="mb-2 text-xl font-bold text-black">
                Region labels
            </h4>
            <div className="w-full h-[200px] md:h-[420px]">
                <VectorMap
                    map={usAea}
                    backgroundColor='#fff'
                    regionStyle={{
                        initial: {
                            fill: '#d9d9d9',
                            "fill-opacity": 1,
                            stroke: 'none',
                            "stroke-width": 0,
                            "stroke-opacity": 1
                        },
                        hover: {
                            fill: '#3056D3',
                            "fill-opacity": 0.8
                        }
                    }}
                    labels={{
                        regions: {
                            render: labelRender // Custom rendering of the country label
                        }
                    }}
                    controls={{
                        zoomIn: true, // Show zoom-in button
                        zoomOut: true, // Show zoom-out button
                        zoomMax: 8, // Maximum zoom level
                        zoomMin: 1, // Minimum zoom level
                        pan: true // Show panning control
                    }}

                />
            </div>
        </div>
    )
}

export default MapOne
