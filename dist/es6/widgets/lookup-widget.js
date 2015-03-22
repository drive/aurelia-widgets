import {Behavior} from 'aurelia-framework';
import $ from 'jquery';
import select2 from 'select2';

export class LookupWidget {
    static metadata(){ return Behavior
                .customElement('lookup')
                .withProperty('interface')
                .withProperty('title')
                .withProperty('placeholder')
                .withProperty('value')
    }
    
    static inject() {
        return [Element];    
    }
    
    constructor(element) {
        this.element = element;
    }
    
    bind() {
       this.apply();
    }
    apply() {
       setTimeout(() => {
           //normally we dont need to do this but the query function on the select2, this becomes the jquery object on the callback
           var self = this;
           $(this.element).find('input').select2({
               initSelection: function(element, callback) {
                 callback(self.interface.setDefaultSelection());  
               },
               placeholder: this.placeholder,
               formatSelection: self.interface.formatSelection,
               formatResult: self.interface.formatItem,
               query: function(query) {
                  self.interface.search(query.term).then((response) => {
                     query.callback({ results: response.items }); 
                  });
               },
               width:'100%' 
           });
        
           $(this.element).find('input').select2('val', this.value);
            $(this.element).find('input').on('change', () => {
               this.value = $(this.element).find('input').select2('val');
           });
       }, 100);
    }
   
}