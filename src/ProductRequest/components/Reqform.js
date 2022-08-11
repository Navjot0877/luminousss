import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Reqform() {
  const [feedback, setFeedback] = useState("");
  const [username, setUsername] = useState("");
  const addProductreq = (e) => {
    e.preventDefault();
    axios
      .get("https://luminous-liquor.herokuapp.com/feedbacks/"+ feedback )
      .then(() => {
        alert("Product Request sent Successfully");
        setFeedback("");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <form>
        <fieldset>
          <label>
            <p>User Name</p>
            <input
              name="user name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <p> Product Name</p>
            <textarea
              name="name"
              required
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </label>
        </fieldset>
        <button type="submit" onClick={addProductreq}>
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Reqform;
