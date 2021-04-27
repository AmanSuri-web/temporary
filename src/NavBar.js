import React,{useState} from 'react';
import "./index.css";
import { NavLink } from "react-router-dom";
import $ from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { InstantSearch } from 'react-instantsearch-dom';
import Sdata from './Sdata.js'
import Popper from 'popper.js';
import logo from './galaxyLogo.svg';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';


const NavBar=()=>{
	const p = 1;
	const[n, setn]=useState('')
	const inputEvent=(event)=>{
		setn(event.target.value);
		
	}
	const [i,seti] = useState('false')
	var list=[];  
const SearchField=()=>{
	seti(!i)
	setn('')
}



const cleanupWord = word =>{
	return word.trim().toLowerCase().replace(/( )/g," ");
}
const filterData = word =>{
	return Sdata.filter(item=>item.title.toLowerCase().includes(word));
}
const render = (word=" ") =>{
	
	word=cleanupWord(word)
	const filtered = filterData(word);
	filtered.forEach( item  => {
		const object1 = { id: item.id, title: item.title };
		list.push(object1)
		
	});
}

render(n)
if(n==''){
	list=[]
}
	return (
		<>	
		<div className="container-fluid nav_bg">
			<div className='row'>
			
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div style={{marginLeft:'-3px'}}>
    < NavLink  className="navbar-brand" to="/" ><span className='navbar-brand'><img src={logo} alt="logo" />Galaxy Informatics</span></ NavLink >
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          < NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/">Home</ NavLink >  
        </li>
        <li className="nav-item dropdown">
          < NavLink  className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'grey'}}>
            Products
          </ NavLink >
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown" style={{marginLeft:''}} >
         
            <li>< NavLink   className="dropdown-item" to="/products1"><span className='dropdown-item'>All Products</span></ NavLink ></li>
            <li>< NavLink className="dropdown-item" to="/products-category/medical-surgical/page1"><span className='dropdown-item'>Medical & Surgical Products</span></ NavLink ></li>
            <li>< NavLink  className="dropdown-item" to="/products-category/anthropometry-instruments/page1"><span className='dropdown-item'>Anthropometry Instruments</span></ NavLink ></li>
            <li>< NavLink  className="dropdown-item" to="/products-category/psychology-sports/page1"><span className='dropdown-item'>Psychology & Sports Science</span></ NavLink ></li>
            <li>< NavLink  className="dropdown-item" to="/products-category/forensic-science/page1"><span className='dropdown-item'>Forensic Science Products</span></ NavLink ></li>
            <li>< NavLink  className="dropdown-item" to="/products-category/healthcare-nutrition/page1"><span className='dropdown-item'>Healthcare & Nutrition Products</span></ NavLink ></li>
            <li>< NavLink  className="dropdown-item" to="/products-category/human-anatomy-models/page1"><span className='dropdown-item'>Human Anatomy Models & Charts</span></ NavLink ></li>
          </ul>
        </li>
        <li className="nav-item">
          < NavLink activeClassName="menu_active" className="nav-link" to="/about">About Us</ NavLink >
        </li>
        <li className="nav-item">
          < NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us</ NavLink >
        </li>
        <li className="nav-item dropdown">
          < NavLink  className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'grey'}}>
            Certificates
          </ NavLink >
          <ul className="dropdown-menu certiDropDown" aria-labelledby="navbarDropdown" >
         
            <li>< NavLink   className="dropdown-item" to="/galaxy-env-manage-certificate"><span className='dropdown-item'>Galaxy Quality Management Certificate</span></ NavLink ></li>
            <li>< NavLink className="dropdown-item" to="/galaxy-quality-manage-certificate"><span className='dropdown-item'>Galaxy Environmental Management Certificate</span></ NavLink ></li>
            
            <li>< NavLink  className="dropdown-item" to="/galaxy-gmp-certificate"><span className='dropdown-item'>Galaxy GMP Certificate</span></ NavLink ></li>
            <li>< NavLink  className="dropdown-item" to="/galaxy-ce-certificate"><span className='dropdown-item'>Galaxy CE Certificate</span></ NavLink ></li>
          </ul>
        </li>
        <li className="nav-item">
        <Tooltip title="Search product">
        <button className={!i ? "searchBtn1" : "searchBtn"} onClick={SearchField}><SearchIcon/></button>
        </Tooltip>
        </li>
      </ul>
      
        
    </div>
  </div>

	</nav>
	<div className="search-input" style={{marginTop:'5px'}}>
        <input className={!i ? "form-control me-2" : "input_hide"} style={{}} autoComplete="off" type="search" id="hello" name="app-search" placeholder="Search" aria-label="Search" onChange={inputEvent} value={n}/>

        
        <div className="autocom-box">
		{list.map((val)=>{
			return(<><NavLink className="page-link" to={{pathname:`/products/${val.id}`}} onClick={SearchField}><li style={{color:'black'}}><SearchIcon/>{val.title}</li></NavLink></>)
		})}
       </div>
		</div>
        
      
		</div>
		</div>
		
	</>
	)
}

export default NavBar;
