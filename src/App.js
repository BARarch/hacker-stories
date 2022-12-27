
import * as React from 'react'
const listA = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Anthony Q',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const listB = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'GG Bing',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'lulu Lee, Yasmine Shulks',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

         <Search/>

      <hr/>

         <List
            list={ listA }/>

         <List
            list={ listB }/>

      </div>

  )
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

function List(props) {
  let list = props.list
  return (
    <ul>
      {list.map(function (item) {
        return(
          <li key={item.objectID}>
            <span>
              <a href={item.url}>item.title</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  )
}

export default App;
