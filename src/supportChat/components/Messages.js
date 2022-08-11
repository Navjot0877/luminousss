import React, { useState, useEffect } from "react"
import './Messages.css'


export default function Messages({message, own}){

    const[currentChat, serCurrentChat] = useState([])
    const[messages, serMessages] = useState([])
    
    return(
        // <div className={own ? "message own": "message"}>
        //     <div className="message-top">
        //         <p>{message.text}</p>
        //     </div>
        //     {/* <div className="message-bottom">
        //     </div> */}
        // </div>

<div
style={{ animationDelay: `0.8s` }}
className={own ? "own": "message"}
>
<div className="chat__item__content">
  <div className="chat__msg">{message.text}</div>

</div>
</div>
    )
}

