import React, { useEffect, useState } from "react";
import "./searchbar.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
//import recent from "./recent";

//use State for searchbar
const Searchbar = () => {
  const navigate = useNavigate();
  //const [text, setText] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/admin/product");
      //console.log(response.data);
      setProducts(response.data);
    };
    loadUsers();
  }, []);

  // console.log(products);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearched(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // useEffect(() => {
  //   const searchInputHandler = async () => {
  //     navigate("/searchresult");
  //   };
  //   searchInputHandler();
  // }, []);

  const searchInputHandler = () => {
    // e.preventdefault();
    navigate("/searchresult/" + searched);
    setSearched("");
    setFilteredData([]);
  };

  const handleKeyDown = event => {

    if (event.key === 'Enter') {
      
      // 👇️ your logic here
      navigate("/searchresult/" + searched);
    setSearched("");
    setFilteredData([]);
    }
  };

  return (
    <div class="col-md-8">
      <div class="d-flex form-inputs">
        {/* <div className="searchicons">
          {searched.length === 0 ? (
            <BsIcons.BsSearch />
          ) : (
            <BsIcons.BsSearch id="clearBtn" onClick={searchInputHandler} />
           )}
        </div> */}

        <input
          type="text"
          class="form-control"
          placeholder="Search Drinks"
          value={searched}
          onChange={handleFilter}
          onKeyDown={handleKeyDown} 
        />
      </div>

      <div className="dataResult">
        {filteredData.slice(0, 10).map((pm) => (
          <a className="dataItem" href={"/product/" + pm.prodId}>
            <p>{pm.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Searchbar;