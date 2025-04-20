import React from 'react';
import { Link } from 'react-router';
const EmptyData = () => {
    return (
        <div>
            <h2 className='4xl'>No Favorites Data Available</h2>
            <Link to="/">
            
            <button className='btn btn-primary'>Back Home</button>
            </Link>
        </div>
    );
};

export default EmptyData;