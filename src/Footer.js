import React,{useState,useEffect} from 'react';
import "./index.css";
import { NavLink ,useHistory,useLocation} from "react-router-dom";
const year = new Date().getFullYear();
const Footer=()=>{
	const num=useLocation().pathname;
const [c,setc] = useState('true')

useEffect(() => {
    //Checks if location.pathname is not "/".
    setc(num === "/"||num === "/about"||num === "/contact")
  }, [num]);
	return (<>
		<footer className={c?"footerDisplay bg-light text-center":"footerDisplay1 bg-light text-center"} style={{marginTop:'100px'}}>
		<p >© {year} Galaxy Informatics</p>
		</footer>
		</>
		);
}
export default Footer