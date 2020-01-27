const { Store } = require('./index');

describe('key-value store', () => {
  test('expect to be able to construct a store with store + get functionality', () => {
    const store = new Store();
    expect(store.constructor).toEqual(Store);
    expect(typeof store.get === 'function').toBeTruthy();
    expect(typeof store.store === 'function').toBeTruthy();
  });

  test('expect to be able to store value to hashmap', () => {
    const store = new Store();
    expect(store.data['event']).toBeFalsy();

    store.store('event', 'value');
    expect(store.data['event']).toBeTruthy();
  });

  test('expect to be able to retrieve value from hashmap', () => {
    const store = new Store();

    store.store('event', 'value');
    expect(store.get('event')).toEqual('value');
  });

  test.skip('expect a log to be kept', () => {});
});
