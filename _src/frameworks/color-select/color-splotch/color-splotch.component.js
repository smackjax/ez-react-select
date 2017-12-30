import React from 'react';
import './color-splotch.css';
export default (props)=>{
    // props.color
    return (
    <div
    style={{backgroundColor: props.color}}
    className={"color-splotch " + props.className || ""} 
    ></div>
    )
}