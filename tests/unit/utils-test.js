import { module, test } from 'qunit';
import * as helpers from 'bs-label/utils';

module('bs-label/utils');

test('#text', function(assert) {
  const a = helpers.text('cool label', {
    classNames: 'danger'
  });
  assert.deepEqual(a, {
    componentName: 'bs-label/text',
    properties: {
      classNames: 'danger',
      text: 'cool label'
    }
  });
});

test('#tag', function(assert) {
  assert.deepEqual(helpers.tag('cool label', 'danger'), {
    componentName: 'bs-label/text',
    properties: {
      classNames: 'label tag label-danger tag-danger',
      text: 'cool label'
    }
  });

  assert.deepEqual(helpers.tag('cool label'), {
    componentName: 'bs-label/text',
    properties: {
      classNames: 'label tag label-default tag-default',
      text: 'cool label'
    }
  });
});

test('#currency', function(assert) {
  const a = helpers.currency(12301);
  assert.deepEqual(a, {
    componentName: 'bs-label/text',
    properties: {
      classNames: 'text-currency',
      text: '$123.01'
    }
  });
});

test('#number', function(assert) {
  const a = helpers.number(12301, '0,0');
  assert.deepEqual(a, {
    componentName: 'bs-label/text',
    properties: {
      classNames: 'text-number',
      text: '12,301'
    }
  });
});

test('#date', function(assert) {
  const a = helpers.date('2016-12-02T11:50:55-08:00', 'll');
  assert.deepEqual(a, {
    componentName: 'bs-label/text',
    properties: {
      classNames: 'text-date',
      text: 'Dec 2, 2016'
    }
  });
});
