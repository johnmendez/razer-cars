import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save() {
      const car = this.store.createRecord('car', this.formValues);

      // What brand does car belong to???
      car.set('brand', this.model);

      car.save().then(() => {
        this.transitionToRoute('manufacturer.car');
      });
    }
  }
});
