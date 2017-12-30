import React from 'react';
import PropTypes from 'prop-types';
import {Select, Option} from '../../components/';
import ColorSplotch from './color-splotch/color-splotch.component';

// Generic styles make select behave like a typical dropdown
import '../_generic-styles/wrapper.css';
import '../_generic-styles/dropdown.css';
import '../_generic-styles/option.css';
// Custom css
import './color-select.css';

class ColorSelect extends React.Component{

    state={
        selectedValue: ''
    }

    handleColor = function(e){
        console.log("Color changed: ", e.target.value);
        this.setState({selectedValue: e.target.value});
    }

    render(){
        // I use the noPlaceholder prop so I can use this same
        // select menu in multiple places both with and without having
        // something selected by default
        const noPlaceholder = this.props.noPlaceholder;
        const type = this.state.selectedValue;

        // An example for an 'invalid' state. 
        // If (whatever prop name you want) is 'invalid', 
        // append appropriate class to the 'selected' value
        const invalidClassName = this.props.invalid ? " custom-invalid-class " : "";
        const colorBg = this.state.selectedValue ? 
            ("color-bg " + this.state.selectedValue) : ""; 
        const selectedClassName = colorBg + invalidClassName;
        return (
            <Select
            className="color-type-select"
            selectedClassName={selectedClassName}
            onChange={this.handleColor.bind(this)}
            >
                <Option
                placeholder={!noPlaceholder}
                selected={noPlaceholder}
                value={noPlaceholder ? "all" : ""}
                >
                    <ColorSplotch color="#444"/>
                    <span>{"Select a color"}</span>
                </Option>

                <Option
                value="orange"
                selected={(type === "#fb812e")}
                >
                    <ColorSplotch color="#fb812e"/>
                    <span>Orange (#fb812e) </span>
                </Option>

                <Option
                value="blue"
                selected={(type === "#4263d4")}
                onClick={()=>{console.log("I'm different")}}
                >
                    <ColorSplotch color="#4263d4"/>
                    <span>Blue (#4263d4)</span>
                </Option>

                <Option
                value="pink"
                selected={(type === "#f742d2")}
                >
                    <ColorSplotch color="#f742d2"/>
                    <span>Pink (#f742d2)</span>
                </Option>

                <Option
                value="green"
                selected={(type === "#3aa92b")}
                >
                    <ColorSplotch color="#3aa92b"/>
                    <span>Green (#3aa92b)</span>
                </Option>

            </Select>
        )
    }
}

ColorSelect.propTypes={
    invalid: PropTypes.bool,
    selectedValue: PropTypes.string,
    noPlaceholder: PropTypes.bool,
};


export default ColorSelect;
