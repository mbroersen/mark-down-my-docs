const fs = require('fs');
const path = require('path');

/**
 * @class {MarkDown}
 * @description Create *MarkDown* files from `js-doc` blocks
 *
 * @example
 * ```markdown
 * # MarkDown
 *
 * ## description Create *MarkDown* files from `js-doc` blocks
 *
 * ```
 *
 */
class MarkDown {

    /**
     *
     * @param docsPath
     */
    constructor(docsPath) {
        this.docsPath = docsPath;

        if (!this.docsPath.endsWith(path.sep)) {
            this.docsPath += path.sep;
        }
    }

    /**
     *
     * @param string name
     */
    clean(name) {
        try {
            fs.rmSync(`${this.docsPath}${name}.md`);
        } catch (e) {
            console.info('no removable file');
        }
    }

    /**
     *
     * @param {Source} fileSource
     */
    createDirectory(fileSource) {
        try {
            fs.mkdirSync(`${this.docsPath}${path.sep}${fileSource.relativePath}`, { recursive: true });
        } catch (e) {

        }

    }

    /**
     *
     * @param {string} owner
     * @param {string} name
     */
    parseOwner(owner, name, source) {
        owner = owner.replace(/\s\{\s*/, '');

        if (owner.startsWith('class')) {
            this.writePart(`\n# ${owner} [#source](${path.relative(`${this.docsPath}${path.parse(name).dir}`, source.path)})\n`, name);
        } else {
            this.writePart(`\n## ${owner}\n\n`, name);
        }
    }

    /**
     *
     * @param {DocProperty} property
     * @param {string} name
     */
    parseProperty(property, name) {
        this.writePart(`\n\n### ${property.name.replace(/\s\*\s/, '')} \n`, name);

        if (property.hasContent) {
            this.parsePropertyContent(property.content, name);
        }
    }

    /**
     *
     * @param {string} content
     * @param {string} name
     */
    parsePropertyContent(content, name) {
        this.writePart(content.trimStart().replace(/(\*)/g, '').trimEnd().replace(/(\{[^}\n]+})/g, "> ```ts\n> $1\n> ```\n\n"), name);
    }

    /**
     *
     * @param {Source} fileSource
     */
    write(fileSource) {

        let name = '';
        if (fileSource.relativePath) {
            name += `${fileSource.relativePath}${path.sep}`;
        }
        name += fileSource.basename;
        this.clean(name);

        console.info(this.docsPath, name);

        for (const docBlock of fileSource.read()) {
            this.createDirectory(fileSource);
            this.writePart(docBlock.docsPath, name);
            this.parseOwner(docBlock.owner, name, fileSource);

            for (const property of docBlock.properties()) {
                this.parseProperty(property, name);
            }
        }
    }

    /**
     *
     * @param {string} content
     * @param {string} name
     */
    writePart(content, name) {
        if (!content) {
            return;
        }

        fs.writeFileSync(`${this.docsPath}${name}.md`, content, {flag: 'a'});
    }
}

module.exports = MarkDown;