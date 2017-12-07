# ez-react-select-input
#### An easy select input limited only by *imagination*!!!(...and css)


### Description
The major difference between this and a vanilla HTML select element, aside from styling(see below), is this `<Select>` holds any element type you want in it's `<Option>` children, or even the `<Select>` itself. I've intentionally kept it as mechanically un-opinionated as I can. 
The upside is, each `<Option>` can look however you want, containing whatever you want, and you can even have children besides `<Option>`s inside the main `<Select>`.
The downside is any styling that needs to be done is on the developer, although I've tried to give a couple useful generic examples. 

## Examples
There are three self-contained example components under the 'frameworks' index.

## Usage
I tried to make this as easy as possible to use, and as close to standard html as I could get. I.E:
```
import { Select, Option } from 'ez-react-select;
<Select
name="(Form value name)"
id="(Optional, but if set then the dropdown id will be this + '-dropdown')"
className="(Applied to main container)"
selectedClassName="(Applied to the 'selected' item)"
dropdownClassName="(Applied to the hidden dropdown)"
optClassName=("Applied to all Option element children")
onChange={Required}
>
    <Option
    className="(optional)"
    value="option1"
    placeholder={true}
    selected={true}
    >
        (anything here)
    </Option>

    <hr /> //<-Check it out! Totally fine!

    <Option
    className="(still optional)"
    value="option2"
    selected={false}
    >
        (anything here)
    </Option>

</Select>
```

### The guts
1. All children inside the `<Select>` tags are enumerated over, extracting the `<Option>` with the 'placeholder' attribute. Any additional `<Option>` with 'placeholder' will overwrite the previous one.
2. The children are enumerated over again, this time creating a reference list of `<Option>` elements, appending classes and initializing onClick. 
3. When an `<Option>` is clicked, the `<Option>` is retrieved from the reference list held in state by it's index. 
4. The 'selected' `<Option>` is cloned, put in the main wrapper, appending the 'selectedClassName' attribute and changing it's onClick to a toggle function. This also 'checks' the hidden radio input, changing the form value.

# References
## Predefined className's
These are always defined and appended, but custom classes added will override them.
* **.ez-select-wrapper** - `<Select>` wrapper
* **.ez-select-dropdown** - Dropdown div
* **.ez-select-item** - All `<Option>` elements
* **.select** - Child being displayed, including placeholders
## `<Select>` className props: 
The main `<Select>` element accepts these className props and appends them onto the various elements
* **className** - applied to the main div containing everything. And I do mean *everything*. 
* **selectedClassName** - applied to whatever item is selected, including placeholders.
* **dropdownClassName** - applied to the div that's toggled open by clicking whatever item is selected/a placeholder.
* **optionClassName** - applied to all Option elements.

### Useful info
- **There has to be an `<Option>` with 'placeholder'**, otherwise there won't be an initial `<Option>` to click on. 
- An `<Option>` with a 'placeholder' attribute but not 'selected' will not set a value by default, but will be shown by default.
- When an option is 'selected' the whole child is copied and placed in main div.
- An `<Option>` can have it's own onChange, which will override the `<Select>` onChange. This could change in the future, as right now it stops event propagation with no way to continue it, which cancels the selected child from changing. That's obviously not ideal.

### Inspiration
In making my app (*shameless plug:* [Incooknito Kitchen](https://incooknito-kitchen.herokuapp.com)), I thought it would be awesome to have an input where I could show color splotches next to their corresponding text options; but all the select input components I found only showed text, or didn't allow for the usual HTML-style markup.
This project turned from a select input into more of a dropdown-esque framework, but I guess that's what a select input is at heart anyway.

### **Things to be done**
If you feel like taking a crack at any of these, or think it would benefit from a different feature, feel free. 
I just ask if it limits the customization, you make a 'Framework' instead of changing the core.
* [ ] **Accessibility** - I have no idea how to make this accessible; but it is a priority.
* [ ] **Tabbable** - ...and currently, it's not. Which can be really annoying if you have a good tab flow through your form.
* [ ] **e.target** - Currently e.target is pointing at a hidden radio input, which works for getting an onChange value, but not much else. It would be nice to have it pointed at something more useful, but I'm open as to what that should be.
* [ ] **Add/Remove `<Option>` after mount** - I haven't tested this at all. Could open up some interesting possibilities.
* [ ] **OptGroup** - I can't think of an implementation that would play nice with the level of customization `<Select>` allows, but it wouldn't hurt to explore the idea in order to bring this closer to standard HTML.