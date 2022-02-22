class Encodes {

    static html(content) {
        if (typeof content !== 'string') {
            return content;
        }

        return content.replace(/[<>*&]/g, html => ({
            '<': '&lt;',
            '>': '&gt;',
            '*': '&ast;',
            '&': '&amp;'
        }[html]));
    }
}

module.exports = Encodes;