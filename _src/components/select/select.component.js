import React from 'react';
import PropTypes from 'prop-types';
import SelectDropdown from '../select-dropdown/select-dropdown.component';

export default class SelectInput extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        
        // classNames
        className: PropTypes.string,
        dropdownClassName: PropTypes.string,
        optionClassName: PropTypes.string,
        selectedClassName: PropTypes.string,
    }

    state={
        open: false,
        Options: null,
        // TODO (save placeholder, add option to show if selecting)
        PlaceholderOption: null,
        SelectedOption: null,
        selectedIndex: null
    }

    componentDidMount(){
        let selectedIndex = null;
        let SelectedOption = null;

        // filter out 'placeholder' options here to keep array order later
        const filteredChildren = [];
        React.Children.forEach(
            this.props.children,
            (child)=>{
                // If not an option
                if( !child.props.isSelectOption || 
                // or not a placeholder
                    !child.props.placeholder ) {
                        // then add child as is to child list
                        filteredChildren.push(child);
                    }
                // otherwise, child must be a placeholder option
                else {
                // Assigns placeholder child to 'SelectedOption'
                // note this is why there can only be one placeholder,
                // which makes sense to me anyway. 

                // give placeholder needed "option" classNames
                const newClassName = (this.props.optionClassName || "") + 
                ' ' + (child.props.className || "");

                    SelectedOption = React.cloneElement(
                        child, 
                        {
                            // 'selected' refers to the element being what is shown when 'closed'
                            selected: null,
                            // Since it will be active, 
                            onClick: this.toggleDropdown.bind(this),
                            name: this.props.name,
                            className: newClassName,
                            // 'checked' is the actual radio input
                            checked: true
                        }
                    )
                }                
            }
        );

        const Options = 
        React.Children.map(
            filteredChildren,
        (child, index)=>{
            // (in theory) this allows styling/building of pretty much anything.
            // Only 'option' children are modified and able to alter the 
            // <form> value
            if( !child.props.isSelectOption ){
                return child;
            } else {
                // adds individual className after blanket className
                const newClassName = (this.props.optionClassName || "") + ' ' +
                (child.props.className || "");
                
                const newOption = React.cloneElement(
                    child, 
                    {
                        // TODO I don't like this repetition between these two functions
                        selected: null,
                        onClick: this.handleChange.bind(this),
                        name: this.props.name,
                        childIndex: index,
                        className: newClassName,
                        checked: false
                });

                // If child has 'selected' attr, set the appropriate index
                if(child.props.selected){ 
                    selectedIndex = index;
                }

                // 'placeholder' children were already filtered out,
                // so can just return the child
                return newOption;
            }
            
        });

        // If there is an option selected
        // then grab it and set it as selected
        // *Note: if there is a placeholder and it is not set to 'selected',
        // this will override the placeholder
        if(selectedIndex !== null){
            SelectedOption = 
                this.findOption(selectedIndex, Options);
        }

        // Initialize state with appropriate vals
        this.setState({
            Options,
            selectedIndex,
            SelectedOption
        })
    }

    handleChange(e){
        // close dropdown
        this.closeDropdown();
        // get new index
        const selectedIndex = e.target.dataset.index;
        // find option, clone, and return it
        const SelectedOption = 
            this.findOption(selectedIndex);
        
        // Update state with selected child and it's index
        this.setState({
            SelectedOption,
            selectedIndex
        });
        // Pass event to parent onChange. 
            // TODO need to decide what 'target' will point to. 
            // Right now it's to an invisible input
        if(this.props.onChange){
            this.props.onChange(e);
        } 
    }

    findOption(childIndex, OptionList){
        // get index number (since 'data' attribute stores a string)
        // TODO might need to change to random generated key(uniqid.time() maybe)
        const parsedIndex = parseInt(childIndex, 10);
        // populate options(children) to choose from,
        // either from children passed in or state
        const children = OptionList ? 
            [...OptionList] :[...this.state.Options];
        // prepare var
        let SelectedOption;
        // loop through each 'child' option
        React.Children.forEach(children, (child, index)=>{
            // find appropriate child based on index
            if(parsedIndex === index){
                // grab Selected child to display
                SelectedOption = 
                    // clone child
                    React.cloneElement(
                        child,
                        {   // replace click event with opening dropdown controls
                            onClick: this.toggleDropdown.bind(this),
                            // set to 'checked' for form submission
                            checked: true,
                            // 'selectedClassName' is added at render time
                            className: child.props.className
                        }
                    );
            } 
        });
        // return cloned element
        return SelectedOption;
    }


    closeDropdown(){
        this.setState({open: false});
    }
    toggleDropdown(){
        const isOpen = !this.state.open;
        this.setState({open: isOpen});
    }

    render(){
        const SelectedOption = this.state.SelectedOption;

        // Adds 'selectedClassName' class to selected element
        const SelectedOptionWithClass = SelectedOption ?
            React.cloneElement(SelectedOption, {
                className: SelectedOption.props.className + 
                    " selected " + (this.props.selectedClassName || '')
            }) : "";
            
        return(
        <div
        style={this.props.style || {}}
        id={this.props.id}
        className={"ez-select-wrapper " + (this.props.className || "")}
        >

            { // Render 'SelectedOption', now cloned with selected class
                SelectedOptionWithClass }
  
            { // Since this is a separate component, it can be wrapped with 
            // cssTransition animation if desired
            this.state.open && (
                <SelectDropdown 
                id={this.props.id}
                className={this.props.dropdownClassName}
                >
                    {this.state.Options}
                </SelectDropdown>
            )}
            
        </div>
        )
    }
}