#!/usr/bin/env node
const path = require('path');

const myArgs = process.argv.slice(2);

if (myArgs.includes('--help')) {
    console.info('mark-down-my-docs.js');
    console.info('');
    console.info('usage : mark-down-my-docs.js [srcDirectory] [docsDirectory]');
    console.info('\nglobal options : ');
    console.table([{'command': '--help', 'description': 'Show help'}], ['command', 'description']);




    return;
}

const srcDir = myArgs[0] ?? 'src';
const docDir = myArgs[1] ?? 'docs';

const srcDirectory = path.join(__dirname, srcDir);
const docsDirectory = path.join(__dirname, docDir);

const SourceDirectory = require('./core/SourceDirectory');
const MarkDown = require('./core/MarkDown');
const Documentation = require('./core/Documentation');

process.env.srcDirectory = srcDirectory;

const source = new SourceDirectory(`${srcDirectory}`);
const writer = new MarkDown(docsDirectory);
const docs = new Documentation(source, writer);

docs.write();
console.info('done');