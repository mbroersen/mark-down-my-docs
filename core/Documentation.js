/**
 * @class Documentation
 * @description Bridge for reader and writer
 *
 * @example
 * ```js
 * const docs = new Documentation(reader, writer);
 * docs.write();
 * ```
 */
class Documentation {

    /**
     *
     * @param {Source} source
     * @param {MarkDown} writer
     */
    constructor(source, writer) {
        this.source = source;
        this.writer = writer;
    }

    /**
     * @description start writing the documentation
     */
    write() {
        for (const fileSource of this.source.read()) {
            if (fileSource) {
                this.writer.write(fileSource);
            }
        }
    }
}

module.exports = Documentation;