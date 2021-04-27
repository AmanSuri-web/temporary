import React, {useState}from 'react'
import emailjs from "emailjs-com"

const Contact=()=>{
	const [data,setData]=useState({
		fullname : '' ,
		email : '' ,
		subject : '' ,
		message : '' ,
	})
	
	const InputEvent=(event)=>{
		const {name,value}=event.target;
		
		setData((preVal)=>{
			return {
				...preVal ,
				[name]:value ,
			}
		})
	}
	const formSubmit=(e)=>{
		

		e.preventDefault()
		console.log(e.target)
		if(data.fullname==''||data.email==''||data.subject==''||data.message==''){
			alert(`Fill out all the fields`)

		}
		else{
		emailjs.sendForm('service_nzpoyuj', 'template_25c1l1c', e.target, 'user_CSE0o4ChU86kiOIprfgR6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
		alert(`mail sent`)
		setData({
			fullname:'',
			email:'',
			subject:'',
			message:'',
		})
		}
	}
	return(<>
		<div className="my-5">
			<h1 className='text-center'>Contact Us</h1>
		</div>

		

			<div className="row">
				<div className='col-md-6 col-10 mx-auto'>

				<form onSubmit={formSubmit} >

					<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Subject</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="subject" value={data.subject} onChange={InputEvent}  placeholder="subject"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">
  Message
  </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent}  rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
				</form>
				</div>
			</div>
		
		</>);
}

export default Contact;









import React, {useState}from 'react'
import emailjs from "emailjs-com"

const Contact=()=>{
	
	function formSubmit(e){
		e.preventDefault()
		console.log(e.target.name)
		if(e.target.fullname==''||e.target.email==''||e.target.subject==''||e.target.message==''){
			alert(`Fill out all the fields`)

		}
		else{
		
		emailjs.sendForm('service_nzpoyuj', 'template_25c1l1c', e.target, 'user_CSE0o4ChU86kiOIprfgR6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert(`mail sent`)
		e.target.reset()
		}
	}

	return(<>
		<div className="my-5">
			<h1 className='text-center'>Contact Us</h1>
		</div>

		

			<div className="row">
				<div className='col-md-6 col-10 mx-auto'>

				<form onSubmit={formSubmit} >

					<div className="mb-3">
					<h5 className="text-center">* All fields are required</h5>
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname"   placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email"  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Subject</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="subject"  placeholder="subject"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">
  Message
  </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="message"  rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
				</form>
				</div>
			</div>
		
		</>);
}

export default Contact;


