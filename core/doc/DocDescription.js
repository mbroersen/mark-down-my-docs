const DocPropertyTypes = require("./DocPropertyTypes");

/**
 * @author Mark Broersen
 * @licence MIT
 * @class
 */
class DocDescription {

    /**
     *
     * @param {DocBlock} docBlock
     */
    constructor(docBlock) {
        this.docBlock = docBlock;
        this.data = {
            access: 'public',
            author: null,
            copyright: null,
            description: null,
            example: null,
            is_generator: false,
            is_static: false,
            kind: null,
            licence: null,
            name: null,
            params: [],
            returns: null,
            see: null,
            todo: null,
        }
    }

    /**
     *
     * @return {RegExpMatchArray}
     */
    get ownerParts() {
        return this.docBlock._owner.match(/^(((?<access>(private)|(public)|(protected)) )?(?<is_static>(static)) )?(?<kind>((class)|(get)|(set)|(function)))?(?<is_method>(?<is_generator>\* )?[^(]+[(](?<params>[^)]*)[)](: ?(?<returns>[^{]+))? \{$)?(?<is_property>[^=]+\=)?/m)
    }

    /**
     *
     */
    describeFromProperties() {
        for (const property of this.docBlock.properties()) {
            if (Object.values(DocPropertyTypes.access).includes(property.name)) {
                this.data.access = property.name;
            }

            if (Object.values(DocPropertyTypes.kind).includes(property.name)) {
                this.data.kind = property.name;
            }

            if (this.data.hasOwnProperty(property.name)) {
                this.data[property.name] = property.content;
            }
        }
    }

    /**
     *
     * @param paramsMatch
     */
    describeParams(paramsMatch) {
        this.data.params = (paramsMatch ?? '')
            .split(',')
            .filter((value) => value !== '')
    }

    /**
     *
     * @todo clean up code for creating
     *
     * @return {*|{access: string, is_static: boolean, kind: null, name: null, description: null, is_generator: boolean, returns: null, params: *[], example: null}}
     */
    describe() {
        const match = this.ownerParts;

        if (match.groups?.is_static) {
            this.data.is_static = true;
        }

        if (match.groups?.is_generator) {
            this.data.is_generator = true;
        }

        if (match.groups?.kind) {
            this.data.kind = match.groups?.kind;
        }

        if (match.groups?.is_method) {
            this.data.kind = 'method';
        }

        if (match.groups?.is_property) {
            this.data.kind = 'property';
        }
        this.data.name = this.docBlock.ownerName;
        this.describeParams(match.groups.params);
        this.describeFromProperties();

        return this.data;
    }

    toJSON() {
        return this.data;
    }

}

module.exports = DocDescription;