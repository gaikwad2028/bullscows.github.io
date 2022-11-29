import React from 'react'
import { useEffect } from "react";


export default function Contact() {
   
   const InitiateValues={username:"",email:" ",contact:" " , message:""}
  const [formValues,setFormvalues]=React.useState(InitiateValues)
  const [formErrors, setFormErrors]=React.useState({})
  const [isSubmit, setIsSubmit] = React.useState(false);

  const Handelchange=(e)=>{
   
    const{name,value}=e.target
     setFormvalues({...formValues,[name]:value})
  }
//  console.log(formValues.contact)npm start

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }
}, [formErrors]);


const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  console.log (regex)
  if (!values.username) {
    errors.username = "Name is required!";
  }
  if (!values.email) {
    errors.email = "hhhhhhhhhhhhhhh!";
  } 
  else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.contact) {
    errors.contact = "Contact number is required";
  }
  else if(values.contact.length<4){
    errors.contact="Too Short"
  }
  else if(values.contact.length>11){
    errors.contact="Contact number should be less than 10"
  }
  if (!values.message) {
    errors.message = "Please wirte something";
  }
  else if(values.message.length<2){
    errors.message="Too-Short"
  }
  else if(values.message.length>1000){
    errors.message="must be less than 1000 character"
  }
  
  return errors
};

console.log(formErrors)


  return (
    <div className='contact'>

         {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
       <div className='contact-des-1' data-aos="zoom-in" >
       {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="signed"><button className='sign-btn'>Submitted successfully</button></div>
      ) : (
        <pre></pre>
      )}
        <form onSubmit={handleSubmit}>
      <div className='contact-des'>
        <h1 className='tell-me'>Lets chat if you want to know more about myself</h1>
      </div>
      <div className='form-1'>
        <p className='na'>Name:</p><input type="text"className="chat" name="username"  value={formValues.username}onChange={Handelchange}/>
        <p className='kkk'>{formErrors.username}</p>
        <p className='na'>Email:</p><input type="text"className="chat" name="email"  value={formValues.email} onChange={Handelchange}/>
        <p className='kkk'>{formErrors.email}</p>
        <p className='na'>Contact no:</p><input type="text"className="chat" name="contact"   value={formValues.contact} onChange={Handelchange} />
        <p className='kkk'>{formErrors.contact}</p>
        <p className='na'>Message:</p><textarea className='message' name="message"  value={formValues.message}   onChange={Handelchange}/>
        <p className='kkk'>{formErrors.message}</p>
        <div><button className='sub'data-aos="fade-left">Submit</button></div>
      </div>
      </form>
    </div>
    </div>
  )
}
