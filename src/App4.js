function App() {
    const grocery = [
        {item:"milk", price:2},
        {item:"fanta", price:1.3},
        {item:"apple", price:4}
    ]


    return (
        <div className="App">
            <h1> List</h1>
            {grocery.map((product)=> 
            <h1>{product}</h1> 
  
            )}
        </div>
    );
}

export default App;  