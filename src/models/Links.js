const Link = require("./Link");

class Links {
  _list = {
    abc: 123,
  };

  get list() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const link = this._list[key];
      list.push(link);
    });

    return list;
  }

  constructor(title, tags) {
    this._list = {};
  }

  readLinksFromArray(links = []) {
    links.forEach((link) => {
      this._list[link.id] = link;
    });
  }

  createLink(url = "", title = "", tags = "") {
    const link = new Link(url, title, tags);
    this._list[link.id] = link;
  }
}

module.exports = Links;
