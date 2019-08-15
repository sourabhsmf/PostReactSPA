import React from "react"
import {render} from "react-dom"
import PostApp from "./PostApp"
import data from "../data/data"
window.React = React

render(
    <div className="main">
        <PostApp/>
    </div>
    ,document.getElementById("react-container")
)