import { Model } from 'ember-cli-mirage';
import hasAndBelongsToMany from '../utils/has-and-belongs-to-many';

export default Model.extend({
  owners: hasAndBelongsToMany('user', { inverse: 'ownedApps' }),
  collaborators: hasAndBelongsToMany('user', { inverse: 'sharedApps' })
});
