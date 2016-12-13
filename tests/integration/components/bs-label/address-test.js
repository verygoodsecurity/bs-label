import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-label/address', 'Integration | Component | bs-label/address', {
  integration: true
});

test('it adds the classNames', function(assert) {
  this.set('configuration', { classNames: 'danger' });
  this.render(hbs`{{bs-label/address presenter=configuration}}`);
  assert.equal(this.$('address').is('.danger'), true);
  assert.deepEqual(this.$('address').text(), '');
});

test('it renders the address', function(assert) {
  const self = this;
  function t(address, expectation) {
    self.set('configuration', { address });
    self.render(hbs`{{bs-label/address presenter=configuration}}`);
    const result = self.$('address').text().split('\n').map(a => a.trim());
    assert.deepEqual(result, expectation);
  }
  t({
    line1: '123 Main St',
    line2: '#200',
    city: 'Metropolis',
    region: 'MM',
    postalCode: '00000',
    country: 'USA'
  }, [
    "123 Main St",
    "#200",
    "Metropolis, MM 00000",
    "USA",
    ""
  ]);

  t({
    line1: '123 Main St',
    city: 'Metropolis',
    region: 'MM',
    postalCode: '00000',
    country: 'USA'
  }, [
    "123 Main St",
    "Metropolis, MM 00000",
    "USA",
    ""
  ]);

  t({
    line1: '123 Main St',
    line2: '#200',
    region: 'MM',
    postalCode: '00000',
    country: 'USA'
  }, [
    "123 Main St",
    "#200",
    "MM 00000",
    "USA",
    ""
  ]);
});
