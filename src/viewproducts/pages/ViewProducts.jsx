import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Navbar2 from '../../components/navbar/navbar';
import Navbar_loggedout from '../../components/navbar/navbar_loggedout';
import axios from "../../homepage/components/axios.js"
import './ViewProducts.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { SchemaTypeOptions } from 'mongoose';

export default function ViewProducts() {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [option,setOption]=useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const param = searchParams.get('category')  
    
    
    useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/admin/product");
      //console.log(response.data);
      setProducts(response.data);
    };
    loadUsers();

    if(param == "All Categories" || param == null){
        setFilteredData(products)
    }
    else{
        const newFilter = products.filter((value) => {
            return value.category == param;
        });
        setFilteredData(newFilter)
    }

    });

    console.log(products)


    // useEffect(() => {
        // const newFilter = products.filter((value) => {
        //     return value.name.toLowerCase().includes(param.word.toLowerCase());
        // });
        
    //     setFilteredData(newFilter);
    // }); 
    // let length = filteredData.length;
    // console.log(filteredData)
    function filteroption(e)
    {
        setOption(e.target.value)
        console.log(option)
        // if(option === "All Categories"){}

        const newFilter = products.filter((value) => {
            return value.category == option;
        });

        // console.log(newFilter)
    }

  return (
    <>
    
    <Navbar_loggedout/>
        <div>
        
        <div id="heading-foot">
            <p>{param == null ? "All products" : "Category: " + param}</p>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="products">All product</Dropdown.Item>
        <Dropdown.Item href="products?category=Wine">Wine</Dropdown.Item>
        <Dropdown.Item href="products?category=Beer">Beer</Dropdown.Item>
        <Dropdown.Item href="products?category=Tequilla">Tequilla</Dropdown.Item>
        <Dropdown.Item href="products?category=Sparkling Wine">Sparkling Wine</Dropdown.Item>
        <Dropdown.Item href="products?category=Sake">Sake</Dropdown.Item>
        <Dropdown.Item href="products?category=Scotch Whisky">Scotch Whisky</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    {/* e=>setOption(e.target.value) */}
    {/* <div>
        <select onChange={filteroption}>
            <option value="All Category">All Categories</option>
            <option value="Wine">Wine</option>
            <option value="Beer">Beer</option>
            <option value="Tequilla">Tequilla</option>
            <option value="Sparkling Wine">Sparkling Wine</option>
            <option value="Sake">Sake</option>
            <option value="Scotch Whisky">Scotch Whisky</option>
        </select>
    </div> */}
{/* <p>Search keyword: {param.word}</p> */}
{/* <p id='had-bot'>Search Results: {length}</p> */}
{/* {filteredData == 0 ? true : false} */}
{/* <a href="#">View All</a> */}
</div>

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
    </div>
    </>
  )
}
