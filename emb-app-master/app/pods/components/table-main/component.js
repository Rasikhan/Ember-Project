import Component from "@ember/component";

export default Component.extend({
    title: null,
    isChecked: false,
  checkedMobiles: null,
    
  init() {
    this._super(...arguments);

    const productLists = [{}];

    this.set('productLists', productLists)
  }
});