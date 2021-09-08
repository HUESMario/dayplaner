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

const CollectData = () => {
    return (
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
                <br/>
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
                <button id="send_Task">add Task</button>
                <br/>
                <div id="which-program">
                    <label>Which Program: 
                        <input id="Which_Program" type="text" placeholder="Which Program?"></input>
                    </label>
                </div>
        </div>
    )
}

const ShowData = () => {
    return (
        <table>
        <caption>Your current Tasks:</caption>
            <tr>
                <th>id</th>
                <th>What</th>
                <th rowSpan="1">When</th>
                <th>Who takes Part</th>
                <th>Program</th>
            </tr>
            <tr className="important">
                <td>1</td>
                <td>Design Day Planer</td>
                <td>30.08.2021 02:44</td>
                <td>Just you</td>
                <td><button>start Program</button></td>
            </tr>
        </table>
    )
}

export const Start = (props) => {
    return (
    <div id="start-Site">
        <Greeting/>
        <div id="tasks">
            <CollectData/>
            <ShowData/>
        </div>
    </div>
    )
}