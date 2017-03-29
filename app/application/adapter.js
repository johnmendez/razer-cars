// Generate an application adapter
// Configure with host and namespace from application configuration
import DS from 'ember';
import config from 'razer-cars/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,
});
