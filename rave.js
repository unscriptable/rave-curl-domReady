/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var domReady = require('curl/plugin/domReady');

exports.create = create;

function create (context) {
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap.domReady = 'curl/plugin/domReady';
}
