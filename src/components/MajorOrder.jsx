// Bootstrap imports
import Card from 'react-bootstrap/Card';

//API import
import API from '../utils/HelldiverApi';

// React imports
import React, { useEffect, useState } from "react";
import MajorOrderExpiration from './MajorOrderExpiration';

function MajorOrder() {

    const [searchResult, setSearchResult] = useState("");

    // const [expiration, setExpiration] = useState("");

    const query = (query) => {
        API.search(query)
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        console.log(searchResult.results);
    }, [searchResult]);

    useEffect(() => {
        API.search("assignments")
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }, [])

    return (
        <>
            {searchResult.results ? (

                <div className='majorOrderEndBox'>
                    <p className='majorOrderEndTag'>Major Order ends on:</p>
                    <MajorOrderExpiration />
                </div>
            ) : ('')
            }

            <Card className='majorOrder'>
                <Card.Header className='majorOrderHeader'>MAJOR ORDER</Card.Header>
                {searchResult.results ? (
                    <Card.Body>
                        <Card.Text className='majorOrderText'>
                            {searchResult.results[0].briefing}
                        </Card.Text>

                        {/* <h1 className='orderOverviewTitle'>
                        ORDER OVERVIEW
                    </h1>
                    <p className='orderOverviewText'>
                        {searchResult.results[0].description}
                    </p> */}

                        {searchResult.results[0].description ? (
                            <>
                                <h1 className='orderOverviewTitle'>
                                    ORDER OVERVIEW
                                </h1>
                                <p className='orderOverviewText'>
                                    {searchResult.results[0].description}
                                </p>
                                <p className='orderOverviewTitle'>
                                    VARYLIA 5
                                </p>
                            </>
                        ) : ('')}



                        <div className='majorOrderRewardCard'>
                            <h1>REWARD</h1>
                            <div className='majorOrderRewardAmountCard'>
                                <img src="./medal.png" alt="" />
                                <h2>{searchResult.results[0].reward.amount}</h2>
                            </div>
                        </div>
                    </Card.Body>
                ) : (<h1 className='orderOverviewTitle'>Loading Order...</h1>)
                }
            </Card>
        </>
    );
}

export default MajorOrder;