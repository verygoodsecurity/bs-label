import EmComponent from 'ember-component';
import layout from './template';
import computed, { reads } from 'ember-computed';
import { A } from 'ember-array/utils';
import { isBlank } from 'ember-utils';

export default EmComponent.extend({
  layout,
  tagName: 'address',
  classNameBindings: ['presenter.classNames'],

  line1: reads('presenter.address.line1'),
  line2: reads('presenter.address.line2'),
  line3: computed('presenter.address.city', 'presenter.address.region', 'presenter.address.postalCode', function() {
    const city = this.get('presenter.address.city');
    const region = this.get('presenter.address.region');
    const postalCode = this.get('presenter.address.postalCode');

    const firstPiece = A([city, region]).reject(isBlank).join(', ');

    return `${firstPiece} ${postalCode || ''}`
  }),
  addressLines: computed('line1', 'line2', 'line3', 'presenter.address.country', function() {
    return A([
      this.get('line1'),
      this.get('line2'),
      this.get('line3'),
      this.get('presenter.address.country'),
    ])
    .reject(isBlank);
  }),
});
