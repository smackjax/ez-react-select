import React from 'react';
import {Select, Option} from '../../index';
import '../_generic-styles/wrapper.css';
import '../_generic-styles/dropdown.css';
import '../_generic-styles/option.css';

const handleBoring = (e)=>{
    console.log("I'm a boring ol' select: ", e.target.value);
}
export default (props)=>{

    return (
        <Select
        onChange={handleBoring}>
            <Option
            value="Boring option 1"
            placeholder
            >
                Option 1
            </Option>
            <Option
            value="Boring option 2"
            >
                Option 2
            </Option>
            <Option
            value="Boring option 3"
            >
                Option 3
            </Option>
        </Select>
    )
}