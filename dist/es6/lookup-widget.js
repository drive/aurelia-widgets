import {inject, bindable, customElement, TWO_WAY} from 'aurelia-framework';
import $ from 'jquery';
import select2 from 'select2';

@inject(Element)
@customElement('lookup-widget')
@bindable({
  name:'interface',
  attribute:'interface',
  defaultBindingMode: TWO_WAY
})
@bindable({
  name:'value',
  attribute:'value',
  defaultBindingMode: TWO_WAY
})
export class LookupWidget {
  @bindable title;
  @bindable placeholder;

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
          self.interface.search(query.term).then((result) => {
            query.callback({ results: result });
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