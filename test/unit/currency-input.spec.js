import {CurrencyInput} from '../../src/currency-input';

describe('The Currency Input widget', () => {

  let currencyInput;

  beforeEach(() => {
    currencyInput = new CurrencyInput();
  });

  it('should set value to number', () => {
    //arrange
    currencyInput.displayValue = '10000';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.value).toEqual(10000);
  });

  it('should prettify numbers as currency on blur', () => {
    //arrange
    currencyInput.displayValue = '10000';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.displayValue).toBe('10,000.00');
  });

  it('should parse pretty numbers as currency on blur', () => {
    //arrange
    currencyInput.displayValue = '10,000.00';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.displayValue).toBe('10,000.00');
  });

  it('should reset non-numbers to empty display string on blur', () => {
    //arrange
    currencyInput.displayValue = 'kjhdf';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.displayValue).toBe(undefined);
    expect(currencyInput.value).toBe(undefined);
  });

  it('should not allow a negative number if the onlyAllowPositiveNumbers is true', () => {
    //arrange
    currencyInput.onlyAllowPositiveNumbers = true;
    currencyInput.displayValue = '-1.00';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.displayValue).toBe(undefined);
    expect(currencyInput.value).toBe(undefined);
  });

  it('should match the default value if the user clears the input', () => {
    //arrange
    currencyInput.setNullToDefaultValue = 1.12;
    currencyInput.displayValue = '';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.displayValue).toEqual('1.12');
    expect(currencyInput.value).toEqual(1.12);
  });

  it('should allow a negative number if the onlyAllowPositiveNumbers is false', () => {
    //arrange
    currencyInput.onlyAllowPositiveNumbers = false;
    currencyInput.displayValue = '-1.00';

    //act
    currencyInput.onBlur();

    //assert
    expect(currencyInput.displayValue).toEqual('-1.00');
    expect(currencyInput.value).toEqual(-1.00);
  });
});