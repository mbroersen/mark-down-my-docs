const DocProperty = require('./DocProperty');

/**
 * @class
 */
class DocBlock {
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
        return this.content.replaceAll(/ {2,}/g, '')
            .replaceAll(/\n/g, `\n\n`)
            .matchAll(/^(( ?\* @(?<name>[^ \n]+))(?<content>((?!^ ?\*? @).*$\n?)+)?)/gm);
    }
}

module.exports = DocBlock;