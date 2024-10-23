import React, { useState, useEffect } from 'react';

function HomeCard(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < props.num) {
            // Calculate the dynamic delay based on the proximity to the target number
            let delay = 300; // Default delay
            if (props.num - count < 1) {
                delay = 1000; // Increase delay when the target number is close
            }
            
            const increment = setTimeout(() => {
                if (props.num > 300) {
                    setCount(prevCount => Math.min(prevCount + skip, props.num)); // Increment by 10 for mid-range
                } else {
                    setCount(prevCount => Math.min(prevCount + 1, props.num)); // Increment by 1 otherwise
                }
            }, delay); // Use dynamic delay
            
            return () => clearTimeout(increment); // Clear the timeout when effect is cleaned up
        }
    }, [count, props.num]);

    return (
        <>
            <div className='homeCard'>
                <div className='homeCardNum'>
                    {count} {/* Display the counting number */}
                </div>
                <div className='homeCardName'>
                    {props.name1}
                    <br/>
                    {props.name2}
                </div>
            </div>
        </>
    );
}

export default HomeCard;
