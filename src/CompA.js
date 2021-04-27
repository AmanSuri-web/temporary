import React,{useContext,useState,useEffect} from 'react'
import {FirstName} from "./Components.js"
import axios from "axios"

const CompA=()=>{
	const fname=useContext(FirstName)
	const [num ,setNum]=useState()
	const[name,setName]=useState()
	const[moves,setMove]=useState()
	useEffect(()=>{
		async function getData(){
			const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
			setName(res.data.name)
			setMove(res.data.moves.length)
		}
		getData()
	});
	return (<><li> this is useContext ,eg my name is {fname}</li>

		<select value={num} onChange={(event)=>{
			setNum(event.target.value)
		}}>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="25">25</option>
		</select>
		<h2>I choose <span style={{color:"red"}}>{name}</span></h2>
		<h2>No. of moves are <span style={{color:"red"}}>{moves}</span></h2>
		
		</>);
}

export default CompA