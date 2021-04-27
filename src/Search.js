import React ,{useState} from 'react'
import {useParams,useLocation,useHistory} from "react-router-dom";
import "./index.css"

const Search=()=>{

	const [img,setImg]=useState("");

	const inputEvent=(event)=>{
		const data=event.target.value;
		setImg(data);
	}
	const image=`https://source.unsplash.com/collection/200x100/?${img}`
	return (
		<>
		<div className="searchBar">
		<input style={{border:"5"}} type="text" placeHolder="search anything" onChange={inputEvent} value={img}/>
		{img==""?null:<div className="img_div">
			<img src={image} alt="error"/>
			</div>}
			
		
		</div>
		</>);
}
export default Search