import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);
    const woods = [
      {
        id: 1,
        name: "Sofa",
        description: "king size bed",
        price: "5000",
        type: "teak wood",
      },
      {
        id:2,
        name: "Wardrobe",
        description: "king size",
        price: "5000",
        type: "teak wood",
      },
    ];
    this.set("woods", woods);
    woods.forEach((value) => {
        this.store.createRecord("furnitures", value);
      });
  },
});
