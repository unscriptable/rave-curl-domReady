/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var domReady = require('curl/plugin/domReady');

exports.create = create;

function create (context) {
	var info = {
		name: 'curl/plugin/domReady',
		module: domReady
	};
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap['domReady']
		= context.amdPluginMap['curl/plugin/domReady']
		= info;
}
