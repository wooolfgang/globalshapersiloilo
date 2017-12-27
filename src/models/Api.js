class Api {
  constructor(apiPath, app) {
    this.apiPath = apiPath;
    this.app = app;
  }

  async search(input) {
    if (!input) {
      return this.fetchAll();
    }

    const query = { query: { $text: { $search: input } } };
    return this.app.service(this.apiPath).find(query);
  }

  async find(query) {
    return this.app.service(this.apiPath).find({ query });
  }

  async create(input) {
    return this.app.service(this.apiPath).create(input);
  }

  async get(query) {
    return this.app.service(this.apiPath).get(query);
  }

  async update(id, query) {
    return this.app.service(this.apiPath).update(id, query);
  }
}

export default Api;
