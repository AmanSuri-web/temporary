import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Heading , { OrderList ,Greeting} from "./App.js";


const name = "Aman";
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://s3.amazonaws.com/images.seroundtable.com/gray-gradient-Links-Google-1900px--1466424563.jpg"
const link = "https://www.google.co.in"
const heading2={
	color: '#ff0000',
	testTransform: 'capitalize'
};


ReactDOM.render(<>
				<Heading/>  
				<h2 style={heading2}> notes </h2>
				<Greeting/>
				<div className="img_div">
				<img src={img1} alt="randomImages"/> 
				<a href={link} target="_x">
				<img src={img2} alt="randomImages"/> 
				</a>
				</div>
				<OrderList/>
				 </>, 
	//document.getElementById("root") ); // this is always fixed and it points to the index.html file




