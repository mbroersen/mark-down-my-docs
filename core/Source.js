const fs = require('fs');
const path = require('path');

/**
 * @class {Source}
 */
class Source {

    /**
     *
     * @param path
     */
    constructor(path) {
        this.path = path;
    }

    /**
     *
     * @return {any}
     */
    get basename() {
        return path.parse(path.basename(this.path)).name;
    }

    /**
     *
     * @return {any}
     */
    get relativePath() {
        return path.relative(process.env.srcDirectory, path.parse(this.path).dir);
    }

    /**
     *
     * @return {any}
     */
    read() {
        return fs.readFileSync(this.path, {encoding: 'utf-8', flag: 'r'});
    }
}

module.exports = Source;