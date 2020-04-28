import {useState, useEffect} from 'react';
import axios from 'axios';

const useResource = (searchKeyWord)=>{

  const [resources,setResources] = useState({data : []}); // state variable

  const fetchData = async (dataFor) =>{
    const url = `https://jsonplaceholder.typicode.com/${dataFor}`
    const response = await axios.get(url);  // fetch data

    setResources({data : response.data}) // update the state with fetched data
  }

  // componentDidMount and componentDidUpdate (with prevProps comparision) and componentWillUnMount
  useEffect(()=>{
    console.log('CALLED for ' + searchKeyWord )
    fetchData(searchKeyWord)  // cll method to fetch data
    return () =>{ console.log("I am unMounted...for " + searchKeyWord)} // for unmounting
  },[searchKeyWord]); // 2nd argument as array[], "searchKeyWord" value will be checked automaticly to call the call back

  return resources; // return the fetched data
}

export default useResource;



// Explaination of "useEffect()"

// COMPONENT_DID_MOUNT >>>>> If second argument is Empty array [], In this case 1st callBack function (argument) will be called only once at the time of first render.
// COMPONENT_DID_UPDATE >>>>> If second argument is NOT an Empty array [var1, var2, var3], In this case 1st callBack function (argument) will be called only when any of the dependency (var1, var2, var3) changes.
// COMPONENT_DID_UPDATE >>>>> If nothing is passed as second argument, then 1st callBack function (argument) is called without comparision between "previousProps" and "currentProps"  (Infine render will happen If you are doing setState, be aware of this)
// COMPONENT_WILL_UNMOUNT >>>>> If 1st callBack function is returning a function then this function will be called when our component is going to unmount. NOTE : If second argument is NOT an Empty array [var1, var2, var3], In this case UNMOUNT_return_function will be called every time if there is change in dependency (var1, var2, var3), BUT if it is an empty array then UNMOUNT_return_function will be called only at the time of unmounting.
// NOTE : Your 1ts callBack fnction should not be an "async" function.(because it returns a promise.) BUT you can cal some other "async" function from inside. OR you can use IIFE to make axios request n side it. useEffect(() => {  IIFE  },[]) >>>>>> useEffect(() => {  (....axios.get()...)()  },[])