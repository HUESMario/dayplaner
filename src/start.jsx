import React from "react";
import "./start.scss";

const Greeting = () => {
    const hours = new Date().getHours();
    let greeting;
    let Name = "Mario";
    if(hours < 6)
        {
            greeting = "Good Evening";
        }
        if(hours > 6)
        {
            greeting = "Good Morning";
        }
        if(hours > 12)
        {
            greeting = "Welcome";
        }

        if(hours > 18)
        {
            greeting = "Good Evening";
        }
return (
<div id="Greetings">
    <p>{greeting}, {Name}</p>
    <h2>Let's get to Work.</h2>
</div>
)
}

export const Start = (props) => {
    return (
    <div id="start">
    <Greeting/>
    <div id="tasks"></div>
        
    </div>
    )
}