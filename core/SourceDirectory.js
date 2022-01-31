const Source = require('./Source');
const fs = require('fs');
const path = require('path');

/**
 *
 */
class SourceDirectory {

    /**
     *
     * @param path
     */
    constructor(path) {
        this.path = path;
    }

    /**
     *
     * @return {Generator<Source, void, any>}
     */
    * read() {
        for (const file of this.scanDirectory(this.path)) {
            yield new Source(file);
        }
    }

    /**
     *
     * @param srcPath
     * @return {Generator<string|any, void, any>}
     */
    * scanDirectory(srcPath) {
        const files = fs.readdirSync(srcPath);

        for (const file of files) {
            const filePath = `${srcPath}${path.sep}${file}`;
            const fileStats = fs.lstatSync(filePath)
            if (fileStats.isDirectory()) {
                for (const dirFile of this.scanDirectory(filePath)) {
                    yield dirFile;
                }
            }

            if (fileStats.isFile && file.match(/\.([jt]s)$/)) {
                yield filePath;
            }
        }
    }
}

module.exports = SourceDirectory;