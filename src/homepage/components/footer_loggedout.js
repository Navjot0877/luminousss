import React from 'react';
import './footer_loggedout.css';
import Recent from './Recent';
import History from './History';
import wine from '../../components/images/wine.png'
import checkl from '../../components/images/checklist.png'
import axios from 'axios'
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cart from '../../components/images/cart.png'
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Heart from "../../components/images/heart.png";
import HeartFilled from "../../components/images/heartFilled.png";
import Axios from 'axios'
import Leftcomp from '../../components/leftcomp/leftcomp'
import Rightcomp from '../../components/rightcomp/rightcomp'
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Real_footer from './real_footer';
import SupportChat from '../../supportChat/page/SupportChat'


const Footer_loggedout = () => {

  
    const [filteredData, setFilteredData] = useState([]);
    const [filteredData2, setFilteredData2] = useState([]);
    const [added, setAdd] = useState(false);
    const [addedFav, setAddFav] = useState([]);


    useEffect(()=> {


           axios.get("https://luminous-liquor.herokuapp.com/productInfo2").then((response)=>{
            setFilteredData(response.data);
           
            })
       
    }, [filteredData])

    useEffect(()=> {


        axios.get("https://luminous-liquor.herokuapp.com/productInfo3").then((response)=>{
         setFilteredData2(response.data);
        
         })
    
 }, [filteredData2])



    


    const handleAdd = () =>{
        if (added){
         Axios.post("https://luminous-liquor.herokuapp.com/delFav", {productID: 1, userId: 2})
            setAdd(false);
      
            
            
        } 
        else{
            setAdd(true);
             Axios.post("https://luminous-liquor.herokuapp.com/favourite")
             // Axios.post("http://localhost:3010/product")
          
        }
     };

     function prodDetails(id){
         alert(id)
     }


    return (<div className='foot'>





<div id="recent-section">
<div id="heading-foot">
    <p id='had-bot'>Recent Arrivals</p>
    
  </div>



  <div class="container">
    <div class="shop-default shop-cards shop-tech">
        <div class="row">
            
        {filteredData.slice(0, 6).map((pm) => (
 <div class="col-md-3">
 <div class="block dd no-border  z-depth-2-top z-depth-2--hover">
     <div class="block-image">
         <a href={"/product/"+pm.prodId}>
             <img src={pm.image} height={200} class="img-center"></img>
         </a> 
         <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
     </div> 

     <div class="block-body text-center">
         <h3 class="heading heading-5 strong-600 text-capitalize">
             <a href="#" className="proTitle">
                 {pm.name}
             </a>
         </h3>
         <p class="product-description">
             ${pm.price}
         </p>
         
         
         <div class="product-buttons mt-4" onClick={"/product/"+pm.prodId}>
             <div class="row align-items-center">
                 
                 
                 <div class="col-12">
                
                
                     <a href={"/product/"+pm.prodId} class="btn btn-block btn-primary btn-circle btn-icon-left">
                         View Product
                     </a>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>

        ))}
           


















        </div>
    </div>
</div>

</div>



<div id="recent-section">
<div id="heading-foot">

    <p id='had-bot'>Our Products <a href="/products" className='allButi'>(View All)</a></p>
    
  </div>


  <div class="container">
    <div class="shop-default shop-cards shop-tech">
        <div class="row">
            
        {filteredData2.slice(0, 8).map((pm) => (
 <div class="col-md-3">
 <div class="block dd no-border  z-depth-2-top z-depth-2--hover">
     <div class="block-image">
         <a href="#">
             <img src={pm.image} className='imgi' height={200} class="img-center"></img>
         </a>
        </div>

     <div class="block-body text-center">
         <h3 class="heading heading-5 strong-600 text-capitalize">
             <a href="#" className="proTitle">
                 {pm.name}
             </a>
         </h3>
         <p class="product-description">
             ${pm.price}
         </p>
         
         
         <div class="product-buttons mt-4" onClick={"/product/"+pm.prodId} >
             <div class="row align-items-center">
                 
                 
                 <div class="col-12">
                
                
                 <a href={"/product/"+pm.prodId} class="btn btn-block btn-primary btn-circle btn-icon-left">
                         View Product
                     </a>

                       </div>
             </div>
         </div>
     </div>
 </div>
</div>

        ))}
           
           </div>


          
    </div>




</div>






  </div>





      

<Leftcomp />
<Rightcomp />



    <Real_footer />
 








    </div>
)}
export default Footer_loggedout;