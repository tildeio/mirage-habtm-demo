import Ember from 'ember';

const { RSVP: { hash } } = Ember;

export default Ember.Route.extend({
  model() {
    return hash({
      users: this.store.findAll('user'),
      apps: this.store.findAll('app')
    });
  }
});
