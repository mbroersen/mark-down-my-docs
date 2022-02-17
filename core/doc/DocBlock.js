const DocProperty = require('./DocProperty');
const DocDescription = require('./DocDescription');

/**
 * @class
 */
class DocBlock {

    /**
     *
     * @param {string} sourcePath
     * @param {string} owner
     * @param {string} content
     */
    constructor(sourcePath, owner, content) {
        this.sourcePath = sourcePath;
        this._owner = owner;
        this.content = content;
    }

    /**
     *
     * @return {string}
     */
    get inDocsPath() {
        return this.sourcePath
            .replace(process.env.srcDirectory, '')
            .replace(/([tj]s)$/, '');
    }

    /**
     *
     * @return {string}
     */
    get owner() {
        return this._owner
            .replace(/((\s?[={]\s?)+$)/gm, '');
    }

    /**
     *
     * @return {string | undefined}
     */
    get ownerName() {
        return this._owner.match(/^((((private)|(public)|(protected)) )?((static)) )?(((class)|(get)|(set)|(function)) )?((\* )|#)?(?<name>[a-z0-9\_\-]+)/im)?.groups?.name;
    }

    /**
     *
     * @return {DocDescription}
     */
    describe() {
        return new DocDescription(this).describe();
    }

    /**
     *
     * @return {Generator<DocProperty, void, any>}
     */
    * properties() {
        for (const property of this.propertiesInContent()) {
            yield new DocProperty(property.groups.name, property.groups?.content);
        }
    }

    /**
     *
     * @return {IterableIterator<RegExpMatchArray>}
     */
    propertiesInContent() {
        return this.content.replace(/ {2,}/g, ' ')
            .replace(/\n/g, `\n\n`)
            .matchAll(/^(( ?\* @(?<name>[^ \n]+))(?<content>((?!^ ?\*? @).*$\n?)+)?)/gm);
    }
}

module.exports = DocBlock;