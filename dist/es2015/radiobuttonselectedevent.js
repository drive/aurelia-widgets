export let RadioButtonSelectedEvent = class RadioButtonSelectedEvent {

  constructor(groupName, buttonLabel) {
    this.groupName = groupName;
    this.buttonLabel = buttonLabel;
  }
};