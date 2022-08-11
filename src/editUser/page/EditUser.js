import Header from "../components/Header";
import Input from "../components/Input";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditUser.css";
import Navbar from "../../components/navbar/navbar"
import Real_footer from "../../homepage/components/real_footer";


const EditUser = () => {

  const navigate = useNavigate()


  useEffect(()=> {
      let data = sessionStorage.getItem('myUser')
      data = JSON.parse(data)
      console.log(data)
      if(data==null){
        navigate("/login")
      }else{
        navigate("/edituser")
      }
  }, [])

  return (

    
    <div className="ediUser-page">
       <Navbar />
      <div class="jumbotron check-cover text-white">
    <div class="container py-5 text-center">
        <h2 class="display-4 font-weight-bold">Edit Profile</h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create count nice Bootstrap 4 header with count background image.</p>
        <p class="font-italic">Snippe by
            <count href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </count>
        </p> */}
        {/* <count href="#" role="button" class="btn btn-primary px-5">See All Features</count> */}
    </div>
</div>

      
     <div className="contai">
      <Input />
      
      </div>

      <Real_footer />
    </div>
  );
};

export default EditUser;
