import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-label/link', 'Integration | Component | bs label/link', {
  integration: true
});

test('it renders', function(assert) {
  this.set('config', {
    text: '123 link text',
    href: 'https://www.cool-dude.com',
    classNames: 'test-link link-of-test',
  });

  this.render(hbs`{{bs-label/link presenter=config}}`);

  const a = this.$().children('.test-link.link-of-test');
  assert.equal(a.text().trim(), '123 link text');
  assert.equal(a.attr('href'), 'https://www.cool-dude.com');
});
