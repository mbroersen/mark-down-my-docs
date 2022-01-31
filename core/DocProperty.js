/**
 * @class {DocProperty}
 */
class DocProperty {

    /**
     *
     * @param name
     * @param content
     */
    constructor(name, content = null) {
        this.name = name;
        this.content = content;
    }

    /**
     *
     * @return {boolean}
     */
    get hasContent() {
        return this.content !== null;
    }

}

module.exports = DocProperty;