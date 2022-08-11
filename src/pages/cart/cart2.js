import Navbar from '../../components/navbar/navbar';
import './cart2.css';
import {useState, useEffect} from "react";
import axios from 'axios'
import bottle from "../../components/images/bottle.png";
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Table from 'react-bootstrap/Table';
import {useLocation} from 'react-router-dom';
import Real_footer from '../../homepage/components/real_footer';
import { set } from 'mongoose';
import { stepButtonClasses } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import LoadingSpinner from "../../LoadingSpinner";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Leftcomp from '../../components/leftcomp/leftcomp';
import Rightcomp from '../../components/rightcomp/rightcomp';

const Cart2  = () => {


  const navigate = useNavigate();
// Declaring UseStates
const location = useLocation();
    const [productInfoList, setproductInfo] = useState([]);
    const [cartList, setCartList] = useState([]);

    const [cartList2, setCartList2] = useState([]);
    const [totalListFaltu, setTotalListFaltu] = useState([]);
    const [totalList, setTotalList] = useState([]);
    const [check, setCheck] = useState(false);

    const [total, setTotal] = useState(1);
    const [total2, setTotal2] = useState(0);
    const [loading, load] = useState(false);


const [tax, setTax] = useState(0)
const [tax2, setTax2] = useState(0)

    const [counter, setCounter] = useState(1);

    const [subCheck, setSubCheck] = useState(0);
    
    const [grand, grandTotal] = useState(0)
    const [grand2, grandTotal2] = useState(0)

    // useEffect(()=> {
    //   axios.get("https://luminous-liquor.herokuapp.com/readcart").then((response)=>{
    //   setCartList(response.data);
      
    //   })
    // }, [])
    
  const[countsub,setCountsub]=useState(0);
    const toComponentB=()=>{

if(total2==0)
      navigate('/pay2',{state:{total:total}});
else
navigate('/pay2',{state:{total:total2}});

        }
const [counti, setCounti] = useState(0)
var voc=0;
var co=0;
  const [sub,setSub]=useState(1);

  
  // const [productInfoList, setproductInfo] = useState([]);
 
  function prodImage(id){
    axios.get("https://luminous-liquor.herokuapp.com/productInfo/" + id).then((response)=>{
    // setproductInfo(response.data);
    // console.log(response.data);
    
    })
  }



    useEffect(()=> {
      chalYaar();
       axios.get("https://luminous-liquor.herokuapp.com/readCart/" + userId).then((response)=>{
      setCartList(response.data);
      load(true)
             
    
      if(cartList.length==0){

        setEmpty(true)
       
      }
      else{
        setEmpty(false)
        
    
      }
      
      
      })

    },)
      

    //  const cartL=()=>
    //  {
    //   cartList.map((index) =>
    //     setSub(sub+(index.price))
    //     )
        
    //  }


    // axios.get("https://luminous-liquor.herokuapp.com/dd/" + userId).then((response)=>{
    //     setTotalListFaltu(response.data);
      
     
    //     })

    //  { Object.keys(totalList).map((key, indx) => (
    //     console.log(totalList[key])
    // ))}

    // setTotalList(Object.keys(totalListFaltu).map((key) => totalListFaltu[key]))
    // console.log(totalList);


    // totalList.map((index) =>
    // setTotal(index.price)
    // )

    // setTotal(totalList[totalList.length - 1]);

    // console.log(total)

        // alert(totalList)
        // console.log(totalList)




    // useEffect(() => {
    //   setTotalList(Object.keys(totalListFaltu).map((key) => totalListFaltu[key]))

    // setTotal(totalList[totalList.length - 1]);
    // }, [total])

    // var vali;
    
//     useEffect(()=> {
//       // alert("entered")
//       const loadUsers = async () => {
//       const response =  await axios.get("https://luminous-liquor.herokuapp.com/dd/" + userId)

      
// // setTotal(Object.keys(response.data).map((key) => response.data[key])[Object.keys(response.data).map((key) => response.data[key]) - 1])

//         // setTotalListFaltu(response.data);
//         // alert("TotalFaltu - " + totalListFaltu)


//         setTotalList(Object.keys(response.data).map((key) => response.data[key]))
//         // alert("TotalList - "+ totalList)
//         // alert("TotalList - " + totalList)


// // console.log(totalListFaltu)
//  setTotal(totalList[totalList.length - 1]);
// //  alert("Total - "+ total)
// //  vali = total;
// // setTax(total * 0.05)
// // grandTotal(total + tax + 5)
// // console.log(total)
 
// }


// loadUsers();
// })

var hi = 1;

function chalYaar(){
  // alert("ah geya")


  axios.get("https://luminous-liqour2.herokuapp.com/dd/" + userId).then((response)=>{

  
// setTotal(Object.keys(response.data).map((key) => response.data[key])[Object.keys(response.data).map((key) => response.data[key]) - 1])

    // setTotalListFaltu(response.data);
    // alert("TotalFaltu - " + totalListFaltu)


    setTotalList(Object.keys(response.data).map((key) => response.data[key]))
    // alert("TotalList - "+ totalList)
    // alert("TotalList - " + totalList)


// console.log(totalListFaltu)
setTotal((totalList[totalList.length - 1]).toFixed(2));
hi = total;


  // alert("Total - "+ total)
  // alert("hi - "+ hi)
//  vali = total;
// setTax(total * 0.05)
// grandTotal(total + tax + 5)
// console.log(total)
}
  )}






// useEffect(() => {
//   const loadUsers = async () => {
//     const response = await axios.get("/admin/product");
//     //console.log(response.data);
//     setProducts(response.data);
//   };
//   loadUsers();
// }, []);


    
      


    

    const [bakwas, setBakwas] = useState(0);
    const [oldId, setOldId] = useState(0);
    const [naam, setNaam] = useState('');
    
    function updateSub(prodId){
   

//       setBakwas(
//         cartList.map((item) =>
//         {if (prodId==item.prodId) {
//           return (
//         // prodId === item.prodId ? (item.subTotal):()
// item.subTotal
//         )
//           }}
//         )
//           );

          // alert(bakwas)


          // pls(prodId)
          // alert(prodId)


          // if(bakwas==0){
          //   alert("first")
            
          //       setCartList2(cartList2 =>
          //         cartList2.map((item) =>
          //         prodId === item.prodId ? {...item, subTotal: item.subTotal* parseInt(item.quantities)}:item
                  
          //         )

          //           );


                      
          //       }

          //       else{
          //           if(oldId!==prodId)
          //             {
          //               alert("first")
            
          //               setCartList2(cartList2 =>
          //                 cartList2.map((item) =>
          //                 prodId === item.prodId ? {...item, subTotal: item.subTotal* parseInt(item.quantities)}:item
                          
          //                 )
        
          //                   );
          //             }


          //             else{


          //         alert("other")
          //         setCartList2(cartList2 =>
          //           cartList2.map((item) =>
          //           prodId === item.prodId ? {...item, subTotal: bakwas* parseInt(item.quantities)}:item
          //           )
          //             );
               
          //             setNaam(prodId+'abc');
          //             setOldId(prodId+'abc');


          //           }
          //         }


                  }


    function updateSub2(prodId){

      if(bakwas==0){
        // alert(bakwas)
            setCartList2(cartList2 =>
              cartList2.map((item) =>
              prodId === item.prodId ? {...item, subTotal: item.subTotal* parseInt(item.quantities)}:item
              )
                );




            }
            else{
              setCartList2(cartList2 =>
                cartList2.map((item) =>
                prodId === item.prodId ? {...item, subTotal: bakwas* parseInt(item.quantities)}:item
                )
                  );
              }
            }

            const pls = (prodId) => {
              axios.get("https://luminous-liquor.herokuapp.com/productcartprice/" + prodId).then((response)=>{
                response.data.map((index) =>
                setSubCheck(index.price)
        
                )
        
        
                  })
            
                 
            }
      
      
      
          
          const [filteredData, setFilteredData] = useState([]);
          const [counter2, setCounter2] = useState(0);
          const [counter3, setCounter3] = useState(2);
         const [realQuantity, setRealQuantity] = useState([])
         const [base, setBase] = useState([])


        var count;

 const handleCounterAdd = (prodId) => {
   
  var z = 1;
             

  var b = 0;
 
  setCounter2(100)



  setBakwas(cartList.map((item) => {
    if(prodId === item.prodId)
   return item.price
  }).join(''))

  cartList2.map((index) => {
    if(prodId == index.prodId)
 return count = index.quantities
  })

      if(check)
      {

   
if(count<9)
{
        // alert(count)
       axios.get("https://luminous-liquor.herokuapp.com/productcartprice/" + prodId).then((response)=>{
      return(
        
        
                response.data.map((index) =>
               
                //  alert(index.price),
                setTotal2(((total2 - (count-1)*(index.price)) + count*(index.price) ).toFixed(2)),
                setTax2((total2 * 0.05).toFixed(2)),
      grandTotal2(tax2+total2+5)
      )

      
      // alert(tax2)
     
      
      )
   })
  //  setTax2(total2 * 0.05)
 

              setCartList2(cartList =>
                cartList.map((item) =>
                prodId === item.prodId ? {...item, quantities: (parseInt(parseInt(item.quantities) + parseInt((parseInt(item.quantities) < 10 ? 1:0 )))),
                   subTotal: parseFloat((parseInt(item.quantities) + 1) * base)}:item
                
                )
                  );

                  setCounter3(counter3+1)
                }
  }
  else{
    setTest(false)
    setCartList2(cartList)
    
setCartList2(cartList =>
  cartList.map((item) =>
  prodId === item.prodId ? 
  {...item, quantities: parseInt(parseInt(item.quantities) + parseInt((parseInt(item.quantities) < 10 ? 1:0)))}:item
  )
    );

    
      z =  2
      
  
    //  alert("now")
    // alert(z)

    axios.get("https://luminous-liquor.herokuapp.com/productcartprice/" + prodId).then((response)=>{
      return(
        // alert("in"),
                response.data.map((index) =>
                
                setTotal2(((total - index.price) + z*(index.price) ).toFixed(2))

                ),
                setTax2((total * 0.05).toFixed(2)),
                grandTotal2(tax+total+5)
      )
      
   
              })
              // alert(total2)
             
              setCounter3(counter3+1)
    setCheck(true)
   
  }

  
 
    }

    const handleSub = (prodId) => {
      // alert("in")


      if(check)
      {
        // alert("in1")
      setCartList2(cartList =>
        cartList.map((item) =>
        prodId === item.prodId ? {...item, quantities: parseInt(parseInt(item.quantities) - parseInt((parseInt(item.quantities) > 1 ? 1:0)))}:item
        )
          );

  // updateSub2(prodId)

  // alert("in1 - a")
  var count = 0;
  cartList2.map((index) => {
    if(prodId == index.prodId)
 return count = index.quantities
  })

  // alert("in1 - b")
  if(count>1)
{
  axios.get("https://luminous-liquor.herokuapp.com/productcartprice/" + prodId).then((response)=>{
    return(
      // alert("in"),
     
              response.data.map((index) =>
             
              // alert(index.price)
              // setTotal2( count*(index.price) -(total - (count-1)*(index.price)) )
              setTotal2(((total2 - (count-1)*(index.price)) + (count-2)*(index.price) ).toFixed(2)),
              setTax2((total2 * 0.05).toFixed(2)),
              grandTotal2(tax2+total2+5)
             

    )
    
   

    
    
    
    )
 })

}

        
      }
      else{
        
        alert("in2")
        setCheck(true)
        setCartList2(cartList)

      setCartList2(cartList =>
        cartList.map((item) =>
        prodId === item.prodId ? {...item, quantities: parseInt(parseInt(item.quantities) - parseInt((parseInt(item.quantities) > 1 ? 1:0)))}:item
        )
          );
          // updateSub2(prodId)

          if(count>1)
          {
          axios.get("https://luminous-liquor.herokuapp.com/productcartprice/" + prodId).then((response)=>{
            return(
              
                      response.data.map((index) =>
                     
                      // alert(index.price)
                      setTotal2( count*(index.price) -(total - (count-1)*(index.price)) )
                     
            ),

            setTax2((total2 * 0.05).toFixed(2)),
            grandTotal2(tax2+total2+5)
            
            )
         })

         
        }

        
      }
      
      // updateQuantity();
    }


    const [userId, setuserId] = useState();

    useEffect(()=> {
      let data = sessionStorage.getItem('myUser')
      data = JSON.parse(data)
     
      if(data!=null){
        setuserId(data._id);
       
        }
    
    
    }, [])

    const [use, setUse] = useState([])

    function removeMe(prodId){



      axios.post("https://luminous-liquor.herokuapp.com/delCart/"+prodId+'/'+userId)
      axios.get("https://luminous-liquor.herokuapp.com/readCart/" + userId).then((response)=>{
        setCartList(response.data);



     
        })

        axios.get("https://luminous-liquor.herokuapp.com/productinfo/" + prodId).then((response)=>{
        setUse(response.data);
        // alert("entered")
        })

        axios.get("https://luminous-liqour2.herokuapp.com/dd/" + userId).then((response)=>{

  
// setTotal(Object.keys(response.data).map((key) => response.data[key])[Object.keys(response.data).map((key) => response.data[key]) - 1])

    // setTotalListFaltu(response.data);
    // alert("TotalFaltu - " + totalListFaltu)


    setTotalList(Object.keys(response.data).map((key) => response.data[key]))
    // alert("TotalList - "+ totalList)
    // alert("TotalList - " + totalList)


// console.log(totalListFaltu)
setTotal((totalList[totalList.length - 1]).toFixed(2));
hi = total;


  // alert("Total - "+ total)
  // alert("hi - "+ hi)
//  vali = total;
// setTax(total * 0.05)
// grandTotal(total + tax + 5)
// console.log(total)
}
  )


   
      //  alert(total)
        window.location.replace("https://luminous-liquor-capstone.web.app/cart")




    }
  



    // useEffect(()=> {
    //     axios.get("http://localhost:4010/readCart").then((response)=>{
    //     setCartList(response.data);
    //     })
        
    // }, [cartList.length])

    const [subTotal, setSubTotal] = useState(25.98);
    const [targetValue, setTargetValue] = useState(1);
   

    const [test,setTest] = useState(true);
    const [chal, setChal] = useState(0)

    const [empty, setEmpty] = useState(true);

// function ahgeya(){

//   if(chal==0){
//   axios.get("https://luminous-liquor.herokuapp.com/dd/" + userId).then((response)=>{
//     setTotalListFaltu(response.data);
//   // console.log(totalListFaltu)
//   setTotalList(Object.keys(totalListFaltu).map((key) => totalListFaltu[key]))
// //  alert(totalList);

// setTotal(totalList[totalList.length - 1]);

//   setChal(1)


//     })
//   }
// }


    return  loading ? ( 
      
    <div >
  
<Navbar />




<div class="jumbotron check-cover text-white">
    <div class="container py-5 text-center">
        <h2 class="display-4 font-weight-bold">Cart</h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create count nice Bootstrap 4 header with count background image.</p>
        <p class="font-italic">Snippe by
            <count href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </count>
        </p> */}
        {/* <count href="#" role="button" class="btn btn-primary px-5">See All Features</count> */}
    </div>
</div>






{empty? (

<div>
    <div className='emptyMessage'>
     
    Your cart is empty
   
</div>


<div className="kt">
<a href="/homepage">
+ Add your first product
</a>
    </div>



    <div className="ikti">
    <a href="/homepage">
+ Add your first product
</a>
    </div>

    </div>
    ) : 
     (

<div>
<div class="container and">
  <div class="row asd">
						<div class="col-12 col-md-10 hh-grayBox pt45 pb20">
							<div class="row justify-content-between">
								<div class="order-tracking completed">
									<span class="is-complete"></span>
									<p>Cart<br></br></p>
								</div>
								<div class="order-tracking">
									<span class="is-complete"></span>
									<p>Payment<br></br></p>
								</div>
								<div class="order-tracking">
									<span class="is-complete"></span>
									<p>Confirmation<br></br></p>
								</div>
							</div>
						</div>
					</div>
</div>

    
<div className='conta'>




<div className="let_pay">
<label id="yourt">Item to purchase</label>
<div className="oute_left">






    

  <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove</label>
    {/* <label class="product-line-price">Total</label> */}
  </div>



  {(() => {

if(test)
{




        if (check==false) {
          return (
            cartList.slice(0, 10).map((pm) => (
              // <div className="drop-navbar">


<div class="product-pro">
<div class="product-image">




<img src={bottle}></img>
</div>
<div class="product-details">
<div class="product-title">{pm.name}</div>
<p class="product-description">{pm.description}</p>
</div>
<div class="product-price">{pm.price}</div>
<div class="product-quantity">
<div>

<button className="plus_but float-left-child"  onClick={()=>{handleCounterAdd(pm.prodId)}}>+</button>
<label className="counter_but float-left-child">{pm.quantities}</label>
<button className="minus_but" onClick={()=>{handleSub(pm.prodId)}}>-</button>
</div>
</div>
<div class="product-removal">
<button class="remove-product" onClick={()=>{removeMe(pm.prodId)}}>
  Remove
</button>
</div>
{/* <div class="product-line-price">{pm.subTotal}</div> */}
</div>

))


          )
        }
        else {
          return (
            cartList2.slice(0, 10).map((pm) => (
              // <div className="drop-navbar">


<div class="product-pro">
<div class="product-image">
<img src={pm.image}></img>
</div>
<div class="product-details">
<div class="product-title">{pm.name}</div>
<p class="product-description">{pm.description}</p>
</div>
<div class="product-price">{pm.price}</div>
<div class="product-quantity">
<div>

<button className="plus_but float-left-child" onClick={()=>{handleCounterAdd(pm.prodId)}}>+</button>
<label className="counter_but float-left-child">{pm.quantities}</label>
<button className="minus_but" onClick={()=>{handleSub(pm.prodId)}}>-</button>
</div>
</div>
<div class="product-removal">
<button class="remove-product" onClick={()=>{removeMe(pm.prodId)}}>
  Remove
</button>
</div>
{/* <div class="product-line-price">{pm.subTotal}</div> */}
</div>

))

          )
        }
      }
     
     else{

      return (
        cartList2.slice(0, 10).map((pm) => (
          // <div className="drop-navbar">


<div class="product-pro">
<div class="product-image">




<img src={bottle}></img>
</div>
<div class="product-details">
<div class="product-title">{pm.name}</div>
<p class="product-description">{pm.description}</p>
</div>
<div class="product-price">{pm.price}</div>
<div class="product-quantity">
<div>

<button className="plus_but float-left-child" onClick={()=>{handleCounterAdd(pm.prodId)}}>+</button>
<label className="counter_but float-left-child">{pm.quantities}</label>
<button className="minus_but" onClick={()=>{handleSub(pm.prodId)}}>-</button>
</div>
</div>
<div class="product-removal">
<button class="remove-product" onClick={()=>{removeMe(pm.prodId)}}>
Remove
</button>
</div>
{/* <div class="product-line-price">{pm.subTotal}</div> */}
</div>

))

      )


      
     }
     
     
      }
      
      )()}

  


</div>



<div className="rt_pay">


{/* <div className="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">${subTotal}</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">${tax}</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">${shipping}</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">${grandTotal}</div>
    </div>
  </div> 

{/* 
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    ...
  </div>
</div> */}


{/* <label id="yourt">Your Total</label> */}
{/* <Table responsive> */}
      


{(counter2==0)? (
  <div>
  <div id="ct" onClick={()=>{toComponentB()}}>

<a>
Subtotal ${total}
</a>
</div>

<div id="ctr">

<a onClick={()=>{toComponentB()}}>
Subtotal ${total}
</a>
</div>
</div>

):(

  <div>
<div id="ct" onClick={()=>{toComponentB()}}>

<a>
Subtotal ${total2}
</a>
</div>

<div id="ctr">

<a onClick={()=>{toComponentB()}}>
Subtotal ${total2}
</a>
</div>
</div>
)}



{/* 
{(counter2 ==0)? (
 <Table responsive>
     <thead>

        <tr>
          <th>Subtotal</th>
          <td>{total}</td>
        </tr>
       </thead>


<thead>
<tr>
  <th>Tax</th>
  <td>{tax}</td>
</tr>
</thead>

<thead>
        <tr>
          <th>Shipping</th>
          <td>$5</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Total</th>
          <td>${grand}</td>
        </tr>
      </thead>
      

</Table>

        ):(
<Table responsive>

<thead>
          <tr>
          <th>Subtotal</th>
          <td>{total2}</td>
        </tr>
        </thead>
<thead>
<tr>
  <th>Tax</th>
  <td>{tax2}</td>
</tr>
</thead>

<thead>
        <tr>
          <th>Shipping</th>
          <td>$5</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Total</th>
          <td>${grand2}</td>
        </tr>
      </thead>
      

</Table >

        )}
          
       */}
     


     
     



<div>

 {/* <GooglePayButton

environment='TEST'
paymentRequest={{
  apiVersion: 2,
  apiVersionMinor:0,
 allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN4T7S4K3TA4',
      merchantName: 'Luminous liquor',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: googlePay,
      currencyCode: 'CAD',
      countryCode: 'CA',
    },
    shippingAddressRequired: true,
    callbackIntents: ['PAYMENT_AUTHORIZATION']
   }}
   onLoadPaymentData={paymentRequest => {
     alert('Sucess', paymentRequest);
   }}
   onPaymentAuthorized={paymentData => {
     alert("Payment Authorized Success", paymentData)
     return {transactionState: 'success'}
   }}
   existingPaymentMethodRequired='false'
   buttonColor='white'
   buttonType='Buy'
     /> */}


{/* 
<GooglePayButton className='payBut'
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN4T7S4K3TA4',
      merchantName: 'Luminous liquor',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
    shippingAddressRequired: true,
  }}

  
  onLoadPaymentData={paymentRequest => {
    alert("Success");
  }}
/>
*/}

</div> 



{/* 
  <GooglePlayButton
environment='TEST'
paymentRequest={{
  apiVersion: 2,
  apiVersionMinor:0,
 allowedPaymentsMethods: [
{
  type: 'CARD',
  parameters: {
    allowedPaymentsMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    allowedCardNetworks: ['MASTERCARD', 'VISA'],
  },
  tokenizationSpecification: {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      gateway: 'example',
      gatewayMerchantId: 'BCR2DN4T7S4K3TA4',

    }
  }
}
 ],
 merchantInfo: {
   merchantId: 'BCR2DN4T7S4K3TA4',
   merchantName: 'Guryuvraj',
 },
 transactionInfo:{
   totalPriceStatus: 'FINAL',
   totalPriceLabel: 'Total',
   totalPrice: '1',
   currencyCode: 'CAD',
   countryCode: 'ca',
 },
 shippingAddressRequired: true,
 callbackIntents: ['PAYMENT_AUTHORIZATION']
}}
onLoadPaymentData={paymentRequest => {
  alert('Sucess', paymentRequest);
}}
onPaymentAuthorized={paymentData => {
  alert("Payment Authorized Success", paymentData)
  return {transactionState: 'success'}
}}
existingPaymentMethodRequired='false'
buttonColor='black'
buttonType='Buy'
  ></GooglePlayButton> */}

</div>

{/*  
<div className="rt_pay">
  <Table responsive>
      <thead>
        <tr>
          <th>Subtotal</th>
          <td>${subTotal}</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Tax</th>
          <td>${tax}</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Shipping</th>
          <td>${shipping}</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Total</th>
          <td>${grandTotal}</td>
        </tr>
      </thead>
      
    </Table>

<div>






</div>


  </div> */}
      
      








</div>


</div>

</div>

)
}

<Leftcomp />
<Rightcomp />

<Real_footer />
</div>
    
    ):(
      <LoadingSpinner />
    )
}

export default Cart2;



{/* 

<GooglePayButton className='payBut'
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN4T7S4K3TA4',
      merchantName: 'Luminous liquor',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
    shippingAddressRequired: true,
  }}

  
  onLoadPaymentData={paymentRequest => {
    alert("Success");
  }}
/> */}