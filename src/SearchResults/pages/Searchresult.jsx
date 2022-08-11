import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import Leftcomp from '../../components/leftcomp/leftcomp';
import Navbar2 from '../../components/navbar/navbar';
import Navbar_loggedout from '../../components/navbar/navbar_loggedout';
import Rightcomp from '../../components/rightcomp/rightcomp';
import axios from "../../homepage/components/axios.js"
import './searchresult.css'
export default function Searchresult() {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    var count=0;
    let param=useParams();
    useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/admin/product");
      //console.log(response.data);
      setProducts(response.data);
    };
    loadUsers();
    },[]); 

    useEffect(() => {
        const newFilter = products.filter((value) => {
            return value.name.toLowerCase().includes(param.word.toLowerCase());
        });
        
        setFilteredData(newFilter);
    }); 
    let length = filteredData.length;
    console.log(filteredData)

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
    <>
    <div>
     
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


<div className='container bo'>

        <div>
        
        
        <div id="heading-foot">
<p id='had-boti'>Search keyword: {param.word}</p>
<p id='had-boti'>Search Results: {length}</p>
{/* {filteredData == 0 ? true : false} */}
{/* <a href="#">View All</a> */}
</div>



{filteredData == 0?
<div className="noproducts">
    <h2>No Products Found</h2>
</div>
:
<div class="container">
<div class="shop-default shop-cards shop-tech">
    <div class="row">
        
    {filteredData.map((pm) => (

        
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
     
     
     <div class="product-buttons mt-4">
         <div class="row align-items-center">
             {/* <div class="col-4"> */}
             {/* <div className="favourite_product">
            {added? (<img src={HeartFilled} className="favFilledIcon_product" onClick={handleAdd}/>) : 
            
            (
         
             
                <img src={Heart} className="favIcon_product" onClick={handleAdd}/>
                
            )}
            
        </div> */}
             {/* </div> */}
             
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
}


</div>

</div>

<Leftcomp />
<Rightcomp />

    </div>
    </>
  )
}
