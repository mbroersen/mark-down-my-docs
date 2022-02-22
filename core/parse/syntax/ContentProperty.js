const Encodes = require("../helper/Encodes");

/**
 *
 */
class ContentProperty {

    /**
     *
     * @param content
     * @param name
     * @param value
     * @return {*}
     */
    parse(content, name, value) {
        if ((value ?? '').length === 0) {
            return content;
        }
        return content.replace(`{{${name}}}`, Encodes.html(value));
    }
}

module.exports = ContentProperty;