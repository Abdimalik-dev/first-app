function App()  {
    // const age = 20;
    // return (
    //     <div className = "App">
    //         <h1>{age > 10 ? "over 18" : "under"}</h1>
    //     </div>
    // );


    /// maping the ARRAY

    const names = ["Mohamed", "Abdimalik", "ali"]
    return (
        <div className = "App">
            <h1> NAmes </h1>
            {names.map((name)=> <h1> {name}</h1>) }

        </div>
    )
    
} 


export  default App;