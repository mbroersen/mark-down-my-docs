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
     */
    parse(docBlock) {
        let parsableContent = this.templateContent;
        const properties = docBlock.describe();

        //console.log(properties);

        for (const [propertyName, propertyValue] of Object.entries(properties)) {
            console.log(propertyName, propertyValue)

            if (Array.isArray(propertyValue)) {
                parsableContent = this.parseVFor(parsableContent, propertyName, propertyValue);
                continue;
            }
            parsableContent = this.parseContentProperty(parsableContent, propertyName, propertyValue);
        }
        parsableContent = this.cleanUnusedProperties(parsableContent);
        parsableContent = this.cleanEmptyLines(parsableContent);
        return parsableContent;
    }

    cleanUnusedProperties(content) {
        return content.replace(/( *)?{{[^}]+}}($\n)?/gm, '');
    }

    cleanEmptyLines(content) {
        return content.replace(/^[\s\n]*$\n/gm, '');
    }

    parseContentProperty(content, name, value) {
        return content.replace(`{{${name}}}`, value ?? '');
    }


    parseVFor(content, name, values) {
        const regEx = `\\<(?<html_element>[^ ]+) (?<for_loop>v\\-for\\=\\"(?<loop_property>([^ ]*)) in (params))\\"\\>$\n(?<template>((?!( *\\<\\/\\k<html_element>))^(.*)$\n)+)^( *<\\/\\k<html_element>>)$\n`;
        const search = new RegExp(regEx, 'mg');

        //const vForBlocks = content.matchAll(/\<(?<html_element>[^ ]+) (?<for_loop>v\-for\=\"(?<loop_property>([^ ]*)) in (params))\"\>$\n(?<template>((?!( *\<\/\k<html_element>))^(.*)$\n)+)^( *<\/\k<html_element>>)/gm);
        const vForBlocks = content.matchAll(search);


        for (const match of vForBlocks) {
            console.log(match);

            const htmlElement = match?.groups.html_element;
            const vForTemplate = match?.groups?.template;
            let vForContentResult = '';
            let propertyName = match?.groups?.loop_property;
            for (const propertyValue of values) {
                vForContentResult += `<${htmlElement}>` + this.parseContentProperty(vForTemplate, propertyName, propertyValue) + `</${htmlElement}>`;
            }
            //content = content.replace(/\<(?<html_element>[^ ]+) (?<for_loop>v\-for\=\"(?<loop_property>([^ ]*)) in (params))\"\>$\n(?<template>((?!( *\<\/\k<html_element>))^(.*)$\n)+)^( *<\/\k<html_element>>)/gm, vForContentResult);
            content = content.replace(search, vForContentResult);
        }

        return content;
    }

    parseBindingProperty(content, bindingName, bindingValue) {


        content.replace()
    }



}

module.exports = Template;