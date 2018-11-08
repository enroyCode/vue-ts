import VersionedEntity from 'model/entity/VersionedEntity'

import Ucn from './Ucn'

export default class StandardEntity extends VersionedEntity {
  created: Date;
  creator: Ucn;
  lastModified: Date;
  lastModifier: Ucn;
}
