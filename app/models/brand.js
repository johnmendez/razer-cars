import DS from 'ember-data';

// Generate models for:
//  Brand
export default DS.Model.extend({
  //  name
  name: DS.attr('string'),
  //  country
  country: DS.attr('string'),
  // cars - hasMany car
  cars: DS.hasMany('car'),
});
