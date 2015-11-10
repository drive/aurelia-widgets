Aurelia-Widgets

A widget library for the Aurelia Javascript Framework

Widgets Available:

- Autocomplete
- Combo Box
- Text Input
- Checkbox
- Radio Button

All the widgets have a grab-focus attribute which, when set to true, will focus the main input of the widget

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


