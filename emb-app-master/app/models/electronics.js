import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  price: attr(Number, 'number'),
  type: attr('string')
});

