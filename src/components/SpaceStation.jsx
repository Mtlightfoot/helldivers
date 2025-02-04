// Bootstrap imports
import Card from 'react-bootstrap/Card';

//API import
import API from '../utils/HelldiverApi';

// React imports
import React, { useEffect, useState } from "react";

import Hazards from './Hazards'

function SpaceStation() {

    const [searchResult, setSearchResult] = useState("");

    const query = (query) => {
        API.search(query)
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }

    // useEffect(() => {
    //     console.log(searchResult.results);
    // }, [searchResult]);

    useEffect(() => {
        API.search("space-stations")
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }, [])

    return (
        <Card className='spaceStation'>
            <Card.Header className='spaceStationHeader'>Space Station</Card.Header>
            {searchResult.results ? (
                <Card.Body>

                    <div className='majorOrderRewardCard'>
                        <h1 className='currentLocationTitle'>
                            Current Location:
                        </h1>

                        <p className='currentLocationText'>{searchResult.results[0].planet.name}</p>
                    </div>

                    <div className='hazardBox'>
                        <h1 className='hazardTitle'>
                            Hazards:
                        </h1>

                        <Hazards />

                        {/* <p className='hazardText'>{searchResult.results[0].planet.hazards[0].name}</p>
                        <p className='hazardText'>{searchResult.results[0].planet.hazards[0].description}</p>

                        <p className='hazardText'>{searchResult.results[0].planet.hazards[1].name}</p>
                        <p className='hazardText'>{searchResult.results[0].planet.hazards[1].description}</p> */}

                    </div>

                </Card.Body>
            ) : (<h1 className='orderOverviewTitle'>Loading Space Station...</h1>)
            }

        </Card>
    );
}

export default SpaceStation;