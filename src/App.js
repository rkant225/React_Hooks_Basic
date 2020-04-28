import React from 'react';
import ResourceList from './ResourceList';
import {useState} from 'react';
import UsersList from './UsersList';


const App = (props) => {
  
  const [selectedOption, setSelectedOption] = useState({option : 'posts',abc : 1122});  // [aaa,bbb] >>>>> This is array destructuring syntax. // useState() returns an array with to element
  const [displayResourcesList, setDisplayResourcesList] = useState(true);  // [aaa,bbb] >>>>> This is array destructuring syntax. // useState() returns an array with to element


  const onButtonClick = (option)=>{
    setSelectedOption({...selectedOption, option : option})  // while setting your state you must copy it first. // This will cause rerendering of your component
  }

  const hideOrDisplay =()=>{
    setDisplayResourcesList(!displayResourcesList);
  }

  return (
    <div style={{backgroundColor : "#0df", width : "100%", border : "solid 3px black", padding : "10px"}}>
      <h3>Users list : (custom hook reusability)</h3>
      <UsersList keyWord={"users"}/>

      <hr/>

      <br/>
      <br/>
      <a onClick={hideOrDisplay} style={{cursor : "pointer",backgroundColor:"#333333", color : "white", borderRadius : "2px 10px", padding : "8px"}}>Hide or Display resources list</a>
      <br/>
      <br/>

      <div>
        <a style={{cursor : "pointer",backgroundColor:"#333333", color : "white", borderRadius : "2px 10px", padding : "8px"}} onClick={() => onButtonClick('posts')}>Post</a>
        <a style={{display : "inline-block" ,margin: "10px" , cursor : "pointer",backgroundColor:"#333333", color : "white", borderRadius : "2px 10px", padding : "8px"}} onClick={() => onButtonClick('todos')}>ToDos</a>
        <h3>{selectedOption.option.toUpperCase()}</h3>
      </div>
      {displayResourcesList && <ResourceList option={selectedOption.option}/>}

      {!displayResourcesList && <h2>Content is hidden...!!!</h2>}
    </div>
  );  

  
}

export default App;
