import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Update your routes to load/save data using Ember data instead of bespoke fetch requests

Router.map(function() {
  // manufacturer.index
  this.route('manufacturer', { path: '/manufacturers'}, function() {
    // manufacturer.new
    this.route('new');
    // Create an edit route
    //  Link to edit route
    // Save model changes on form submit and redirect to manufacturer.car
    this.route('edit', { path: '/:brand_id/edit' });
    // manufacturer.car
    this.route('car', { path: '/:brand_id' }, function() {
      // manufacturer.car.new
      this.route('new');
    });
  });
});

export default Router;
