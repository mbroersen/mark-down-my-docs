const TemplateReader = require('../read/Template');
const IfSyntax = require('./syntax/If');
const ForSyntax = require('./syntax/For');
const ContentPropertySyntax = require('./syntax/ContentProperty');

class Template {

    /**
     *
     * @param {TemplateReader} templateReader
     */
    constructor(templateReader) {
        this.templateReader = templateReader;
        this.templateContent = this.templateReader.read();
    }

    /**
     *
     * @param {DocBlock} docBlock
     * @param {sourceCodePath: string, indexPath: string} sourceCodePath
     */
    parse(docBlock, paths) {
        let parsableContent = this.templateContent;
        const properties = docBlock.describe();
        properties['source_code'] = paths.sourceCodePath;
        properties['index_path'] = paths.indexPath;

        parsableContent = this.parseVIf(parsableContent, properties);

        for (const [propertyName, propertyValue] of Object.entries(properties)) {
            if (Array.isArray(propertyValue)) {
                parsableContent = this.parseVFor(parsableContent, propertyName, propertyValue);
                continue;
            }
            parsableContent = this.parseContentProperty(parsableContent, propertyName, propertyValue);
        }

        parsableContent = this.cleanUnusedProperties(parsableContent);
        return parsableContent;
    }

    /**
     *
     * @param content
     * @return string
     */
    cleanUnusedProperties(content) {
        return content.replace(/(^\s*)?{{[^}]+}}( *)?($\n^)?/gm, '');
    }

    /**
     *
     * @param content
     * @param name
     * @param value
     * @return string
     */
    parseContentProperty(content, name, value) {
        return new ContentPropertySyntax().parse(content, name, value);
    }

    /**
     *
     * @param content
     * @param name
     * @param values
     * @return string
     */
    parseVFor(content, name, values) {

        const vForRegEx = ForSyntax.expression(name);
        const vForBlocks = content.matchAll(vForRegEx);

        for (const match of vForBlocks) {
            const forSyntax = new ForSyntax(match?.groups?.template, match.groups);
            content = forSyntax.parse(content, values, name);
        }

        return content;
    }

    /**
     * @todo create regex
     * @param content
     * @param bindingName
     * @param bindingValue
     */
    parseBindingProperty(content, bindingName, bindingValue) {


        content.replace()
    }

    /**
     *
     * @param content
     * @param properties
     * @return {string}
     */
    parseVIf(content, properties) {
        const vIfBlocks = content.matchAll(/( *)?(<(?<html_element>[^ ]+)([^>]*?)(v-if=")(?<statement>[^"]+)"([^>]*)?>)($\n)?(?<if_content>((((?!( *)?<\/\k<html_element>>$\n)^.*$\n)*)|(.*)))( *)?<\/\k<html_element>\>($\n)?/gm)

        for (const vIfBlock of vIfBlocks) {
            const ifSyntax = new IfSyntax(vIfBlock[0], vIfBlock.groups?.statement);
            content = ifSyntax.parse(content, properties);
        }

        return content;
    }
}

module.exports = Template;