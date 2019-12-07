import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import ContactForm from './components/ContactForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
 		<Header />
 		<div className="container">
 			<ContactForm />
			<Contacts />
 		</div>
    </div>
  );
}

export default App;
