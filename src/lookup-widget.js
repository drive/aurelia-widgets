import {inject, bindable, customElement, bindingMode} from 'aurelia-framework';
import $ from 'jquery';
import select2 from 'select2';

@inject(Element)
@customElement('lookup-widget')
@bindable({
  name:'controller',
  attribute:'controller',
  defaultBindingMode: bindingMode.twoWay
})
@bindable({
  name:'selectedItem',
  attribute:'selected-item',
  defaultBindingMode: bindingMode.twoWay
})
@bindable('title')
@bindable('placeholder')
export class LookupWidget {
  constructor(element) {
    this.element = element;
  }

  bind() {
    this.apply();
  }

  unbind() {
    $(this.element).find('input').destroy();
  }

  get isShowing() {
    return this.title.length > 0;
  }

  apply() {
    //normally we dont need to do this but the query function on the select2, this becomes the jquery object on the callback
    var self = this;
    $(this.element).find('input').select2({
      initSelection: function(element, callback) {
        callback(self.controller.setDefaultSelection());
      },
      id: self.controller.id,
      placeholder: this.placeholder,
      formatSelection: self.controller.formatSelection,
      formatResult: self.controller.formatItem,
      query: function(query) {
        self.controller.search(query.term).then((result) => {
          query.callback({ results: result });
        });
      },
      width:'100%'
    });

    $(this.element).find('input').select2('val', this.selectedItem);
    $(this.element).find('input').on('change', () => {
      this.selectedItem = $(this.element).find('input').select2('val');
    });
  }
}
