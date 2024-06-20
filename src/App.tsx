import { connect} from 'react-redux'
import {UPDATE_ALL} from './slice'

import './App.css'
import {  useState } from 'react'

const mapstatetoprops = (state)=>({
  counter:state.counter
})

function App(props:unknown) {

  console.log(props);
const [inputvalue, setInputValue] = useState({
  name:"",
  age:"",
  birthyear:0
})
const count = props.counter
// const dispatch = useDispatch()

console.log(count);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // debugger
  const { name, value } = e.target;
  setInputValue((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
console.log(count);


  return (
    <>
    <p>name:{count.name}</p>
    <p>age:{count.age}</p>
    <p>birthyear:{count.birthyear}</p>
<input type="text" value={inputvalue.name} name="name" id="" onChange={handleChange} /> 
<input type="text" value={inputvalue.age} name="age" id="" onChange={handleChange} /> 
<input type="text" value={inputvalue.birthyear} name="birthyear" id="" onChange={handleChange} /> 

     <button onClick={()=>{props.dispatch(UPDATE_ALL(inputvalue))}}>click me💀💀</button>
    </>
  )
}

export default connect(mapstatetoprops)(App)
