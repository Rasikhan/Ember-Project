import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  title: "Electronics",
  store: service(),
  isChecked: false,
  checkedMobiles: null,
  product: null,

  init() {
    this._super(...arguments);

    const productLists = [
      {
        id: 1,
        name: "sony",
        description: "dslr camera with 108mp",
        price: 5000,
        type: "camera",
      },
      {
        id: 2,
        name: "mi",
        description: "108mp,super amoled display,sd880 processor",
        price: 5000,
        type: "Phone",
      },
    ];

    this.set("productLists", productLists);
    this.set("product", []);
    const product = this.get("product");
    this.set("checkedMobiles", []);
    productLists.forEach((value) => {
     const val = this.store.createRecord("electronics", value);
     product.push(val);
    });
  },

  actions: {
    remove(item1) {
      let taskStore = this.store.peekRecord("electronics", item1);
      taskStore.destroyRecord();
      let allRecord = this.store.peekAll("electronics");
      this.set("productLists", allRecord);
    },

    checkBoxClick(productList, event) {
      const value = event.target.value;
      const product = this.get("product");
      const checkedMobiles = this.get("checkedMobiles");
      if (event.target.checked) {
        const selectedMob = product.filter((ele) => ele.name === value);
        checkedMobiles.pushObject(...selectedMob);
        productList.set("isChecked", true);
        return this.set("isChecked", true);
      }
      const afterUnchecked = checkedMobiles.filter((ele) => ele.name !== value);
      this.set("checkedMobiles", afterUnchecked);
      productList.set("isChecked", false);
      this.set("isChecked", false);
    },
  },
});
