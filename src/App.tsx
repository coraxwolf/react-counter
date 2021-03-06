import React, { useState } from 'react'

function App() {
    const [ count, setCount ] = useState(0)

    return (
        <div className="App">
            <header>
                <h1>Counter App</h1>
            </header>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default App
