import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr(),
  owners: hasMany('user', { inverse: 'ownedApps' }),
  collaborators: hasMany('user', { inverse: 'sharedApps' })
});
