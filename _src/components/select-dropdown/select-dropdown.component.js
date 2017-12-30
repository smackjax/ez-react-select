import React from 'react';
import PropTypes from 'prop-types';

// This component contains everything between  
// the <Select> tags
const EZSelectDropdown = (props)=>{

    const dropId = props.id ?
        props.id + "-dropdown" : "";

    return (
        <div
        id={dropId}
        className={"ez-select-dropdown " + props.className}>
            {props.children}
        </div>
    )
}

EZSelectDropdown.propTypes={
    id: PropTypes.string,
    className: PropTypes.string,
    key: PropTypes.string
};

export default EZSelectDropdown;
