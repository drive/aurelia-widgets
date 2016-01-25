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
    widget.customCSS = '';
    widget.bind();

    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should set the selected item to null when the input text is cleared', (done) => {
    //Arrange
    widget.selectedItem = { value: "this should not be selected" };

    //Act
    input.value = '';
    widget.keyUpListener();

    //Assert
    expect(widget.selectedItem).toBeNull();
    done();
  });

  it('should not select an item when enter is pressed and the suggestions are shown', () => {
    //arrange
    let enterPressed = false;
    widget.onenterpressed = () => enterPressed = true;
    widget.suggestionsShown();

    //act
    widget.suggestionsHidden(); //deliberately before the keyHandler, as this is the real world order
    widget.keyUpListener({ which: 13 });
    jasmine.clock().tick(500);

    //assert
    expect(enterPressed).toBeFalsy();
  });
});