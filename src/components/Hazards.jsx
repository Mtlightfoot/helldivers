//API import
import API from '../utils/HelldiverApi';

// React imports
import React, { useEffect, useState } from "react";

function Hazards() {

    const [hazards, setHazards] = useState([]);

    const query = (query) => {
        API.search(query)
            .then(() => { setHazards({ ...hazards }) })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        API.search("space-stations")
            .then(res => { setHazards(res.data[0].planet.hazards) })
            .catch(err => { console.log(err) });
    }, [])

    return (
        hazards.map((hazard) => {
            return <div>
                <p className='hazardName'> {hazard.name}</p>
                <p className='hazardDescription'>{hazard.description}</p>
            </div>
        })
    );
}

export default Hazards;