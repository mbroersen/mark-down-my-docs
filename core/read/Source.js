const fs = require('fs');
const path = require('path');
const DocBlock = require("../doc/DocBlock");

/**
 * @class {Source}
 * @description Reads contents of javascript or typescript file
 *
 *
 * @example
 * ```js
 * const source = new Source('./helloWorld.js');
 *
 * for (const docBlock of source.read()) {
 *     // docblocks
 * }
 *
 * ```
 */
class Source {

    /**
     *
     * @param {string} path
     */
    constructor(path) {
        this.path = path;
    }

    /**
     *
     * @return {string}
     */
    get basename() {
        return path.parse(path.basename(this.path)).name;
    }

    /**
     *
     * @return {string}
     */
    get relativePath() {
        return path.relative(process.env.srcDirectory, path.parse(this.path).dir);
    }

    /**
     *
     * @param content
     * @return {IterableIterator<RegExpMatchArray>}
     */
    dockBlocksInContent(content) {
        return (content ?? "").matchAll(/(\/\*\*\n)(?<content>((?<!\*\/\n)([^]))*)(\*\/\n\s*(export (default )?)?(?<owner>(class|public|private|protected)?\s?.*)\n)/gm);
    }

    /**
     *
     * @return {RegExpMatchArray|false}
     */
    hasDockBlocks() {
        const content = this.readFile();
        return content.match(/(\/\*\*\n).*(\*\/)/gms) ?? false;
    }

    /**
     *
     * @return {string}
     */
    readFile() {
        return fs.readFileSync(this.path, {encoding: 'utf-8', flag: 'r'});
    }

    /**
     *
     * @description All parsable DocBlocks in source
     * @return {Generator<DocBlock, void, any>}
     */
    * read() {
        const content = this.readFile();
        for (const docblock of this.dockBlocksInContent(content)) {
            yield new DocBlock(this.path, docblock.groups.owner, docblock.groups.content);
        }
    }
}

module.exports = Source;