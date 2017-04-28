import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute("manufacturer.index")
      })
    },

    destroyCar(car) {
      car.destroyRecord();
    }
  }
});
