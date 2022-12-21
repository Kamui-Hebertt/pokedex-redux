import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import './home.css';


function Home () {

  const [ manyResults, setManyResults ] = useState([]);
  const theChanger = useSelector((state)=> state.searching.value)
 // console.log(theChanger)


  useEffect(()=> {
        pkmApi();
           
  },[]);


 let filtered =    manyResults.filter((e) => { return e.data.name.includes(theChanger)})
   
console.log(filtered)
  const pkmApi = async () => {
    
  //console.log(apiResults)
  const somany = [];
  for (let i = 1; i <= 50; i+=1){
    const urls = `https://pokeapi.co/api/v2/pokemon/${i}/` 
     somany.push(urls);
    
  }
const allresponse = axios.all(somany.map((e)=> axios.get(e))).then((res) => setManyResults(res))
return allresponse
}

 // const link = `https://pokeapi.co/api/v2/pokemon/${i}/encounters´;

return(
  <>
  <Navbar />
  <h2>Pokedex</h2>
  <div className="all">
  

  {filtered.map((e,i) => (
     
     <div className="theCard">
      <p className="pkmName" key={i}>
      {e.data.name}</p>
        <img src={e.data.sprites.front_default} alt={e.data.name} />
        <details>
       <summary>Details</summary>
        <h4>Habilities</h4>
          <p>{e.data.abilities[0].ability.name}</p>
          <p>{e.data.abilities[1]?.ability.name}</p>
        </details>
        
     </div>
  ))}

  </div>

  </>
)

}

export default Home;