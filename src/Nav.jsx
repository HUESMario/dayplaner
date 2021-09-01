import React from "react";
import "./Nav.scss";

export class Nav extends React.Component  {
    constructor(props)
    {
        super(props);
        this.state = {activeNav: "start"};
    }

    render()
    {
        switch(this.state.activeNav)
        {  
            case "start":
                return (
                <div id="nav">
                    <div id="To-do" className="nav-point"><span>to-do</span></div>
                    <div id="Projects" className="nav-point"><span>Projects</span></div>
                    <div id="important-Links" className="nav-point"><span>Important Links</span></div>
                    <div id="important-Programs" className="nav-point"><span>Important Programs</span></div>
                    <div id="Pre-Tasks" className="nav-point"><span>Pre-Tasks</span></div>
                    <div id="Start" className="nav-point active"><span>Start</span></div>
                </div>
                )
            default:
                return (
                    <div id="nav">
                            <div id="To-do" className="nav-point"><span>to-do</span></div>
                            <div id="Projects" className="nav-point"><span>Projects</span></div>
                            <div id="important-Links" className="nav-point"><span>Important Links</span></div>
                            <div id="important-Programs" className="nav-point"><span>Important Programs</span></div>
                            <div id="Pre-Tasks" className="nav-point"><span>Pre-Tasks</span></div>
                            <div id="Start" className="nav-point active"><span>Start</span></div>
                        </div>
                )
        }
    }
}