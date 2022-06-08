import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload) {
    payload = { posts: payload };
    return this._super(store, primaryModelClass, payload);
  },
});
