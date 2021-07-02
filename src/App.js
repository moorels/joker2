import React,{useState, useRef} from 'react'
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {

 const firstNameRef = useRef(null);
 const lastNameRef = useRef(null);


  
const [firstName, setFirstName]  = useState ('');
const [lastName, setLastName]  = useState ('');

const joke = useRandomJoke(firstName, lastName)


const generateJoke = (e) => {
  e.preventDefault();


  setFirstName(firstNameRef.current.value);
  setLastName(lastNameRef.current.value);
 
}

const reset = () => {
  setFirstName('');
  setLastName('');
}


  return (
    
    <div className="App">
      <center>
        <h1 style={{color:"yellow" , fontSize: "70px"}}> -JOKER-</h1>
        
<form>
  <input placeholder="First Name" ref={firstNameRef} />
  <input placeholder="Last Name"  ref={lastNameRef}/>
  <button style ={{color:"red" , fontSize: "30px"}} onClick={generateJoke}>JOKEBOOK</button>
  <button style ={{color:"red" , fontSize: "30px"}} onClick={reset}>RESET</button>
</form>


      
        <h2>{joke}</h2>
      </center>
    </div>
  );
}

export default App;
