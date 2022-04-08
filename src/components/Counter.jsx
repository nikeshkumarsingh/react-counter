import{useState}from"react"

function Counter(props){
  const [counter,setCounter]=useState(0)
  const handleDecrement=()=>{
      setCounter(counter-1);
  }
  const handleIncrement=()=>{
      setCounter(counter+1);
  }
  const double=()=>{
    setCounter(counter*2);
}
    return (
        <div className="main">
           
        <h5 style={counter%2==0?{color:"red"}:{color:"green"}} >Count is {counter}</h5>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={double}>X2</button>
        </div>
    )
}
export{Counter}