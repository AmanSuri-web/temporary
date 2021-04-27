import React,{useState,createContext,useEffect} from 'react';
import "./index.css";
import CompA from "./CompA.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route,Switch} from "react-router-dom"


const name="Aman";
const currHour = new Date().getHours();

const cssStyle={};
let greeting;
if(currHour>=6&&currHour<=12){
                    greeting='Good Morning';
                    cssStyle.color='green';
                }
                    else if(currHour>12&&currHour<=19){
                        greeting='Good Evening';
                        cssStyle.color='orange';
                    }
                    else{
                        greeting='Good Night';
                        cssStyle.color='black';
                    }



function Heading(){
  const state = useState()
  const currTime = new Date().toLocaleTimeString();
    const [currT,setCount1]=useState(currTime);{/*these are hooks*/}
    const colour="yellow";
    const text='Click Me';
    const[bg,setc]=useState(colour)
    const[t,sett]=useState(text)
const getTim = ()=>{
    const currTime = new Date().toLocaleTimeString();
    setCount1(currTime);
}
setInterval(getTim,1000)

const bgchange=()=>{
    setc("#D3D3D3");
    sett('Double Click Me');
}
const bgBack=()=>{
    setc("yellow");
    sett('Click Me');
}

const[n, setn]=useState('')
const[fname,setfn]=useState()
const inputEvent=(event)=>{
    setn(event.target.value);
}
const nameEnter=(event)=>{
    event.preventDefault();
    setfn(n);
    setn("");
}

useEffect(()=>{
    alert("name changed");
},[fname]);

  return (<>
   
    <div style={{backgroundColor:bg}}>
    <h1 className="heading"> React JS learning </h1>
    <form onSubmit={nameEnter} >
    <input type="text" placeHolder="Enter Your Name" onChange={inputEvent} value={n}/>
    <button type='submit'>Submit</button>
    </form>
    <h2 className="heading">{currT}</h2>
  <button onClick={bgchange} onDoubleClick={bgBack}>{t}</button>{/*onclick and onDoubleClick are events and there are more of them*/}
  <h2 > notes </h2>
  <h2 className="heading">Hello {fname},<span style={cssStyle}>{greeting}</span></h2>
  </div>
  </>)  
}

const FirstName=createContext();

function OrderList(){
    
return (
<>
<ol className="ml-5">
  <li>write in curly brackets to use javascript in html eg. I am {name}</li>
  <li>{`we can also use the symbol back dip in this format eg. my name is ${name}`}</li>
  <li contentEditable="true"> we can edit this content </li>
  <FirstName.Provider value={"Aman"}>
     <CompA/> 
  </FirstName.Provider>
</ol>

  </>
  );
}

export default Heading;

export { OrderList ,FirstName};


