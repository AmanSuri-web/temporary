import React from 'react'
import "./index.css";
const year = new Date().getFullYear();
const Footer=()=>{
	return (<>
		<footer className="bg-light text-center" style={{marginTop:'100px'}}>
		<p>© {year} Galaxy Informatics</p>
		</footer>
		</>
		);
}
export default Footer