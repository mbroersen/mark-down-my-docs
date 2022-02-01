const fs = require('fs');
const path = require('path');
const DocBlock = require("./DocBlock");

/**
 * @class {Source}
 * @description Reads contents of javascript or typescript file
 *
 *
 * @example
 * ```js
 * new Source('./helloWorld.js');
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
     * @description All parsable DocBlocks in source
     * @return {Generator<DocBlock, void, any>}
     */
    * read() {
        const content = fs.readFileSync(this.path, {encoding: 'utf-8', flag: 'r'});
        for (const docblock of this.dockBlocksInContent(content)) {
            yield new DocBlock(this.path, docblock.groups.owner, docblock.groups.content);
        }
    }
}

module.exports = Source;