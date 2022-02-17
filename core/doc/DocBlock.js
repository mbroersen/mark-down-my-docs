const DocProperty = require('./DocProperty');
const DocPropertyTypes = require('./DocPropertyTypes');

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
     * @todo optimize this part of the code.
     * @return {{owner: string, access: string | undefined, kind: (string|string), name, is_generator: boolean, returns: string | undefined, params: string[]}}
     */
    describe() {
        const match = this._owner.match(/^(((?<access>(private)|(public)|(protected)) )?(?<is_static>(static)) )?(?<kind>((class)|(get)|(set)|(function)))?(?<is_method>(?<is_generator>\* )?[^(]+[(](?<params>[^)]*)[)](: ?(?<returns>[^{]+))? \{$)?(?<is_property>[^=]+\=)?/m)
        let kind = match.groups?.is_method ? 'method' : null;
        kind = match.groups?.is_property ? 'property' : kind;
        let access = 'public';
        let example = null;
        let description = null;

        for (const property of this.properties()) {
            if (Object.values(DocPropertyTypes.access).includes(property.name)) {
                access = property.name;
            }

            if (Object.values(DocPropertyTypes.kind).includes(property.name)) {
                kind = property.name;
            }

            if (property.name === 'example') {
                example = property.content;
            }

            if (property.name === 'description') {
                description = property.content;
            }
        }

        //todo cleanup
        return {
            owner: this._owner,
            name: this.ownerName,
            access: match.groups?.access ?? access,
            kind: match.groups?.kind ?? kind,
            is_generator: !!match.groups?.is_generator,
            is_static: !!match.groups?.is_static,
            returns: match.groups?.returns,
            example,
            description,
            params: (match.groups?.params ?? '')
                .split(',')
                .filter((value) => value !== ''),
        }
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