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
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';

const Navigation=()=>{
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
		
			
		




<Navbar bg="light" expand="lg">
  < NavLink  className="navbar-brand" to="/"><span className='navbar-brand'><img src={logo} alt="logo" />Galaxy Informatics</span></NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    
      <NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/">Home</NavLink>

      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavLink className="dropdown-item" to="/products1">All Products</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/products-category/medical-surgical/page1">Medical & Surgical Products</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/products-category/anthropometry-instruments/page1">Anthropometry Instruments</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/products-category/psychology-sports/page1">Psychology & Sports Science</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/products-category/forensic-science/page1">Forensic Science Products</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/products-category/healthcare-nutrition/page1">Healthcare & Nutrition Products</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/products-category/human-anatomy-models/page1">Human Anatomy Models & Charts</NavLink>
        </NavDropdown>
        
      <NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/about">About Us</NavLink>
      <NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/contact">Contact Us</NavLink>

      <NavDropdown title="Certificate" id="basic-nav-dropdown" style={{border:'none'}}>
      
      <div className="certiDropDown" style={{backgroundColor:'white',padding:'10px',borderRadius:'7px',border: '1px solid rgb(200,200,200)'}}>
        <NavLink className="dropdown-item" to="/galaxy-env-manage-certificate" style={{fontSize:'10px'}}>Galaxy Quality Management Certificate</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="galaxy-quality-manage-certificate">Galaxy Environmental Management Certificate</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/galaxy-gmp-certificate">Galaxy GMP Certificate</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/galaxy-ce-certificate">Galaxy CE Certificate</NavLink>
        </div>
        </NavDropdown>
      
    </Nav>
    <Tooltip title="Search product">
        <button className={!i ? "searchBtn1" : "searchBtn"} onClick={SearchField}><SearchIcon/></button>
        </Tooltip>
  </Navbar.Collapse>
</Navbar>

	<div className="search-input" style={{marginTop:'5px'}}>
        <input className={!i ? "form-control me-2" : "input_hide"} style={{}} autoComplete="off" type="search" id="hello" name="app-search" placeholder="Search" aria-label="Search" onChange={inputEvent} value={n}/>

        
        <div className="autocom-box">
		{list.map((val)=>{
			return(<><NavLink className="page-link" to={{pathname:`/products/${val.id}`}} onClick={SearchField}><li style={{color:'black'}}><SearchIcon/>{val.title}</li></NavLink></>)
		})}
       </div>
		</div>
        
      
		
		
	</>
	)
}


export default Navigation;
