/**
 * @class
 */
class DocProperty {

    /**
     *
     * @param name
     * @param content
     */
    constructor(name, content = null) {
        this._name = name;
        this._content = content;
    }

    /**
     *
     * @return {boolean}
     */
    get hasContent() {
        return this._content !== null;
    }

    /**
     *
     * @return {string}
     */
    get content() {
        return (this._content ?? '')
            .trimStart()
            .replace(/(\*)/g, '')
            .replaceAll(/\n{2,}/g, `\n`)
            .trimEnd();
    }



    /**
     *
     * @return {string}
     */
    get name() {
        return this._name
            .replace(/\s\*\s/, '');
    }

}

module.exports = DocProperty;