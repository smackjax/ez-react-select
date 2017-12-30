import React from 'react';
import PropTypes from 'prop-types';
import {Select, SelectDropdown, Option} from '../../components/';
import './index.style.css';

// Obviously, this could also be a class
const REPLACE_THIS_NAME = (props)=>{
    const changeMe =()=>{
        alert("<Select> onChange wasn't changed!");
    }
    
    const fakeProp = 2;
    return(
        <Select
        name="formName"
        id="id-for-wrapper"
        className="applied-to-wrapper"
        dropdownClassName="optional-select-dropdown-class"
        optionClassName="applied-to-each-Option"
        onChange={changeMe}
        >
        
            <Option
            className="unique-class-for-Option"
            value="option1"
            placeholder={true/*Need at least one with 'placeholder set'*/}
            selected={(fakeProp === 1)}
            >
                Option 1
            </Option>
            
            <Option
            className="unique-class-for-second-Option"
            value="option2"
            placeholder={false}
            selected={(fakeProp === 2)}
            >
                Selected by fakeProp
            </Option>
            
        </Select>
    )
}

REPLACE_THIS_NAME.propTypes={
    // onChange: PropTypes.isRequired(for example)
}

export default REPLACE_THIS_NAME;