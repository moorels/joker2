
import {useEffect, useState} from 'react'






function useRandomJoke() {


    const [joke,setJoke] = useState('');

    useEffect(() => {
        const fetchJoke = async () => 
        await fetch(
          `https://api.icndb.com/jokes/random?`
          )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke)});
        fetchJoke();
        
        
        },[]);




    return joke;
}

export default useRandomJoke
