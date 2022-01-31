const DocBlock = require('./DocBlock');

/**
 * @class Documentation
 */
class Documentation {

    /**
     *
     * @param source
     * @param writer
     */
    constructor(source, writer) {
        this.source = source;
        this.writer = writer;
    }

    /**
     *
     * @param content
     * @return {Generator<DocBlock, void, any>}
     */
    * docBlocks(content) {
        for (const docblock of this.dockBlocksInContent(content)) {
            yield new DocBlock(this.source.path, docblock.groups.owner, docblock.groups.content);
        }
    }

    /**
     *
     * @param content
     * @return {IterableIterator<RegExpMatchArray>}
     */
    dockBlocksInContent(content) {
        return (content ?? "").matchAll(/(\/\*\*\n)(?<content>((?<!\*\/\n)([^/]))*)(\*\/\n\s*(export (default )?)?(?<owner>(class|public|private|protected)?\s?.*)\n)/gm);
    }

    /**
     *
     */
    write() {
        for (const fileSource of this.source.read()) {
            this.writer.write(this.docBlocks(fileSource.read()), fileSource);
        }
    }
}


module.exports = Documentation;