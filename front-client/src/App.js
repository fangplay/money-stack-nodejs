import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Forming from "./forming";
import Home from "./home";
import listService from './services/list.service';

function App() {
  // const [ lists, setLists ] = useState(null);

  // useEffect(() => {
  //   if (!lists) {
  //     getLists();
  //   }
  // })

  // const getLists = async () => {
  //   let res = await listService.getAll();
  //   setLists(res);
  // }

  // const renderList = list => {
  //   return (
  //     <div key={list._id} className="container list__item list">
  //       <table>
  //           <tr>
  //             <th className="display-5">id</th>
  //             <th className="display-5">name</th>
  //             <th className="display-5">description</th>
  //             <th className="display-5">type</th>
  //             <th className="display-5">value</th>
  //             <th className="display-5">DateTime</th>
  //           </tr>
  //           <tr>
  //           <th className="display-5 list__id"> {list.id} </th>
  //             <th className="display-5 list__title"> {list.title} </th>
  //             <th className="display-5 list__description"> {list.description} </th>
  //             <th className="display-5 list__category"> {list.category} </th>
  //             <th className="display-5 list__price"> {list.price}</th>
  //             <th className="display-5 list__datetime"> {list.datetime}</th>
  //           </tr>
  //         </table>
  //     </div>
  //   );
  // };

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
      {/* <ul className="list">
        {(lists && lists.length > 0) ? (
          lists.map(list => renderList(list))
        ) : (
          <p>No lists found</p>
        )}
      </ul> */}
    </div>
  );
}

export default App;