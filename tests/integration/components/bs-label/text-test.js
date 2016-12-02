import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-label/text', 'Integration | Component | bs presenter/text', {
  integration: true
});

test('it renders', function(assert) {
  this.set('configuration', {
    text: 'i am the text',
    classNames: 'danger',
  });
  this.render(hbs`{{bs-label/text presenter=configuration}}`);
  assert.equal(this.$('span.danger').text().trim(), 'i am the text');
});
