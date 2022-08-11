import React from 'react'
import Navbar2 from '../../components/navbar/navbar'
// import Slider from '../components/Slider'
// import 'react-slideshow-image/dist/styles.css';
// import { Slide } from 'react-slideshow-image';
import image1 from "../assets/luminous_liquor.jpeg";
import './aboutus.css'
import MapContainer from '../components/MapContainer';
import Contact from '../components/Contact';
import Leftcomp from '../../components/leftcomp/leftcomp';
import Rightcomp from '../../components/rightcomp/rightcomp';
import Real_footer from '../../homepage/components/real_footer';
import { useState, useEffect } from 'react';
import Navbar_loggedout from '../../components/navbar/navbar_loggedout';
export default function AboutUs() {
    const slideImages = [
        {
          url: {image1},
          caption: 'Slide 1'
        },
        
      ];

      const [check, setCheck] = useState(false);


      useEffect(()=> {
        let data = sessionStorage.getItem('myUser')
        data = JSON.parse(data)
    
        if(data==null){
          setCheck(false)
        }else{
          setCheck(true)
        }
    }, [])

    
  return (
    <div>
        <div className="navo">
{(() => {
        if (check==true) {
          return (
            <Navbar2 />
          )
        }
        else {
          return (
            <Navbar_loggedout />
          )
        }
      })()}
     </div>
        <div class="jumbotron check-cover text-white">
    <div class="container py-5 text-center">
        <h2 class="display-4 font-weight-bold">About Us</h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create count nice Bootstrap 4 header with count background image.</p>
        <p class="font-italic">Snippe by
            <count href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </count>
        </p> */}
        {/* <count href="#" role="button" class="btn btn-primary px-5">See All Features</count> */}
    </div>
</div>
        <section className="section_about">
        <div className='container_about'>
            <div className='row'>
                <div className='col-md-12 '>
                    <h3 className='main-heading_about'>Our Business</h3>
                    <div className='underline_about'></div> 
                    <p>
                        Luminous liquor is a family owned liquor store business. It is in CarStairs, alberta.
                        We are planning to expand our business in Calgary. We are opening new store in Inglewood,Calgary Soon.
                        Customer can get many varity products here.

                    </p>

                    <div className="slide-container">
            <h3 className='main-heading_about'>Find Us Here</h3>
                    <div className='underline_about'></div> 

                    <div className='dis'>
            <MapContainer className="mapContainer_about"/> 
            <Contact/>
            </div>
      </div>
                 
                </div>
              
            </div>
           
           
        </div>
        
        </section>

        <Leftcomp />
        <Rightcomp/>
        <Real_footer />
        
    </div>
  )
}
