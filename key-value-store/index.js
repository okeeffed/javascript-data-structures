class Store {
  constructor() {
    this.data = {};
  }

  store(key, value) {
    this.data[key] = value;
  }

  get(key) {
    try {
      return this.data[key];
    } catch (err) {
      return undefined;
    }
  }
}

module.exports = {
  Store,
};
