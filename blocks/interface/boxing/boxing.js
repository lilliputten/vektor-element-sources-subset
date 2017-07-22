/* jshint camelcase:false, unused:false, laxbreak:true, expr:true, boss:true */
/* globals modules, BEMHTML, app, project */
/**
 *
 * @module boxing
 * @overview __INFO__
 *
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2017.05.25 17:49:05
 * @version 2017.05.25 17:49:05
 *
 * $Date: 2017-07-11 19:47:15 +0300 (Tue, 11 Jul 2017) $
 * $Id: boxing.js 8733 2017-07-11 16:47:15Z miheev $
 *
 */

modules.define('boxing', [
        'i-bem-dom',
        'vow',
        'project',
        'jquery',
    ],
    function(provide,
        BEMDOM,
        vow,
        project,
        $,
    __BASE) {

/**
 *
 * @exports
 * @class boxing
 * @bem
 * @classdesc __INFO__
 *
 * TODO
 * ====
 *
 * ОПИСАНИЕ
 * ========
 *
 */

// Ссылка на описание модуля
var __module = this;

var boxing = /** @lends boxing.prototype */ {

};

provide(BEMDOM.declBlock(this.name, boxing)); // provide

}); // module
