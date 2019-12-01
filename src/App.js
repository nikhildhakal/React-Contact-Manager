import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
 		<Header branding = "Contact Manager" />
 		<Contact 
 			name = "Nikhil Dhakal"
 			email = "nikhil.webdev2020@gmail"
 			phone = "+977-9841377539" 
 		/>
 		<Contact 
 			name = "Neeru Dhakal"
 			email = "dhakalneeru@hotmail.com"
 			phone = "+977-9851042790" 
 		/>
    </div>
  );
}

export default App;
