// Bootstrap imports
import Card from 'react-bootstrap/Card';

//API import
import API from '../utils/HelldiverApi';

// React imports
import React, { useEffect, useState } from "react";

function MajorOrder() {

    const [searchResult, setSearchResult] = useState("");

    const query = (query) => {
        API.search(query)
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        console.log(searchResult.results);
    }, [searchResult]);

    useEffect(() => {
        API.search("war")
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }, [])

    return (
        <Card className='statistics'>
            <Card.Header className='statisticsHeader'>STATISTICS</Card.Header>
            {searchResult.results ? (
                <Card.Body>
                    <div className='statSection'>
                        <h1 className='statSectionTitle'>Our troops</h1>
                        <div className='statTextBox'>
                            <p className='statisticsTitle'>Active Soldiers:</p>
                            <p className='statisticsText'>{searchResult.results.statistics.playerCount}</p>
                        </div>

                        <div className='statTextBox'>
                            <p className='statisticsTitle'>Soldiers Lost:</p>
                            <p className='statisticsText'>{searchResult.results.statistics.deaths}</p>
                        </div>
                    </div>

                    <div className='statSection'>
                        <h1 className='statSectionTitle'>The Enemy</h1>

                        <div className='statTextBox automaton'>
                            <p className='statisticsTitle'>Automatons Killed:</p>
                            <p className='statisticsText'>{searchResult.results.statistics.automatonKills}</p>
                        </div>

                        <div className='statTextBox illuminate'>
                            <p className='statisticsTitle'>Illuminates Killed:</p>
                            <p className='statisticsText'>{searchResult.results.statistics.illuminateKills}</p>
                        </div>

                        <div className='statTextBox terminid'>
                            <p className='statisticsTitle'>Terminids Killed:</p>
                            <p className='statisticsText'>{searchResult.results.statistics.terminidKills}</p>
                        </div>

                    </div>

                </Card.Body>
            ) : (<h1 className='orderOverviewTitle'>Loading Statistics...</h1>)
            }
        </Card >
    );
}

export default MajorOrder;