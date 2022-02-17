/**
 * @enum
 * @see `https://jsdoc.app/`
 */
class DocPropertyTypes {

    /**
     * @readonly
     * @type {{"@public": string, "@package": string, "@protected": string, "@private": string}}
     *
     */
     #access = {
        '@private': 'private',
        '@protected': 'protected',
        '@public': 'public',
        '@package': 'package',
     }

    /**
     * @readonly
     *
     * @type {{"@class": string, "@namespace": string, "@constructor": string, "@event": string, "@mixin": string, "@constant": string, "@function": string, "@enum": string, "@method": string, "@module": string, "@package": string, "@prop": string, "@typedef": string, "@property": string, "@const": string, "@external": string}}
     */
     #kind = {
         '@function': '@function',
         '@method': '@function',
         '@enum': '@enum',
         '@const': '@constant',
         '@constant': '@constant',
         '@class': '@class',
         '@constructor': '@class',
         '@prop': '@property',
         '@property': '@property',
         '@event': '@event',
         '@namespace': '@namespace',
         '@external': '@external',
         '@mixin': '@mixin',
         '@module': '@module',
         '@package': '@package',
         '@typedef': '@typedef',
     }

    /**
     * @readonly
     *
     * @type {{"@readonly": string, "@deprecated": string, "@static": string, "@global": string, "@generator": string, "@abstract": string, "@ignore": string, "@virtual": string, "@async": string}}
     */
     #descriptors = {
         '@abstract': '@abstract',
         '@virtual': '@abstract',
         '@async': '@async',
         '@deprecated': '@deprecated',
         '@global': '@global',
         '@generator': '@generator',
         '@ignore': '@ignore',
         '@readonly': '@readonly',
         '@static': '@static',
     }

    /**
     * @readonly
     * @type {{"@requires": string, "@param": string, "@classdesc": string, "@type": string, "@yields": string, "@returns": string, "@arg": string, "@file": string, "@member": string, "@borrows": string, "@hideconstructor": string, "@access": string, "@callback": string, "@inheritdoc": string, "@memberof": string, "@augments": string, "@default": string, "@constructs": string, "@extends": string, "@this": string, "@exception": string, "@argument": string, "@inner": string, "@instance": string, "@interface": string, "@variation": string, "@kind": string, "@implements": string, "@mixes": string, "@return": string, "@alias": string, "@listens": string, "@name": string, "@lends": string, "@summary": string, "@emits": string, "@fires": string, "@var": string, "@exports": string, "@throws": string, "@override": string}}
     */
     #values = {
         '@access': '@access',  //
         '@alias': '@alias',  //
         '@augments': '@augments',
         '@borrows': '@borrows',  //
         '@callback': '@callback',  //
         '@classdesc': '@classdesc',  //
         '@constructs': '@constructs',  //
         '@default': '@default',
         '@emits': '@emits',
         '@exception': '@throws',
         '@exports': '@exports',  //
         '@extends': '@extends',
         '@file': '@file',
         '@fires': '@fires',
         '@hideconstructor': '@hideconstructor',  //
         '@implements': '@implements',  //
         '@inheritdoc': '@inheritdoc',  //
         '@inner': '@inner',  //
         '@instance': '@instance',  //
         '@interface': '@interface',  //
         '@kind': '@kind',  //
         '@lends': '@lends',  //
         '@listens': '@listens',  //
         '@var': '@member',
         '@member': '@member',
         '@memberof': '@memberof',  //
         '@mixes': '@mixes',  //
         '@name': '@name',  //
         '@override': '@override',  //
         '@arg': '@param',
         '@argument': '@param',
         '@param': '@param',
         '@requires': '@requires',
         '@return': '@returns',
         '@returns': '@returns',
         '@summary': '@summary',  //
         '@this': '@this',
         '@throws': '@throws',
         '@type': '@type',
         '@variation': '@variation',
         '@yields': '@yields',
     };

    /**
     * @readonly
     * @type {{"@author": string, "@description": string, "@copyright": string, "@since": string, "@version": string, "@example": string, "@license": string, "@todo": string, "@see": string, "@tutorial": string}}
     */
     #writings = {
         '@author': '@author',
         '@copyright': '@copyright',
         '@description': '@description',
         '@example': '@example',
         '@license': '@license',
         '@see': '@see',
         '@since': '@since',
         '@todo': '@todo',
         '@tutorial': '@tutorial',
         '@version': '@version',
     }

    /**
     *
     * @return {{"@public": string, "@package": string, "@protected": string, "@private": string}}
     */
     static get access() {
         return {
             '@private': 'private',
             '@protected': 'protected',
             '@public': 'public',
             '@package': 'package',
         }
     }

     static get kind() {
         return {
             '@function': 'function',
             '@method': 'function',
             '@enum': 'enum',
             '@const': 'constant',
             '@constant': 'constant',
             '@class': 'class',
             '@constructor': 'class',
             '@prop': 'property',
             '@property': 'property',
             '@event': 'event',
             '@namespace': 'namespace',
             '@external': 'external',
             '@mixin': 'mixin',
             '@module': 'module',
             '@package': 'package',
             '@typedef': 'typedef',
         }
     }
}

module.exports = DocPropertyTypes;