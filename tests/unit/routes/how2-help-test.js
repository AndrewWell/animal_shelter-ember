import { module, test } from 'qunit';
import { setupTest } from 'animal-shelter/tests/helpers';

module('Unit | Route | how2Help', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:how2-help');
    assert.ok(route);
  });
});
