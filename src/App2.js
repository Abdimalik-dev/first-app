// function calculate () {
// const age = 20;

//   return {
    
//   }

// }
// export default calculate;


function App () {
    const names = ["Mohamed", "Ahmed", "Mahad"]

   return (
    <div className="App">
        <h2>Errors</h2>
        <h1>Names</h1>

        {names.map((name) => <h1> {name} </h1>

         )}

    </div>
   );
}

export default App;