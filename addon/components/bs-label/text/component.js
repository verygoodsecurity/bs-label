import EmComponent from 'ember-component';
import { reads } from 'ember-computed';
import layout from './template';

export default EmComponent.extend({
  layout,
  tagName: 'span',
  text: reads('presenter.text'),
  classNameBindings: ['presenter.classNames']
});
