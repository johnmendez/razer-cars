import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('contact', function() {
    this.route('create');
  });
  this.route('manufacturers');
  this.route('manufacturers-new');
  this.route('manufacturer');
});

export default Router;
