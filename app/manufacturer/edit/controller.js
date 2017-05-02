import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(changeset) {
      changeset.save().then(() => {
        this.transitionToRoute('manufacturer.index')
      });
    },
  }
});
