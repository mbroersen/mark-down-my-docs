const DocProperty = require('./DocProperty');

/**
 * @class {DocBlock}
 */
class DocBlock {
    constructor(sourcePath, owner, content) {
        this.sourcePath = sourcePath;
        this.owner = owner;
        this.content = content;
    }

    /**
     *
     * @return {string}
     */
    get inDocsPath() {
        return this.sourcePath.replace(process.env.srcDirectory, '').replace(/([tj]s)$/, '');
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
     * @return {*}
     */
    propertiesInContent() {
        return this.content.matchAll(/(\*?\s?@)(?<name>[^\s\n]+)(?<content>[^@]*)?/gm);
    }
}

module.exports = DocBlock;