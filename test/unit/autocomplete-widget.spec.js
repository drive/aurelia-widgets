import $ from 'jquery';
import {AutoCompleteWidget} from '../../src/autocomplete-widget';
import {ViewCompiler} from 'aurelia-templating';

class MockElement {

  constructor(fakeElement) {
    this._input = fakeElement;
  }
  querySelector(queryString) {
    if (queryString === 'input') {
      return this._input;
    }
  }
}

describe('The Autocomplete Widget', () => {

  let widget, input;

  beforeEach(() => {
    input = document.createElement('input');
    let mockElement = new MockElement(input)
    widget = new AutoCompleteWidget(mockElement);
    widget.bind();
  });

  it('should the selected item to null when the input text is cleared', (done) => {
    //Arrange
    widget.selectedItem = { value: "this should not be selected" };

    //Act
    input.value = '';
    widget._keyUpListener();

    //Assert
    expect(widget.selectedItem).toBeNull();
    done();
  });
});