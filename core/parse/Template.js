const TemplateReader = require('../read/Template');

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
     * @param {string} sourceCodePath
     */
    parse(docBlock, sourceCodePath) {
        let parsableContent = this.templateContent;
        const properties = docBlock.describe();
        properties['source_code'] = sourceCodePath;

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
        if ((value ?? '').length === 0) {
            return content;
        }
        return content.replace(`{{${name}}}`, value);
    }

    /**
     *
     * @param content
     * @param name
     * @param values
     * @return string
     */
    parseVFor(content, name, values) {
        const vForExpression = `\\<(?<html_element>[^ ]+) (?<for_loop>v\\-for\\=\\"(?<loop_property>([^ ]*)) in (params))\\"\\>$\n(?<template>((?!( *\\<\\/\\k<html_element>))^(.*)$\n)+)^( *<\\/\\k<html_element>>)$\n`;
        const vForRegEx = new RegExp(vForExpression, 'mg');
        const vForBlocks = content.matchAll(vForRegEx);

        for (const match of vForBlocks) {
            const htmlElement = match?.groups.html_element;
            const vForTemplate = match?.groups?.template;
            let vForContentResult = '';
            let propertyName = match?.groups?.loop_property;
            for (const propertyValue of values) {
                vForContentResult += `<${htmlElement}>` + this.parseContentProperty(vForTemplate, propertyName, propertyValue) + `</${htmlElement}>`;
            }

            content = content.replace(vForRegEx, vForContentResult);
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

    parseVIf(content, properties) {
        const vIfBlocks = content.matchAll(/^(.*)(<(?<html_element>[^ ]+)([^>]*?)(v-if=")(?<statement>[^"]+)"([^>]*)?>)($\n)?(?<if_content>((((?!( *)?<\/\k<html_element>>$\n)^.*$\n)*)|(.*)))( *)?<\/\k<html_element>\>$\n/gm)

        for (const vIfBlock of vIfBlocks) {
            if (Array.isArray(properties[vIfBlock.groups.statement]) && properties[vIfBlock.groups.statement].length === 0) {
                content = content.replace(/^(.*)(<(?<html_element>[^ ]+)([^>]*?)(v-if=")(?<statement>[^"]+)"([^>]*)?>)($\n)?(?<if_content>((((?!( *)?<\/\k<html_element>>$\n)^.*$\n)*)|(.*)))( *)?<\/\k<html_element>\>$\n/gm, '');
                continue;
            }

            if (Array.isArray(properties[vIfBlock.groups.statement]) && !properties[vIfBlock.groups.statement]) {
                content = content.replace(/^(.*)(<(?<html_element>[^ ]+)([^>]*?)(v-if=")(?<statement>[^"]+)"([^>]*)?>)($\n)?(?<if_content>((((?!( *)?<\/\k<html_element>>$\n)^.*$\n)*)|(.*)))( *)?<\/\k<html_element>\>$\n/gm, '');
            }
        }
        return content;
    }
}

module.exports = Template;