import React, { useState, useEffect } from "react";
import listService from './services/services';

function Home(){

  const [ lists, setLists ] = useState();

  const getLists = async () => {
    let res = await listService.getAll();
    setLists(res);
  }

  useEffect(() => {
    if (!lists) {
      getLists();
    }
  })


  const renderList = list => {
      return (
        <div key={list._id} className="container list__item list">
          <input type="date" name="date" id="date" /><button type="button" id="search" value="Search"/>
          <table>
              <tr>
                <th className="display-5">id</th>
                <th className="display-5">name</th>
                <th className="display-5">description</th>
                <th className="display-5">type</th>
                <th className="display-5">value</th>
                <th className="display-5">DateTime</th>
              </tr>
              <tr>
              <th className="display-5 list__id"> {list.id} </th>
                <th className="display-5 list__title"> {list.title} </th>
                <th className="display-5 list__description"> {list.description} </th>
                <th className="display-5 list__category"> {list.category} </th>
                <th className="display-5 list__price"> {list.price}</th>
                <th className="display-5 list__datetime"> {list.datetime}</th>
              </tr>
            </table>
        </div>
      );
    };

    <ul className="list">
          {(lists && lists.length > 0) ? (
            lists.map(list => renderList(list))
          ) : (
            <p>No lists found</p>
          )}
    </ul>

}

export default Home;