import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Forming from "./forming";
import Home from "./home";

function App() {

  return (
    <div className="App">
      <div class="container">
      <Router>
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-record">Add Record</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/add-record' element={< Forming />}></Route>
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;