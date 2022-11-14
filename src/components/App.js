
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Blogpost from './Blogpost'
import Footer from './Footer'
import About from './About'
import '../css/App.css'
import {v4 as uuidv4 } from 'uuid'

function App() {
  return (
<>
<Navbar/>
<Blogpost/>
<About/>
<Footer/>

</>

  );
}

export default App;
