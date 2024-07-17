using { sameer_2_a38 as my } from '../db/schema.cds';

@path: '/service/sameer_2_a38'
@requires: 'authenticated-user'
service sameer_2_a38Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}