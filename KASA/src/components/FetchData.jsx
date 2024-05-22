import React from 'react';
import data from '../datas/logements.json';

const FetchData = () => {
    return (
        <div className='d-flex'>
            {data.map((item, i) => (
                <div key={i}>
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    );
}

export default FetchData;
