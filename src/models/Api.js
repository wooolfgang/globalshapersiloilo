class Api {
  constructor(apiPath, app) {
    this.apiPath = apiPath;
    this.app = app;
  }

  async search(input) {
    const query = { query: { $text: { $search: input } } };
    return this.app.service(this.apiPath).find(query);
  }

  async fetchAll() {
    return this.app.service(this.apiPath).find();
  }
}

export default Api;
