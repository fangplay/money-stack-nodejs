import React, { useState, useEffect } from "react";

import listService from './services/list.service';

function App() {
  const [ lists, setLists ] = useState(null);

  useEffect(() => {
    if (!lists) {
      getLists();
    }
  })

  const getLists = async () => {
    let res = await listService.getAll();
    setLists(res);
  }

  const renderList = list => {
    return (
      <div key={list._id} className="container list__item list">
        <table>
            <tr>
              <th className="display-5">id</th>
              <th className="display-5">name</th>
              <th className="display-5">description</th>
              <th className="display-5">type</th>
              <th className="display-5">value</th>
            </tr>
            <tr>
              <th className="display-5 list__name"> {list.name} </th>
              <th className="display-5 list__lastName"> {list.lastName} </th>
              <th className="display-5 list__name"> {list.name} </th>
              <th className="display-5 list__lastName"> {list.lastName}</th>
              <th className="display-5 list__lastName"> {list.lastName}</th>
            </tr>
          </table>
        
      </div>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(lists && lists.length > 0) ? (
          lists.map(list => renderList(list))
        ) : (
          <p>No lists found</p>
        )}
      </ul>
    </div>
  );
}

export default App;