import React, { useState } from 'react'

const CounterApp = () => {
    let [counter, setCounter] = useState(0);


    const incrementCounter = () => {
        setCounter(counter+6);
    }

    return (
        <div>
            <button onClick={incrementCounter}>
                Increment
            </button>
            <h1>Clicks: {counter}</h1>
        </div>
    )
}

export default CounterApp
