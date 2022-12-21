
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details';




function App() {


  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/details/:id" component={ Details } />
      </Switch>
     </Router>
    </div>
  )
}

export default App
