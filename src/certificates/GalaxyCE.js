import React from 'react'
import image1 from "./Galaxy CE Certificate.jpg"
import image2 from "./Galaxy CE Certificate products Annexure.jpg"

const GalaxyCE=()=>{
	return (<>
		<div style={{display:'flex'}}>
			<img src={image1} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			<img src={image2} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			</div>
		</>);
}
export default GalaxyCE