export class AutoCompleteAbstract {
  constructor() {
  }

  search(item) {
      //Override this class with your API to execute the query
      return new Promise((resolve) => {
        resolve({ suggestions: [ { value: 'Code and Description', data: '01234' } ] });
      });
  }
}
