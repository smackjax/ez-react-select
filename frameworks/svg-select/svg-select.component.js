import React from 'react';
import * as svgSrc from './svgs/index';
import {Select, Option} from '../../index';
import './svg-select.css';
export default ()=>{
    const handleChange=(e)=>{
        const newVal = e.target.value;
        console.log("svg option value: ", newVal);
    }

    const handleSnowflake=(e)=>{
        const newVal = e.target.value;
        console.log("I'm a special snowflake: ", newVal);
        console.log("Unfortunately, I'm also useless for closing the dropdown.");
    }

    return (
        <Select
        id="svg-type-select"
        className="svg-type-select-wrapper"
        dropdownClassName="color-type-select-dropdown"
        optionClassName="svg-type-select-item"
        onChange={handleChange}
        >
        
            <Option
            value="square"
            placeholder
            selected
            >
                <img src={svgSrc.square} alt="I'm a square." />
            </Option>
            <hr/>
            <Option
            value="circle"
            >
                <img src={svgSrc.circle} alt="I'm a circle." />
            </Option>
            <hr/>
            <Option
            value="No one gets me."
            onChange={handleSnowflake}
            >
                <img src={svgSrc.snowflake} alt="The depth of gravity is the impetus of my perpetual sorrow." />
            </Option>
            <hr/>
            <Option
            value="gear"
            >
                <img src={svgSrc.gear} alt="I'm a gear." />
            </Option>
            <hr/>
            <Option
            value="triangle"
            >
                <img src={svgSrc.triangle} alt="I'm a triangle." />
            </Option>
        </Select>
    )
}