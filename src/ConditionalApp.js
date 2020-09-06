import React, { useState } from 'react'

const ConditionalApp = () => {
    const [condition, setCondition] = useState(true);

    return (
        <div>
            <button onClick={() => setCondition(!condition)}>
                Toggle
            </button>

            {/* {
                condition &&
                <h1>Show message only in true</h1>
            } */}

            <h1>State value is {condition.toString()} </h1>
            
        </div>
    )
}

export default ConditionalApp
