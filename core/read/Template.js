const fs = require('fs');

class Template {
    read() {
        return fs.readFileSync(process.cwd() + '/template/ContentTable.html', {encoding: 'utf-8', flag: 'r'});
    }
}

module.exports = Template;