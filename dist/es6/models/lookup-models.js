import {HttpClient} from 'aurelia-http-client';
/**
* Abstract class for lookup widget
* Extend this class with your implementation that consumes your search API
*
* @class LookupAbstract
* @constructor HttpClient
*/
export class LookupAbstract {
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }
    
    setDefaultSelection() {
        return { id: this.value, text: this.value };
    }
    
    search(item) {
        //Override this class with your API to execute the query
        return new Promise((resolve) => {
          resolve({ items: [ { id: 1234, text: 'Test' } ] });
        })
    }
    
    formatItem(item) {
        return `<div class="select2-user-result"><strong>${item.id}</strong> ${item.text}</div>`;
    }
    
    formatSelection(item) {
        return item.id;
    }
}

/**
* Client for lookup widget
*
* @class ClientLookup
* @constructor HttpClient
*/
export class ClientLookup extends LookupAbstract {
    static inject() { return [HttpClient]; }
    constructor(http) {
       super(http);
    }
    
    search(item) {
        //TODO: Add Real API
        return new Promise((resolve) => {
          resolve({ items: [ { id: 'CLIENT', text: 'Test' } ] });
        })
    }
}

/**
* Receiveable Account for lookup widget
*
* @class ClientLookup
* @constructor HttpClient
*/
export class ReceivableAccountLookup extends LookupAbstract {
    static inject() { return [HttpClient]; }
    constructor(http) {
       super(http);
    }
    
    search(item) {
        //TODO: Add Real API
        return new Promise((resolve) => {
          resolve({ items: [ { id: 1234, text: 'RA12323' } ] });
        })
    }
}