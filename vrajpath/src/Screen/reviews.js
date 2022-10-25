import react from 'react';
import Carousel from 'react-bootstrap/Carousel';

// const data = [
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     },
//     {
//         company_name : 'Amazon',
//         country : "America",
//         review : "Grerat Company for developing your softwares and services to add values to your company with the ."
//     }
// ]

function Review(){
        
             return ( 
                    <div className='review'>
                        <Carousel >
                            <Carousel.Item>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-4 col-12 review2'>
                                        <h4 className='customer_name'>Amazon</h4>
                                        <h5 className='country_name'>San Francisco</h5>
                                        <p className='review_text'>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                    <div className='col-lg-4 col-12 reviewmid'>
                                        <h3 className='customer_name'>Amazon</h3>
                                        <h4 className='country_name'>San Francisco</h4>
                                        <p className='reviewtext'>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                    <div className='col-lg-4 col-12 review2'>
                                        <h3 className='customer_name'>Amazon</h3>
                                        <h4 className='country_name'>San Francisco</h4>
                                        <p className='review_text'>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                </div>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-4 col-12 review2'>
                                        <h3 className='customer_name'>Amazon</h3>
                                        <h4 className='country_name'>San Francisco</h4>
                                        <p className='review_text'> Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                    <div className='col-lg-4 col-12 reviewmid'>
                                        <h3 className='customer_name'>Amazon</h3>
                                        <h4 className='country_name'>San Francisco</h4>
                                        <p className='review_text'>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                    <div className='col-lg-4 col-12 review2'>
                                        <h3 className='customer_name'>Amazon</h3>
                                        <h4 className='country_name'>San Francisco</h4>
                                        <p className='review_text'>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                </div>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-4 col-12 review2'>
                                        <h3>Amazon</h3>
                                        <h4>San Francisco</h4>
                                        <p>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                    <div className='col-lg-4 col-12 reviewmid'>
                                        <h3>Amazon</h3>
                                        <h4>San Francisco</h4>
                                        <p>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                    <div className='col-lg-4 col-12 review2'>
                                        <h3>Amazon</h3>
                                        <h4>San Francisco</h4>
                                        <p>Grerat Company for developing your softwares and services to add values to your company with the .</p>
                                    </div>
                                </div>
                            </div>
                            </Carousel.Item>
                        </Carousel>
                        <div className='comp'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-3 col-sm-3'>
                                        <img className='comp-icon' src = 'images/c2.png' />
                                    </div>
                                    <div className='col-lg-3 col-sm-3'>
                                        <img className='comp-icon' src = 'images/freaquer.jpg' />
                                    </div>
                                    <div className='col-lg-3 col-sm-3'>
                                        <img className='comp-icon' src = 'images/Screenshot (298).png' />
                                    </div>
                                    <div className='col-lg-3 col-sm-3'>
                                        <img className='comp-icon' src = 'images/xiarch-icon.png' />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
             );
        
}

export default Review;