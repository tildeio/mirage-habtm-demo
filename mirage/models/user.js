import { Model } from 'ember-cli-mirage';
import hasAndBelongsToMany from '../utils/has-and-belongs-to-many';

export default Model.extend({
  ownedApps: hasAndBelongsToMany('app', { inverse: 'owners' }),
  sharedApps: hasAndBelongsToMany('app', { inverse: 'collaborators' })
});
