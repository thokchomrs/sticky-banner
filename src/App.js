import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Slidingmain from './components/slidingmain'

import logo from './images/logo.png'

function App() {
  return (
    <Router>
                     {/*header top hidder*/}
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                    {/*header Menu Bar*/}
                    <div className="mycontainer sticky">
                        <Navbar bg="transparent" expand="lg">
                            <Navbar.Brand>
                                <div>
                                    <img src={logo} alt="logo" width="200" />
                                    {/*   <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> */}
                                </div>
                            </Navbar.Brand>

                            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navbar-toggle" style={{fontSize:18, textAlign:"center", marginTop:30}}>
                                <Nav className="ml-auto" >
                                    <Link className="nav-link">Home</Link>
                                    <Link className="nav-link">About</Link>
                                    <Link className="nav-link" >Services</Link>
                                    <Link className="nav-link" >Contact</Link>
                                    <Link className="nav-link" >Galleries</Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    {/*Slider Bar*/}
                    <Slidingmain />
                    <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                     <div>
                     If you are able to run Node.js version 6 or newer, then you can use Nodemailer. There are no platform or 
                     resource specific requirements. All public Nodemailer methods support both callbacks and Promises (if callback is omitted). 
                     You need to have at least Node v8.0.0 if you want to use async..await with Nodemailer.
                     </div>
                </Router >
  );
}

export default App;
