import React, { Component } from 'react';
//import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
//import slide_1 from '../images/slide_1.jpg'
//import slide_2 from '../images/slide_2.jpg'
//import slide_3 from '../images/slide_3.jpg'
import '../css/my-style.css'

class Slidingmain extends Component {
    render() {
        return (
            <div className="slider-main">
                <div className="tx-anim-1">
                    <div>
                        Papa The Great
                    </div>
                </div>
                <div className="tx-anim-2">
                    <div style={{ paddingTop: 5 }}>
                        A family management Company
                    </div>
                </div>
                <div className="tx-anim-3">
                    <div style={{ paddingTop: 5 }}>
                        We promise we can do that together to show in this world.
                    </div>
                </div>

            </div>
            /* <Carousel style={{marginTop:80}}>
                 <Carousel.Item>
                     <img
                         className="d-block w-100"
                         src={slide_1}
                         alt="First slide"
                     />
                     <Carousel.Caption  >
                         <div className="slid-bg"> <h3>First slide label</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
                        
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img
                         className="d-block w-100"
                         src={slide_2}
                         alt="Third slide"
                     />
 
                     <Carousel.Caption className="slidT">
                         <h3>Second slide label</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img
                         className="d-block w-100"
                         src={slide_3}
                         alt="Third slide"
                     />
 
                     <Carousel.Caption className="slidT">
                         <h3>Third slide label</h3>
                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
                 </Carousel.Item>
             </Carousel>*/

        )
    }

}

export default Slidingmain;

