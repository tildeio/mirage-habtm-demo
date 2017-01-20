import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr(),
  ownedApps: hasMany('app', { inverse: 'owners' }),
  sharedApps: hasMany('app', { inverse: 'collaborators' })
});
