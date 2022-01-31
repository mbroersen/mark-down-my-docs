const fs = require('fs');
const path = require('path');

/**
 *
 */
class MarkDown {

    /**
     *
     * @param docsPath
     */
    constructor(docsPath) {
        this.docsPath = docsPath;
    }

    /**
     *
     * @param name
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
     * @param fileSource
     */
    createDirectory(fileSource) {
        try {
            fs.mkdirSync(`${this.docsPath}${path.sep}${fileSource.relativePath}`, { recursive: true });
        } catch (e) {

        }

    }

    /**
     *
     * @param owner
     * @param name
     */
    parseOwner(owner, name) {
        owner = owner.replace(/\s\{\s*/, '');

        if (owner.startsWith('class')) {
            this.writePart(`\n# ${owner}\n`, name);
            this.writePart(`^ [src](../src/${name}.ts) ^\n\n`, name);
        } else {
            this.writePart(`\n## ${owner}\n\n`, name);
        }
    }

    /**
     *
     * @param property
     * @param name
     */
    parseProperty(property, name) {
        this.writePart(`\n\n### ${property.name.replace(/\s\*\s/, '')} \n`, name);

        if (property.hasContent) {
            this.parsePropertyContent(property.content, name);
        }
    }

    /**
     *
     * @param content
     * @param name
     */
    parsePropertyContent(content, name) {
        this.writePart(content.trimStart().replaceAll(/(\*)/g, '').trimEnd().replace(/(\{[^}\n]+})/g, "> ```ts\n> $1\n> ```\n\n"), name);
    }

    /**
     *
     * @param docBlocks
     * @param fileSource
     */
    write(docBlocks, fileSource) {
        const name = `${fileSource.relativePath}${path.sep}${fileSource.basename}`;

        this.createDirectory(fileSource);
        this.clean(name);

        for (const docBlock of docBlocks) {
            this.writePart(docBlock.docsPath, name);
            this.parseOwner(docBlock.owner, name);

            for (const property of docBlock.properties()) {
                this.parseProperty(property, name);
            }
        }
    }

    /**
     *
     * @param content
     * @param name
     */
    writePart(content, name) {
        if (!content) {
            return;
        }

        fs.writeFileSync(`${this.docsPath}${name}.md`, content, {flag: 'a'});
    }
}

module.exports = MarkDown;