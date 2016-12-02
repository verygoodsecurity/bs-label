import EmRoute from 'ember-route';
import * as Helpers from 'bs-label/utils';

export default EmRoute.extend({
  model() {
    return [
      Helpers.text('cool'),
      Helpers.tag('pending'),
      Helpers.tag('error', 'danger'),
      Helpers.currency(12301),
      Helpers.date('2016-12-02T11:50:55-08:00', 'MMM Do Y'),
      Helpers.number(939834, '0,0'),
    ];
  },
});
