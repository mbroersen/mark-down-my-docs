/**
 *
 */
class If {
    /**
     *
     * @param contentBlock
     * @param statement
     */
    constructor(contentBlock, statement)
    {
        this.contentBlock = contentBlock;
        this.statement = statement;
    }

    /**
     *
     * @return {RegExp}
     */
    static get matcher() {
        return /( *)?(<(?<html_element>[^ ]+)([^>]*?)(v-if=")(?<statement>[^"]+)"([^>]*)?>)($\n)?(?<if_content>((((?!( *)?<\/\k<html_element>>$\n)^.*$\n)*)|(.*)))( *)?<\/\k<html_element>\>($\n)?/gm;
    }

    /**
     *
     * @param content
     * @param properties
     * @return {string}
     */
    parse(content, properties) {


        if (!properties.hasOwnProperty(this.statement)) {
            return this.removeBlockFromContent(content);
        }

        if (Array.isArray(properties[this.statement]) && properties[this.statement].length === 0) {
            return this.removeBlockFromContent(content);
        }

        if (!Array.isArray(properties[this.statement]) && !properties[this.statement]) {
            return this.removeBlockFromContent(content);
        }

        return content;
    }

    /**
     *
     * @param content
     * @return {string}
     */
    removeBlockFromContent(content) {
        return content.replace(this.contentBlock, '');
    }
}

module.exports = If;