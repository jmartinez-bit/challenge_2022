const { v4: uuidv4 } = require('uuid');

class Link {

    id = '';
    url = '';
    title = '';
    tags = '';
    createdAt = null;

    constructor (url, title, tags) {
        this.id = uuidv4();
        this.url = url;
        this.title = title;
        this.tags = tags;
        this.createdAt = (new Date()).toISOString();
    }
}

module.exports = Link;