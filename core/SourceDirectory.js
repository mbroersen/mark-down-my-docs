const Source = require('./read/Source');
const fs = require('fs');
const path = require('path');

/**
 * @class {SourceDirectory}
 * @description Reads contents of source directory with javascript or typescript files
 *
 * @example
 * ```js
 * const sourceDirectory = new SourceDirectory('./core');
 *
 * // Outputs Sources in generator
 * for (const source of sourceDirectory.read()) {
 *     // instance of Source
 *     source.read() // get content
 * }
 *
 * ```
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
     * @description will output list of Source for each file in directory or subdirectory
     *
     * @return {Generator<Source, void, any>}
     */
    * read() {
        for (const file of this.scanDirectory(this.path)) {
            yield new Source(file);
        }
    }

    /**
     * @description will output list of path names for each file in directory or subdirectory
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