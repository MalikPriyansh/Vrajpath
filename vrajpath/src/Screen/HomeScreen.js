import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Review from './reviews';
import Rating from '@mui/material/Rating';
import { motion } from "framer-motion";
import { rgbToHex } from '@mui/material';

function Homescreen(){
    return (
        <div>
            <Navbar  expand="lg" className='nav_back'>
                <Container className="navbar">
                    <Nav.Link><img className="logo" src="/images/vrajpath.jpg" /></Nav.Link>
                    
                    <Navbar.Brand href="#" className='nav-item'>Vrajpath itech LLP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav ">
                            <Nav.Link className="nav-item" href="#">About</Nav.Link>
                            <Nav.Link className="nav-item" href="#">Products</Nav.Link>
                            <Nav.Link className="nav-item" href="#">Pricing</Nav.Link>
                            <Nav.Link className="nav-item" href="#">Reviews</Nav.Link>

                        </Nav>
                        <button className='getquotation'>Get Quotation</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='head'>
            <div className='container'>
                <div className='row row1'>
                    
                    <motion.div className='col-lg-5 col-12'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.2,duration:2}}>
                            
                        <p className='defi'>Collaboration | Innovation - <br />Simplified</p>
                        <h6 className="defi-text">We make technology Accessible</h6>
                            <button className='getstarted' >Get Started</button>
                    </motion.div>
                    {/* <a id='scroll-btn' href='#section2'></a> */}
                    <motion.div className='col-lg-7 col-12 illustration1'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.2,duration:2}}>
                        {/* <img className='illustration1' src='images/software-engineer.png'></img> */}
                    </motion.div>
                </div>
            </div>   
            </div>
            
            <div className='row section2'>
                <div className='col-lg-2 col-12'></div>
                <div className='col-lg-8 col-12'>
                    <h1 className='section2-1'>Continue To Grow <br />With Businesses In The World</h1>
                    <p className='text3'>Blackcombine is here to make it easier for all businessesand companies <br />
                    in Indonesia to be able to continue to grow.<br /></p>
                    <div className='row comp'>
                        <div className='col-lg-4 text-center'>
                            <h4 className='txt'>35.000+</h4>
                            <p className='text3'>Growing business with</p>
                            <h5>Blackcombine</h5>
                            <div className='V1'></div>
                        </div>
                            
                        <div className='col-lg-4 text-center'>
                            <h4 className='txt'>35.000+</h4>
                            <p className='text3'>Growing business with</p>
                            <h5>Blackcombine</h5>
                            <div className='V1'></div>
                        </div>
                        <div className='col-lg-4 text-center'>
                            <h4 className='txt'>35.000+</h4>
                            <p className='text3'>Growing business with</p>
                            <h5>Blackcombine</h5>
                            <div className='V1'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                
                    <h1 className='section2-1'>The Answer To Your Business Needs</h1>
                    <p className='text3'>Blackcombine is here to make it easier for all businessesand companies <br />
                        in Indonesia to be able to continue to grow.<br /></p>
                    
                    <div className='container '>
                        <img className='first-img' src='images/Vector.png'></img>
                        <div className='row' id='section3'>
                            <div className='col-lg-1 col-12'></div>
                            <div className='col-lg-5 col-12 categories'>
                                <button className='payroll'>Payroll</button>
                                <h4 className='heading2'>HR Operations Are Easier With<br />Automated Payroll & HRIS Software</h4>
                                <li className='list'>Secure and comprehensive cloud based software.</li>
                                <li className='list'>Efficient and accurate payroll management.</li>
                                <li className='list'>Complex attendence snd shifting arrangements</li>
                            </div>
                            <div className='col-lg-5 col-12 categories2'>
                                <button className='payroll'>Payroll</button>
                                <h4 className='heading2'>HR Operations Are Easier With<br />Automated Payroll & HRIS Software</h4>
                                <li className='list'>Secure and comprehensive cloud based software.</li>
                                <li className='list'>Efficient and accurate payroll management.</li>
                                <li className='list'>Complex attendence snd shifting arrangements</li>
                            </div>
                    </div>
                    <img className='second-img' src='images/Vector.png'></img>
                </div>
            </div>
            <div className='section3'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-5'>
                            <h2 className='heading2'>Maximizing Business Performance Through Integration</h2>
                            <h6>Integration between Blackcombine products . <img className='arrow-icon' src='images/down-chevron.png'></img></h6>
                            <h6 className='text4'>Manage vaarious business operations optimally with Blackcombime's product ecosystem
                                that is integrated with each other.
                            </h6>
                            <hr></hr>
                            <h5>Integration with POS . <img className='arrow-icon' src='images/down-chevron.png'></img></h5>
                            <h5>Integration with Marketplace . <img className='arrow-icon' src='images/down-chevron.png'></img></h5>
                            <button className='knowmore' >Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className='heading2'>Innovation !</h1>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-5 col-12 untitled'>
                        {/* <img className='untitled' src='images/Frame 1 (1).png' /> 
                    </div>
                    <div className='col-lg-2 col-12'></div>
                    <div className='col-lg-5 col-12'>
                        <h3 className='text1'>We Solves your problem by our digital solutions and grow your business</h3>
                        <p>Problems will occur in the life . But problems should not be a barrier of your 
                            Business . And we solve it by our digital solutions</p>
                        <button className='learnmore'>Learn More</button>
                    </div>
                </div> 
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1 col-12'></div>
                    <div className='col-lg-4 col-12'>
                        <h3 className='text2'>Business has only Two Functions - Innovation and Development</h3>
                        <p >We believe in the Innovation and Growth . A Business should not be compromised because
                            of the Innovation and we take care of it.</p>
                        <button className='learnmore'>Learn More</button>
                    </div>
                    <div className='col-lg-2 col-12'></div>
                    <div className='col-lg-5 col-12 untitled1'>
                        {/* <img className='untitled1' src='images/Untitled (4).png' /> 
                    </div>
                </div>
            </div> */}
            <div>
                <h2 className='heading3'>What our client says</h2>
                <p className='text3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever
                </p>
            </div>
            <img className='third-img' src='images/Vector.png'></img>
            <Review></Review>
            <img className='fourth-img' src='images/Vector.png'></img>
            <div>
                <div className='conatiner'>
                    <div className='row'>
                        <div className='col-lg-1 col-12'></div>
                        <div className='col-lg-10 col-12 banner'>
                            <h1 className='head5'>Ready To Move Forward With <br />Vrajpath? </h1>
                            <p className='text3'>Increase efficiency , productivity and business Performance
                            with various products<br /> that have been used by tens of thousands of business in the
                            world.</p>
                            <button className='btn5' >Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div className='container'>
                    <div className="row" >
                        <div className='col-lg-4 col-12'>
                            <h4 className='subs'>Vrajpath itech LLP </h4>
                            <hr></hr>
                            <p className='card-text1'>A software development company for your software solutions. And Gives you the best value for your needs.</p>
                            <img className='icons' src="images/facebook.png"></img>
                            <img className='icons1' src="images/youtube.png"></img>
                            <img className='icons1' src="images/instagram.png"></img>
                            <img className='icons1' src="images/linkedin.png"></img>
                        </div> 
                        <div className='col-lg-2 col-12'></div>
                        <div className="col-lg-2 col-4">
                            <h6 className="footerh5">Resources</h6>
                            <ul id="li">
                                <li>
                                    Download
                                </li>
                                <li>
                                    Help Centre
                                </li>
                                <li>
                                    Guides
                                </li>
                                <li>
                                    Events
                                </li>
                                <li>
                                    App Directory
                                </li>
                                <li>
                                    Partners
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-4">
                            <h6 className="footerh5">Extras</h6>
                            <ul id="li">
                                <li>
                                    Podcast
                                </li>
                                <li>
                                    Shop
                                </li>
                                <li>
                                    Work
                                </li>
                                <li>
                                    Fund
                                </li>
                                <li>
                                    Integration
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-4">
                            <h6 className="subs">Rating</h6>
                            {/* <form >
                            <input type="email" class="form-control input" data-inline="true" placeholder="Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <Button data-inline="true" className="inputbuttton">➜</Button>
                            </form> */}
                            <text className="p card-text1">8/10</text>
                            <p className="p card-text1">Overall Rating</p>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        </div>
                    </div>
                    <h5 className='heading3 subs'>Copyright 2022 . All Rights Reserved</h5>
                    <p className='text3'>By using this website you will understand the information presented is provided 
                        for the the information purpose.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Homescreen;