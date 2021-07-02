import React from 'react'
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {



 const kk =useRandomJoke()

  return (



    
    <div className="App">
      <center>
        <h1 style={{color:"yellow" , fontSize: "70px"}}> -JOKER-</h1>
        
<form>
  
  <button style ={{color:"red" , fontSize: "30px"}} >JOKEBOOK</button>
  
</form>


      
        <h2>{kk}</h2>
      </center>
    </div>
  );
}

export default App;
