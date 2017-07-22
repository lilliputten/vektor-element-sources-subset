/* jshint camelcase:false, unused:false, laxbreak:true, expr:true, boss:true */
/* globals modules, app, project */
/**
 *
 * @overview Загрузчик плагина `jquery.mousewheel`.
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2016.09.20, 13:57
 * @version 2016.09.20, 13:57
 *
 * $Date: 2017-07-17 14:16:38 +0300 (Mon, 17 Jul 2017) $
 * $Id: mousewheel.js 8762 2017-07-17 11:16:38Z miheev $
 *
 * @see project/libs/jquery.mousewheel/jquery.mousewheel.js
 * @see project/blocks/root/select/_mousewheel/select_mousewheel.js
 *
 */

modules.define('mousewheel', [
        'project__config',
        'project__helpers',
        'i-bem-dom',
        'loader_type_js',
        'jquery'
    ], function(provide,
        config,
        helpers,
        BEMDOM,
        loader,
        $,
    __BASE) {

var jsUrl = config.libs.mousewheel.js;

loader(
    helpers.expand_path(jsUrl),
    function() {
        provide($.mousewheel);
    }
);

});