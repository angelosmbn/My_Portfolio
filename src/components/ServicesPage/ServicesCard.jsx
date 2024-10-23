import React, { useState, useEffect } from 'react';

function ServicesCard (props) {
    return (
        <div className='serviceCard'>
            <div className="serviceCardNum">
                {props.num} {/* Display the counting number */}
            </div>
            <div className="serviceCardName">
                {props.name}
            </div>
            <div className="serviceCardDesc">
                {props.desc}
            </div>
        </div>
    );
}

export default ServicesCard;