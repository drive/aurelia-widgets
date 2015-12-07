import {CurrencyInput} from '../../src/currency-input';

describe('The Currency Input widget', () => {

  let currencyInput;

  beforeEach(() => {
    currencyInput = new CurrencyInput();
  });

  it('should prettify numbers as currency on blur', () => {
    //arrange
    currencyInput.displayValue = '10000';

    //act
    currencyInput.onblur();

    //assert
    expect(currencyInput.displayValue).toBe('10,000.00');
  });

  it('should parse pretty numbers as currency on blur', () => {
    //arrange
    currencyInput.displayValue = '10,000.00';

    //act
    currencyInput.onblur();

    //assert
    expect(currencyInput.displayValue).toBe('10,000.00');
  });

  it('should reset non-numbers to empty display string on blur', () => {
    //arrange
    currencyInput.displayValue = 'kjhdf';

    //act
    currencyInput.onblur();

    //assert
    expect(currencyInput.displayValue).toBe('');
    expect(isNaN(currencyInput.value)).toBe(true);
  });
});