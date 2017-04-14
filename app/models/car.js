import DS from 'ember-data';

// Generate models for:
//  Car
export default DS.Model.extend({
  // name
  name: DS.attr("string"),
  // hp
  hp: DS.attr('string'),
  // year
  year: DS.attr('string'),
  // price
  price: DS.attr('string'),
});
