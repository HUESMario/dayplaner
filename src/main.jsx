import React from "react";
import { Start } from "./start";
import { ToDo } from "./ToDo";
import { Projects } from "./Projects";
import { ImpPrograms } from "./importantPrograms";
import { ImpLinks } from "./importantLinks";
import { PreTasks } from "./preTasks";

export class Main extends React.Component
{
    render()
    {
        switch(this.props.activePage)
        {
            case "start":
                return <Start todoList={this.props.todoList} addToDo={this.props.addToDo}/>;
            case "to-do":
                return <ToDo/>;
            case "Projects":
                return <Projects/>;
            case "important Programs":
                return <ImpPrograms/>;
            case "important Links":
                return <ImpLinks/>;
            case "Pre-Tasks":
                return <PreTasks/>;
            default:
                return <Start/>;
        }
    }
}