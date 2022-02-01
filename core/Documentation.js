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