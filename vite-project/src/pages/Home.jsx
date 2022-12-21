import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";


function Home () {

  const [ manyResults, setManyResults ] = useState([]);
  const theChanger = useSelector((state)=> state.searching.value)
 console.log(theChanger)


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
  
// console.log(somany);
const allresponse = axios.all(somany.map((e)=> axios.get(e))).then((res) => setManyResults(res))

return allresponse
}

return(
  <>
  <Navbar />
  <div>
  

  {filtered.map((e) => (
     
     <><p>
      {e.data.name}</p>
        <img src={e.data.sprites.front_default} alt={e.data.name} />
        
     </>
  ))}

  </div>

  </>
)

}

export default Home;