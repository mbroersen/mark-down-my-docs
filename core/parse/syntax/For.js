class For {
    constructor(contentBlock, matchGroups)
    {
        this.contentBlock = contentBlock;
        this.matchGroups = matchGroups;
    }

    static expression(name) {
        const vForExpression = `\\<(?<html_element>[^ ]+) (?<for_loop>v\\-for\\=\\"(?<loop_property>([^ ]*)) in (${name}))\\"\\>$\n(?<template>((?!( *\\<\\/\\k<html_element>))^(.*)$\n)+)^( *<\\/\\k<html_element>>)$\n`;
        return new RegExp(vForExpression, 'mg');
    }

    parse(content, values, name) {
        const htmlElement = this.matchGroups.html_element;
        const vForTemplate =  this.contentBlock;
        let vForContentResult = '';
        let propertyName = this.matchGroups?.loop_property;
        for (const propertyValue of values) {
            vForContentResult += `<${htmlElement}>` + this.parseContentProperty(vForTemplate, propertyName, propertyValue) + `</${htmlElement}>`;
        }

        return content.replace(For.expression(name), vForContentResult);
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

}

module.exports = For;