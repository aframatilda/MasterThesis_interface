import './App.css';
import React, { useState } from 'react';

function App() {

  const [option, setOption] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page from doing a refresh
    console.log(option);

    //Get stitched image
    // if(option == 1){

    // }
  }

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit}>
          <label>
            Please enter option:
            <input id="number" type="number" value={option} onChange={(e) => setOption(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </header>
    </div>
  );
}

export default App;
