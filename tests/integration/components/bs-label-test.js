import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-label', 'Integration | Component | bs-label', {
  integration: true
});

test('it renders using long instantiation', function(assert) {
  this.set('config', {
    text: '123 I am text'
  });
  this.render(hbs`{{bs-label componentName="bs-label/text" presenterProperties=config}}`);
  assert.equal(this.$().text().trim(), '123 I am text');
});

test('it renders using ordered parameters', function(assert) {
  this.set('presenter', {
    componentName: 'bs-label/text',
    properties: {
      text: '123 I am placeholder',
      classNames: 'text-em text-muted',
    }
  });
  this.render(hbs`{{bs-label presenter}}`);
  assert.equal(this.$('.text-em.text-muted').text().trim(), '123 I am placeholder');
});
