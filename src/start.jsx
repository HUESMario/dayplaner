import React from "react";
import "./start.scss";

const Greeting = () => {
    const hours = new Date().getHours();
    let greeting;
    const Name = "Mario";
    //from 6 A.M. to 12 A.M. Morning
    //from 12 A.M. to 18 P.M. Noon
    //from 18 P.M. to 6 A.M. Evening
    //earlier then 6 A.M. Evening
    hours < 6 ? greeting = "Good Evening" : hours > 18 ? greeting = "Good Evening" : hours > 12 ? greeting = "Welcome" : hours > 6 ? greeting = "Good Morning" : greeting = "Welcome";  
return (
<div id="Greetings">
    <p>{greeting}, {Name}</p>
    <h2>Let's get to Work.</h2>
</div>
)
}

export const Start = (props) => {
    return (
    <div id="start-Site">
        <Greeting/>
        <div id="tasks">
            <div id="collect-data">
                <div id="what">
                    <label>What: 
                        <input id="What-txt" type="text" placeholder="What"></input>
                    </label>
                </div>
                <div id="who_takes_part">
                    <label>Who takes Part: 
                        <input id="participates-txt" type="text" placeholder="Who takes Part"></input>
                    </label>
                </div>
                <div id="when">
                    <label>When: 
                        <input id="When-txt" type="text" placeholder="When?"></input>
                    </label>
                </div>
                <div id="importance">
                    <label>Importance: 
                        <input id="importance-txt" type="text" placeholder="1 ( very important ) 2 ( important ) 3 ( unimportant )"></input>
                    </label>
                </div>
                <div id="when">
                    <label>Which Program: 
                        <input id="Which Program" type="text" placeholder="Which Program?"></input>
                    </label>
                </div>
                
            </div>
        </div>
    </div>
    )
}