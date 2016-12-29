import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-label/link-to', 'Integration | Component | bs label/link to', {
  integration: true
});

test('it renders', function(assert) {
  this.set('presenter', {
    text: 'cool link 123',
    classNames: 'cool-link',
    params: ['administrator.tools', { id: 123 }],
  });

  this.render(hbs`{{bs-label/link-to presenter=presenter}}`);
  const link = this.$().find('a');
  assert.equal(link.text(), 'cool link 123');
  assert.equal(link.is('.cool-link'), true);
  assert.equal(link.attr('target'), undefined);
});

test('it adds the target', function(assert) {
  this.set('presenter', {
    text: 'cool link 123',
    classNames: 'cool-link',
    target: '_blank',
    params: ['administrator.tools', { id: 123 }],
  });

  this.render(hbs`{{bs-label/link-to presenter=presenter}}`);
  const link = this.$().find('a');

  assert.equal(link.text(), 'cool link 123');
  assert.equal(link.is('.cool-link'), true);
  assert.equal(link.attr('target'), '_blank');
});
