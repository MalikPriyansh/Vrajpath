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
            <Navbar  expand="lg">
                <Container className="navbar">
                    <Nav.Link><img className="logo" src="/images/vrajpath.jpg" /></Nav.Link>
                    
                    <Navbar.Brand href="#">Vrajpath itech LLP</Navbar.Brand>
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
                    <a id='scroll-btn' href='#section2'></a>
                    <motion.div className='col-lg-7 col-12 illustration1'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.2,duration:2}}>
                        <img className='illustration1' src='images/software-engineer.png'></img>
                    </motion.div>
                </div>
            </div>   
            </div>
            <img src='images/Rectangle 1.png'></img>
            <div className='container' id='section2'
                initial={{opacity : 0}}
                animate = {{opacity: 1}}
                transition={{delay:1,duration:4}}
                >
                <div className='row'>
                    
                    <div className='col-lg-2 col-12'>
                        <h3 className='heading1'>Services</h3>
                        <p className='heading_text'>It's All About Customers</p>
                    </div>
                    <div className='col-lg-9 col-12 services'>
                        <p className='review_text'>Build your website with the MERN/MEAN stack. And showcase your portfolio to your customers. <br />
                        Make your product features smart with the power of AI and ML.</p>
                        <div className='row row3'>
                            <motion.div className='col-lg-4'
                                 whileHover={{
                                    scale:1.1}}>
                                
                                    <img className='card-img-top cardimg' src='images/development.png' />
                                    <div className='card-body'>
                                        <h6 className='card-title text-center'>Web Development</h6>
                                    </div>
                                
                            </motion.div>
                            <motion.div className='col-lg-4'
                                 whileHover={{
                                    scale:1.1}}>
                                
                                    <img className='card-img-top cardimg' src='images/information.png' />
                                    <div className='card-body'>
                                        <h6 className='card-title text-center'>Mobile Application</h6>
                                    </div>
                                
                            </motion.div>
                            <motion.div className='col-lg-4'
                                 whileHover={{
                                    scale:1.1}}>
                                
                                    <img className='card-img-top cardimg' src='images/laptop.png' />
                                    <div className='card-body'>
                                        <h6 className='card-title text-center'>QA Testing And Security</h6>
                                    </div>
                            
                                
                            </motion.div>
                        </div>
                        <div className='row row2'>
                            <motion.div className='col-lg-4'
                                 whileHover={{
                                    scale:1.1}}>
                                
                                    <img className='card-img-top cardimg' src='images/coding (1).png' />
                                    <div className='card-body'>
                                        <h6 className='card-title text-center'>AI/ML</h6>
                                    </div>
                                
                            </motion.div>
                            <motion.div className='col-lg-4'  
                            whileHover={{
                                scale:1.1}}>
                                
                                    <img className='card-img-top cardimg' src='images/data-analytics.png' />
                                    <div className='card-body'>
                                        <h6 className='card-title text-center'>Data Analytics</h6>
                                    </div>
                            
                            </motion.div>
                            <motion.div className='col-lg-4'
                             whileHover={{
                                scale:1.1}}>
                                
                                    <img className='card-img-top cardimg' src='images/social-media.png' />
                                    <div className='card-body'>
                                        <h6 className='card-title text-center'>Digital Marketing</h6>
                                    </div>
                               
                            </motion.div>
                        </div>
                    </div>
                
                {/* <div className='row'> 
                    <div className="col-lg-3 col-12 categories">
                        <motion.div className='card' 
                        whileHover={{
                            scale:1.1,
                            boxShadow:"0px 0px 8px rgb(128,128,128)"
                        }}>
                            <img className='card-img-top cardimg' src='images/development.png' />
                            <div className='card-body'>
                                <h4 className='card-title '>Web Development</h4>
                                <p className='card-text card-text1'>Build your website with the MERN/MEAN stack. And showcase your portfolio to your customers.</p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="col-lg-3 col-12 categories2">
                        <motion.div className='card'
                        whileHover={{
                            scale:1.1,
                            boxShadow:"0px 0px 8px rgb(128,128,128)"
                        }}>
                            <img className='card-img-top cardimg' src='images/information.png' />
                            <div className='card-body'>
                                <h4 className='card-title'>Mobile Application</h4>
                                <p className='card-text card-text1'>Develop your Hybrid or Mobile Application with Ionic, React Native or Flutter.</p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="col-lg-3 col-12 categories3">
                        <motion.div className='card' 
                        whileHover={{
                            scale:1.1,
                            boxShadow:"0px 0px 8px rgb(128,128,128)"
                        }}>
                            <img className="card-img-top cardimg" src="/images/social-media.png" />
                            <div className='card-body '>
                                <h4 className='card-title '>Digital Marketing</h4>
                                <p className='card-text card-text1'>Increase your product reach across demographics and connect with your target audience.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-12 categories'>
                        <motion.div className='card'
                        whileHover={{
                            scale:1.1,
                            boxShadow:"0px 0px 8px rgb(128,128,128)"
                        }}>
                            <img className='card-img-top cardimg' src='images/coding (1).png' />
                            <div className='card-body '>
                                <h3 className='card-title '>AI/ML</h3>
                                <p className='card-text card-text1'>Make your product features smart with the power of AI and ML.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-lg-3 col-12 categories2'>
                        <motion.div className='card'
                        whileHover={{
                            scale:1.1,
                            boxShadow:"0px 0px 8px rgb(128,128,128)"
                        }}>
                                <img className='card-img-top cardimg' src='images/data-analytics.png' />
                                <div className='card-body'>
                                    <h4 className='card-title'>Data Analytics</h4>
                                    <p className='card-text card-text1'>Use your data for analysis to take important business decisions and reach your targets.</p>
                                </div>
                            </motion.div>
                        </div>
                    <div className='col-lg-3 col-12 categories3'>
                        <motion.div className='card'
                        whileHover={{
                            scale:1.1,
                            boxShadow:"0px 0px 8px rgb(128,128,128)"
                        }}>
                            <img className='card-img-top cardimg' src='images/laptop.png' />
                            <div className='card-body'>
                                <h4 className='card-title '>QA Testing and Security Audits</h4>
                                <p className='card-text card-text1'>Ensure the product quality with the industry's best standards for improved performance and user experience.</p>
                            </div>
                        </motion.div>
                    </div>
                    </div >*/}
                    </div>
            </div>
            <h1 className='heading2'>Innovation !</h1>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-5 col-12 untitled'>
                        {/* <img className='untitled' src='images/Frame 1 (1).png' /> */}
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
                        {/* <img className='untitled1' src='images/Untitled (4).png' /> */}
                    </div>
                </div>
            </div>
            <img className='frame3' src='images/Frame 3.png' ></img>
            <h2 className='heading3'>What our client says</h2>
            <p className='text3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <Review></Review>
            <div className='container'>
                <div className="row" id="footer">
                    <div className='col-lg-4 col-12'>
                        <h4>Vrajpath itech LLP </h4>
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
            </div>
        </div>
    );
}

export default Homescreen;