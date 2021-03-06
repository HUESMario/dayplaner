import React from "react";
import "./start.sass";

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

const CollectData = (props) => {
    let inputValues = {};
    const processData = e => {
        e.preventDefault();
        let object = {};
        object = inputValues;
        props.addItem(object);
    }
    return (
        <div id="collect-data">
            <form>
                <div id="what">
                    <label>What: 
                        <input id="What-txt" type="text" placeholder="What" onChange={e => inputValues.what = e.target.value}></input>
                    </label>
                </div>
                <div id="who_takes_part">
                    <label>Who takes Part: 
                        <input id="participates-txt" type="text" placeholder="Who takes Part" onChange={e => inputValues.who = e.target.value}></input>
                    </label>
                </div>
                <br/>
                <div id="when">
                    <label>When: 
                        <input id="When-txt" type="text" placeholder="When?" onChange={e => inputValues.when = e.target.value} value={inputValues.when}></input>
                    </label>
                </div>
                <div id="importance">
                    <label>Importance: 
                        <input id="importance-txt" type="text" placeholder="1, 2 or 3" onChange={e => inputValues.importance = parseInt(e.target.value)} value={inputValues.importance}></input>
                    </label>
                </div>
                <button id="send_Task" onClick={processData}>add Task</button>
                <br/>
                <div id="which-program">
                    <label>Which Program: 
                        <input id="Which_Program" type="text" placeholder="Which Program?" onChange={e => inputValues.program = e.target.value} value={inputValues.program}></input>
                    </label>
                </div>
            </form>
        </div>
    )
    
}

const ShowData = (props) => {
    return (
        <table>
        <colgroup>
        <col style={{width:"2%", height:"50px"}}></col>
        <col style={{width:"53%", height:"50px"}}></col>
        <col style={{width:"7%", height:"50px"}}></col>
        <col style={{width:"30%", height:"50px"}}></col>
        <col style={{width:"8%", height:"50px"}}></col>
        </colgroup>
            <caption>Your current Tasks:</caption>
            <thead>
                <tr>
                    <th>id</th>
                    <th>What</th>
                    <th>When</th>
                    <th>Who takes Part</th>
                    <th>Program</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{ __html: props.todoList }}>
                
            </tbody>
        </table>
    )
}

export const Start = (props) => {
    return (
    <div id="start-Site">
        <Greeting/>
        <div id="tasks">
            <CollectData addItem={props.addToDo}/>
            <ShowData todoList={props.todoList}/>
        </div>
    </div>
    )
}