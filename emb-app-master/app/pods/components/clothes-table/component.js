import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({   
    store: service(),
    title: "Clothes",
    isChecked: false,
  checkedMobiles: null,  
    
  init() {    
    this._super(...arguments);

    const clothes = [
        {
          id: 1,
          name: "jeans",
          description: "Elastic stretches are applied",
          price: 1000,
          type: "jabra model",
        },
        {
          id: 2,
          name: "Cotton shirts",
          description: "pure cotton mixed with organic stuffs",
          price: 3000,
          type: "lycra",
        }       
      ];
  
      this.set("clothes", clothes);
      this.set('product', []);
      const product = this.get('product');
      this.set("checkedMobiles", []);
      clothes.forEach((value) => {
      const val = this.store.createRecord("clothes", value);
      product.push(val);
      });
  },
  actions: {  

    remove(item1) {
      let taskStore = this.store.peekRecord("clothes", item1);
      taskStore.destroyRecord();
      let allRecord = this.store.peekAll("clothes");
      this.set("clothes", allRecord);
    },

    checkBoxClick(productList, event) {
      const value = event.target.value;
      const product = this.get('product');
      const checkedMobiles = this.get('checkedMobiles')
      if (event.target.checked) {
        const selectedMob = product.filter(ele => ele.name === value);
        checkedMobiles.pushObject(...selectedMob);
        productList.set('isChecked', true);
        return this.set('isChecked', true);
      }
      const afterUnchecked = checkedMobiles.filter(ele => ele.name !== value);
      this.set('checkedMobiles', afterUnchecked);
      productList.set('isChecked', false);
      this.set('isChecked', false);
    },
  },
});