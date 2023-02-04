
import * as React from 'react'
const listA = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Anthony Que',
    num_comments: 3,
    points: 6,
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

const App = () => (
    <div>
      <h1>MY Hacker Stories</h1>

         <Search/>

      <hr/>

         <List list={ listA } />

      </div>

  )

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};


const List = ({ list }) => (
    <ul>
      {list.map((item) => <Item key={item.objectID} item={item} />)}
    </ul>
  );

const Item = ({ item }) => (
  <li key={item.objectID}>
    <span>
      <a href={item.url}>item.title</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
  );




export default App;
