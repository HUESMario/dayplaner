import React from "react";
import "./Nav.scss";

export class Nav extends React.Component  {
    render()
    {
        switch(this.props.activeNav){  
            case "start":
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point active" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
            case "to-do":
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point active" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
            case "Projects":
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point active" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
            case "important Links":
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point active" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
            case "important Programs":
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point active" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
                case "Pre-Tasks":
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point active" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
            default:
                return (
                    <div id="nav">
                        <div id="To-do" className="nav-point" onClick={() => this.props.changeSite('to-do')}><span>to-do</span></div>
                        <div id="Projects" className="nav-point" onClick={() => this.props.changeSite('Projects')}><span>Projects</span></div>
                        <div id="important-Links" className="nav-point" onClick={() => this.props.changeSite('important Links')}><span>Important Links</span></div>
                        <div id="important-Programs" className="nav-point" onClick={() => this.props.changeSite('important Programs')}><span>Important Programs</span></div>
                        <div id="Pre-Tasks" className="nav-point" onClick={() => this.props.changeSite('Pre-Tasks')}><span>Pre-Tasks</span></div>
                        <div id="Start-nav" className="nav-point active" onClick={() => this.props.changeSite('start')}><span>Start</span></div>
                    </div>
                )
        }
    }
}