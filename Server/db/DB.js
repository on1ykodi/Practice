const sqlite3 = require('sqlite3').verbose();
const { resolve } = require('path');
const path = require('path');

class DB {
    constructor({ NAME }) {
        this.db = new sqlite3.Database(path.join(__dirname, NAME));
    }

    destructor() {
        if (this.db) this.db.close();
    }

    signUp(username, email) {
        return new Promise(resolve => {
            const query = "INSERT INTO users (username, email) VALUES(?,?)";
            this.db.run(query, [username, email], err => resolve(err));
        });
    }

}

module.exports = DB;