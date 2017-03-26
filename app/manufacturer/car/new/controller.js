import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
  },

  actions: {
    submitForm() {
      const brand = this.store.createRecord('brand', this.formValues);

      brand.s('project', this.model);

      brand.save().then(() => {
        this.set('formValues', {});
          this.transitionToRoute('manufacturer.index')
      });
    },
  }
});
