import React from "react";

const Contact = () => {
 return (
  <div id='contact'>
   <h1>CONTACT US</h1>
   <p>Feel free to reach out to me for any questions or opportunities!</p>
   <form>
    <input type="text" placeholder="Full Name" required />
    <input type="email" placeholder="type your E-Mail" required />

    <textarea placeholder="Write Here........" name="Message"></textarea>

    <input type="submit" value="send" />
   </form>
   </div>
 );
}
export default Contact;


// import React, { useState } from 'react';
// import axios from 'axios';

// function ContactForm() {
//  const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   message: ''
//  });

//  const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
//  };

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//    const response = await axios.post('/send-email', formData);
//    console.log('Email sent:', response.data);
//    // Optionally, display a success message to the user
//   } catch (error) {
//    console.error('Error sending email:', error);
//    // Optionally, display an error message to the user
//   }
//  };

//  return (

//   <div id='contact'>
//      <h1>CONTACT US</h1>
//     <p>Feel free to reach out to me for any questions or opportunities!</p>
//   <form onSubmit={handleSubmit}>
//    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
//    <button type="submit">Submit</button>
//    </form>
//   </div>
//  );
// }

// export default ContactForm;
