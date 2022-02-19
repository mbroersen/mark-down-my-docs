const fs = require('fs');
const path = require('path');
const TemplateReader = require('../read/Template');
const TemplateParser = require('../parse/Template');

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
 */
class MarkDown {

    /**
     *
     * @param {string} docsPath
     */
    constructor(docsPath) {
        this.docsPath = docsPath;
        this.firstWrite = true;
        this.content = '';

        if (!this.docsPath.endsWith(path.sep)) {
            this.docsPath += path.sep;
        }
    }

    sourcePathFromDocs(name, source) {
        return path.relative(`${this.docsPath}${path.parse(name).dir}`, source.path);
    }

    /**
     * @description Removes documentation file
     *
     * @param {string} name
     */
    clean(name) {
        this.content = '';
        try {
            fs.rmSync(`${this.docsPath}${name}.md`);
        } catch (e) {
            console.info('no removable file');
        }
    }

    /**
     * @description Creates all directories in documentation path based on source path
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
     * @description write header for docblock
     *
     * @param {string} owner
     * @param {string} name
     * @param {Source} source
     */
    parseOwner(owner, name, source) {
        if (owner.startsWith('class')) {
            this.writePart(`\n# ${owner} \n`);
        } else {
            this.writePart(`\n## ${owner}\n\n`);
        }
    }

    /**
     * @description handle js-doc tags
     *
     * @param {DocProperty} property
     */
    parseProperty(property) {
        this.writePart(`\n\n### ${property.name.replace(/\s\*\s/, '')} `);

        if (property.hasContent) {
            const content = property.content;

            if (content.match(/```/)) {
                this.writePart(`\n`);
            }

            this.parsePropertyContent(content);
        }

        this.writePart(`\n`);
    }

    /**
     * @description write content of js-doc tag
     *
     * @param {string} content
     */
    parsePropertyContent(content) {
        this.writePart(content.replace(/^{{?(.*)}?}(.*)$/gm, "$2\n> ```ts\n> $1\n> ```\n\n"));
    }

    /**
     * @description start writing markdown
     *
     * @param {Source} fileSource
     */
    write(fileSource) {
        if (!fileSource.hasDockBlocks()) {
            return;
        }

        let name = this.nameByFileSource(fileSource);
        this.clean(name);
        if (this.firstWrite) {
            this.clean('Index');
        }

        console.info(this.docsPath, name);
        const parser = new TemplateParser(new TemplateReader());

        for (const docBlock of fileSource.read()) {
            this.parseOwner(docBlock.owner, name, fileSource);
            this.writePart(parser.parse(docBlock, this.sourcePathFromDocs(name, fileSource)));
        }

        this.writeIndexPart(fileSource, name);
        this.writeFile(name);
        this.firstWrite = false;
    }

    /**
     * @description Set right output name and path
     *
     * @param {Source} fileSource
     * @return {string}
     */
    nameByFileSource(fileSource) {
        let name = '';
        if (fileSource.relativePath) {
            name += `${fileSource.relativePath}${path.sep}`;
        }
        name += fileSource.basename;
        return name;
    }

    /**
     * @description write part if content is present.
     *
     * @param {string} content
     */
    writePart(content) {
        if (!content) {
            return;
        }

        this.content += content;
    }

    /**
     * @description write content to markdown file.
     *
     * @param {string} name
     */
    writeFile(name) {
        fs.writeFileSync(`${this.docsPath}${name}.md`, this.content, {flag: 'a'});
    }

    /**
     * @description write a header to go back to index
     *
     * @param {Source} fileSource
     * @param {string} name
     */
    writeHeader(fileSource, name) {
        this.createDirectory(fileSource);
        const indexPath = path.relative(`${this.docsPath}${path.parse(name).dir}`, `${this.docsPath}${path.sep}Index.md`);
        let header = `[Go back to index](${indexPath})\n\n---\n`;
        this.writePart(header);
    }

    /**
     * @description write `Index.md`
     *
     * @param {Source} fileSource
     * @param {string} name
     */
    writeIndexPart(fileSource, name) {
        let content = '';
        if (this.firstWrite) {
            content += '# Index\n';
        }

        let extraPathInformation = '';
        if (fileSource.relativePath) {
            extraPathInformation = `(${fileSource.relativePath})`;
        }

        content += `* [${extraPathInformation}${fileSource.basename}](./${name}.md)\n`;
        fs.writeFileSync(`${this.docsPath}${path.sep}Index.md`, content, {flag: 'a'});
    }
}

module.exports = MarkDown;