#!/usr/bin/env node

// add node dependencies
const path = require('path');

// app requirements
const SourceDirectory = require('./core/SourceDirectory');
const MarkDown = require('./core/write/MarkDown');
const Documentation = require('./core/Documentation');

// arguments
const myArgs = process.argv.slice(2);
const srcDir = myArgs[0] ?? 'src';
const docDir = myArgs[1] ?? 'docs';

// directories
const srcDirectory = path.join(process.cwd(), srcDir);
const docsDirectory = path.join(process.cwd(), docDir);
process.env.srcDirectory = srcDirectory;

// help
if (myArgs.includes('--help')) {
    console.info('mark-down-my-docs.js');
    console.info('');
    console.info('usage : mark-down-my-docs.js [srcDirectory] [docsDirectory]');
    console.info('\nglobal options : ');
    console.table([{'command': '--help', 'description': 'Show help'}], ['command', 'description']);
    return;
}

// app and run information
const source = new SourceDirectory(`${srcDirectory}`);
const writer = new MarkDown(docsDirectory);
const docs = new Documentation(source, writer);
console.time('done in');
docs.write();
console.group();
console.timeEnd('done in');
console.log(`memory usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`);
console.groupEnd();