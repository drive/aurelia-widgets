Aurelia-Widgets

A widget library for the Aurelia Javascript Framework

Widgets Available:

- Autocomplete
- Combo Box
- Text Input
- Checkbox
- Radio Button
- Toggle Button
- Text Display

All the input widgets (except the Toggle Button) have a grab-focus attribute which, when set to true, will focus the main input of the widget

### Autocomplete
Should have a `lookup` bound to an object that has a `search(inputText)` function.  This will return a Promise that resolves to an object of the form:   
```
{
    suggestions: [ { value: "Text for the input", data: { } }, { value: "...", data: {...} }, ... ]
}
```

### Radio Button

Each radio button must have:
  - a non-empty, unique (within the group) `label`
  - a `group-name`

Optionally, it can also have a function bound to `onselecting`, e.g. `<radio-button onselecting.call="someFunction()"></radio-button>`
This should return true to allow the selection to go ahead, or false to leave the button group in the previously selected state.
By default, this action is always allowed.


### Checkbox
Can optionally have a function bound to `ontoggle`,  e.g. `<checkbox ontoggle.call="someFunction()"></checkbox>` which is
called whenever the widget is checked or unchecked.


### Currency Input
This will allow all characters to be entered (to more easily not penalise power users using `Home`, `Tab`, etc) but if the input
can't be parsed as a number, then the value will be reset and the value will be left as NaN

### Text Display
This is intended to be a limited text area, which will then add a tooltip to show the full text.  It works best when
`white-space` is set to `nowrap` on the `.text-display` class.

### Toggle Button
This is a switch, with a checkbox underneath (hence "checked" as an attribute).  Bindable attributes are:   
- on-text : When the switch is "checked" this text will be displayed
- off-text : When the switch is "unchecked" this text will be displayed
- width : the width of the toggle in pixels (should be an integer), default is null which should be 'auto' but doesn't work as well as it should
- checked : whether the switch is "checked"


#### Known Issues:
- The Checkboxes don't have their text vertically centered in Firefox.  This is because flex layout is not supported in buttons in Firefox