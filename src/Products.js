import React ,{useState,useEffect} from 'react'
import Card from './Card.js'
import Sdata from './Sdata.js'
import { makeStyles } from '@material-ui/core/styles';


import { useHistory ,NavLink} from "react-router-dom";
import "./index.css";
import GetPageList from './GetPageList.js';
const Products=(props)=>{
	const history = useHistory();
	const num=props.match.params.page;
	var x=parseInt(num)+1;
	
	const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      justifyContent:"center",
      display:'flex'
    },
  },
  
}));
	const classes = useStyles();
	
	const rowsPerPage=12
	const handleChange=(event,value)=>{
		
		history.push(`/products${value}`);
	}
	const renderPrevious = () => {
      if (num==1) {
         return (<li class="page-item disabled">
      <NavLink class="page-link" to={{pathname:`/products${num-1}`}} tabindex="-1" aria-disabled="true">Previous</NavLink>
    </li>)
      } else {
        return (<li class="page-item ">
      <NavLink class="page-link" to={{pathname:`/products${num-1}`}} tabindex="-1" aria-disabled="true">Previous</NavLink>
    </li>)
      }
    }
    const renderNext = () => {
      if (num<28) {
         return (<NavLink class="page-link" to={{pathname:`/products${x}`}}>Next</NavLink>)
      } else {
        return (<li class="page-item disabled">
        <NavLink class="page-link" to={{pathname:`/products${x}`}}>Next</NavLink></li>)
      }
    }
		
	
    
	return (<>
		<div className="my-5">
		
			
			<div className={classes.root}>
			<h7>SHOWING {(num-1)*rowsPerPage+1}–{Math.min(num*rowsPerPage,Sdata.length)} OF {Sdata.length} RESULTS</h7>
		

		</div>
		
		<div style={{marginLeft:'20px',marginRight:'20px'}}>

		<div className="row row-cols-1 row-cols-md-4 g-4" >


		{
  		
  			Sdata
  			.slice((num-1)*rowsPerPage,num*rowsPerPage)
  			.map((val,ind)=>{
  				
  				return (<Card
  					id={val.id}
  					imgsrc={val.imgsrc}
  					title={val.title}
  					sname={val.sname}
  					link={val.link}
  				/>);
  			
		
  		})
  		
  		}
		</div>
		</div>	
		
		<div className={classes.root}>
			
		<nav aria-label="Page navigation example">
<div className="bigPagination">
  <ul className=" pagination justify-content-center ">
  {renderPrevious()}

  <GetPageList num={num} totalPages={28} midLength={2}/>
	
	<li class="page-item">
      {renderNext()}
    </li>
  </ul>
  </div>
  <div className="smallPagination">
  <ul className=" pagination justify-content-center pagination-sm">
  {renderPrevious()}

  <GetPageList num={num} totalPages={28} midLength={2}/>
	
	<li class="page-item">
      {renderNext()}
    </li>
  </ul>
  </div>
  
  
</nav>

		
		</div>
		</div>	
		</>
		);
}
export default Products