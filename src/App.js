import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
 		<Header />
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
