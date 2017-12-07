import React from 'react';
import PropTypes from 'prop-types';

export default class EZSelectOption extends React.Component{
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        value: PropTypes.any.isRequired, //<- Screw you, conventional wisdom! You'll never take me alive!

        // ** Controlled by <Select> parent
        name: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps={
        isSelectOption: true
    }

    render(){
        return (
            <label 
            id={this.props.id}
            className={"ez-select-item " + (this.props.className || "")}
            >
                <input type="radio"
                onClick={this.props.onChange || this.props.onClick}
                name={this.props.name}
                value={this.props.value || ""}
                style={{display: "none"}}
                data-index={this.props.childIndex}
                />

                {this.props.children}
            </label>
        )
    }
}