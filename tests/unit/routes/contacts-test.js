import { module, test } from 'qunit';
import { setupTest } from 'animal-shelter/tests/helpers';

module('Unit | Route | contacts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contacts');
    assert.ok(route);
  });
});
