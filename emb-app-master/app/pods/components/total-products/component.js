import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    
  totalPrice: computed('mobiles.[]', function() {
      const mobiles = this.get('mobiles');
      let price = 0;
      mobiles.forEach(ele => {
          price += ele.price;          
      });
      return price;
  }),

  init() {
    this._super(...arguments); 
  }
});