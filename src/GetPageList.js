import React ,{useEffect} from 'react';

import Pagination from './Pagination.js';

const GetPageList = ({num,totalPages,midLength}) => {

  var x=parseInt(num)+1;
  var row=[];
  row.push(1)
  if(num<=midLength+2){
    row.push(2)
    row.push(3)
    row.push(4)
    row.push(5)
    row.push(0)
  }
  
  else if(num>=totalPages-(midLength+1)){
    row.push(0)
    row.push(totalPages-4)
    row.push(totalPages-3)
    row.push(totalPages-2)
    row.push(totalPages-1)
  }
  else{
    row.push(0)
    row.push(num-1)
    row.push(num)
    row.push(x)
    row.push(0)
  }
  row.push(totalPages)


return (<>
  {
    row.map((val,ind)=>{
        return(<Pagination num={num} val={val}/>)
    })
    
    
    
    }
    </>
    )
}

export default GetPageList;