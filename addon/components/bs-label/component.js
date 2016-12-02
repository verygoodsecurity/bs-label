import EmComponent from 'ember-component';
import { reads } from 'ember-computed';
import layout from './template';

const Component = EmComponent.extend({
  layout,
  tagName: '',

  componentName: reads('presenter.componentName'),
  presenterProperties: reads('presenter.properties'),
});

Component.reopenClass({
  positionalParams: ['presenter'],
});

export default Component;
