
    const grocery = [
        {item:"milk", price:2},
        {item:"fanta", price:1.3},
        {item:"apple", price:4}
    ]

export default function App() {
    return (
        <div className="App">
            <h1> List</h1>
            {grocery.map((grocery )=> {
             return <h1>{grocery}</h1>
  
})}
        </div>
    ); 
}

