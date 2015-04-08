/**
* Abstract class for lookup widget
* Extend this class with your implementation that consumes your search API
*
* @class LookupAbstract
* @constructor HttpClient
*/
export class LookupAbstract {
    constructor(){
    }
    
    setDefaultSelection() {
        return { id: this.value, text: this.value };
    }
    
    search(item) {
        //Override this class with your API to execute the query
        return new Promise((resolve) => {
          resolve({ response: [ { code: 1234, description: 'Test' } ] });
        })
    }
    
    formatItem(item) {
        return `<div class="select2-user-result"><strong>${item.code}</strong> ${item.description}</div>`;
    }
    
    formatSelection(item) {
        return item.code;    
    }
}