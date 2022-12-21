import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchAction } from "../app/reduce/Slice";



function Navbar () {
  const [ search, setSearch ] = useState('')
  const dispatch = useDispatch();

  dispatch(searchAction(search))
  return(


    <nav>
      <label htmlFor="search">
        <Link to="/">Home</Link>
        <p>Search:</p>
         <input type="text" placeholder="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
  </nav>
  )
 

}


export default Navbar;