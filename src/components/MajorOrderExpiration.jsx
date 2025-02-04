//API import
import API from '../utils/HelldiverApi';

// React imports
import React, { useEffect, useState } from "react";

function MajorOrderExpiration() {

    const [expiration, setExpiration] = useState("");

    const query = (query) => {
        API.search(query)
            .then(() => { setExpiration({ ...expiration }) })
            .catch(err => { console.log(err) });
    }
    useEffect(() => {
        console.log(expiration);
    }, [expiration]);

    useEffect(() => {
        API.search("assignments")
            .then(res => { setExpiration(res.data[0].expiration) })
            .catch(err => { console.log(err) });
    }, [])

    return (
        <p className='majorOrderEndTagTime'>{expiration.slice(0, 10)}</p>
    );
}

export default MajorOrderExpiration;