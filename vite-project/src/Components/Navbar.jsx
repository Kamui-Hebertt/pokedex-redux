import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../app/reduce/Slice";



function Navbar () {
  const [ search, setSearch ] = useState('')
  const dispatch = useDispatch();

  dispatch(searchAction(search))
  return(


    <nav>
      <label htmlFor="search">
        Search:
         <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
  </nav>
  )
 

}


export default Navbar;