import Navbar from '../../components/navbar/navbar';
import './confirmation.css';
import {useState, useEffect} from "react";
import Axios from 'axios'
import image from "../../components/images/wine.png";
import Heart from "../../components/images/heart.png";
import HeartFilled from "../../components/images/heartFilled.png";
import GooglePayButton from "@google-pay/button-react";
import React from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useLocation} from 'react-router-dom';
import Leftcomp from '../../components/leftcomp/leftcomp'
import Rightcomp from '../../components/rightcomp/rightcomp'
import { Button } from '@mui/material';
import Navbar_private from '../../components/navbar/navbar_private';
import { useNavigate } from "react-router-dom";



const Confirmation = () => {

//Variables
    const total = 0;
    const a = 0;
  
    const location = useLocation();
    const navigate = useNavigate();

//Fetching the Parametrs
    let param = useParams();
    

   


// Declaring UseStates
    const [productInfoList, setproductInfo] = useState([]);
    const [postalList, setpostalList] = useState([]);
    const [mypost, setpostal] = useState('');
    const [feedback, setfeedback] = useState('');
  
    const [myEmail, setEmail] = useState('');
    const [readPost, setPost] = useState('');
    const [address, setAddress] = useState('');
    const [cartList, setCartList] = useState([]);
    const [addedFav, setAddFav] = useState([]);
    const [counter, setCounter] = useState(parseInt(param.quantity));
    const [price, setPrice] = useState(19.9);
    const [high, setHigh] = useState(0);
    const [dis, setDis] = useState(true);
    const [can, setCan] = useState(false);

   



    const [userName, setuserName] = useState('');
useEffect(()=> {
  let x = sessionStorage.getItem('pay')
    
  if(x === 'money'){
  
  let data = sessionStorage.getItem('myUser')
  data = JSON.parse(data)
  setuserName (data.name);
  setEmail(data.email);
  }
  else{
    navigate("/")
  }



}, [])
// function prices(){
// productInfoList.map((val, key) =>
// // Only do this if items have no stable ID

// setPrice(val.price)

// );
  


// }



const handleChange = event => {
  setpostal(event.target.value);
};


const handleAddress = event => {
 
  if(address.length!=0 && readPost.length!=0 && can){
    setDis(false);
      }
      else if(((address.length-2)==0)|| ((readPost.length-2)==0) || !can){
        setDis(true);
        
      }
      else{
        setDis(true);
      }
  setAddress(event.target.value);

};


const handlePostal = event => {
  setPost(event.target.value);




};





function check(){
  
    Axios.get("https://luminous-liquor.herokuapp.com/readpostal/" + readPost).then((response)=>{
    setpostalList(response.data);
    
  
  
  
    })
 
  
  if(postalList.length == 0)
  {
    alert(postalList)
    setfeedback("Sorry, we don't deliver to this location")
setCan(false)
  }
  else{
    alert(postalList)
    setCan(true)
    postalList.map((val, key) =>
  // Only do this if items have no stable ID
 
  setfeedback("We will deliver in " + val.time + " hours")

);

  }

  if(address.length!=0 && readPost.length!=0 && can){
    setDis(false);
      }
      else if(((address.length-1)==0)|| ((readPost.length-1)==0) || !can){
        setDis(true);
        
      }
      else{
        setDis(true);
      }

}



var payPrice = "25.98";





    

 



    return (
    <div>
  
<Navbar_private />

<div class="jumbotron bg-tover text-white">
    <div class="container py-5 text-center">
        <h2 class="display-4 font-weight-bold"><div>Confirmation</div></h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <p class="font-italic">Snippe by
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p> */}
        {/* <a href="#" role="button" class="btn btn-primary px-5">See All Features</a> */}
    </div>
</div>


<div class="container asd">
  <div class="row asd">
						<div class="col-12 col-md-10 hh-grayBox pt45 pb20">
							<div class="row justify-content-between">
								<div class="order-tracking completed">
									<span class="is-complete"></span>
									<p>Cart<br></br></p>
								</div>
								<div class="order-tracking completed">
									<span class="is-complete"></span>
									<p>Payment<br></br></p>
								</div>
								<div class="order-tracking completed">
									<span class="is-complete"></span>
									<p>Confirmation<br></br></p>
								</div>
							</div>
						</div>
					</div>
</div>




<div className='contia'>



  <p>Hi <span className="red">
  {userName} 
</span>, we have sent the receipt of your recent order at {myEmail}</p>
<Button className='butLast'></Button>







    





           


        





</div>
<Leftcomp />
<Rightcomp />


</div>
    )
}

export default Confirmation;